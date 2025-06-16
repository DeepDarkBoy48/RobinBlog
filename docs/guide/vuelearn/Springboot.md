# 注解


三者都是用来从 HTTP 请求中取值，但取值来源和场景不同：

## `@PathVariable`

    - 来源：URL 路径中的占位符
    - 场景：RESTful 风格中，用于资源定位
    - 例：GET /users/{id} → @PathVariable Long id

## `@RequestParam`

    - 来源：查询字符串（?key=value）或表单数据
    - 场景：GET 的查询参数，POST 的表单字段
    - 例：GET /search?kw=java&page=2 → @RequestParam String kw, @RequestParam int page

## `@RequestBody`

    - 来源：请求体（通常是 JSON、XML）
    - 场景：接收复杂对象或批量数据
    - 例：POST /users，请求体 { "name":"张三","age":18 } → @RequestBody User user

```java
@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public User getById(@PathVariable Long id) { … }

    @GetMapping("/search")
    public List<User> search(@RequestParam String kw,
                             @RequestParam(defaultValue="1") int page) { … }

    @PostMapping
    public User create(@RequestBody User user) { … }
}
```

`@RequestBody`同样可以吧json转换成Map集合

```java
 @PatchMapping("/updatePwd")
    public Result updatePwd(@RequestBody Map<String, String> params) {
```

## `@RequestHeader`

    - 获取请求头的数据

<ImageDisplay src="/images/springboot/springboot-1.png" />

## PoJo entity 类上的注解

### `@JsonIgnore`

让springmvc把当前对象转换成json字符串的时候,忽略password,最终的json字符串中就没有password这个属性了

### `@Data`

在编译阶段,为实体类自动生成setter  getter toString

```java
//lombok  在编译阶段,为实体类自动生成setter  getter toString
// pom文件中引入依赖   在实体类上添加注解
@Data
public class User {
    @NotNull
    private Integer id;//主键ID
    private String username;//用户名
    @JsonIgnore//让springmvc把当前对象转换成json字符串的时候,忽略password,最终的json字符串中就没有password这个属性了
    private String password;//密码


    @NotEmpty
    @Pattern(regexp = "^\\S{1,10}$")
    private String nickname;//昵称

    @NotEmpty
    @Email
    private String email;//邮箱
    private String userPic;//用户头像地址
    private LocalDateTime createTime;//创建时间
    private LocalDateTime updateTime;//更新时间
}
```

### `@JsonFormat`

格式化时间格式

```java
 @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;//创建时间
```


编译器不要报告任何警告



## `@URL`

校验是否为url

```java
@PatchMapping("updateAvatar")
    public Result updateAvatar(@RequestParam @URL String avatarUrl) {
        userService.updateAvatar(avatarUrl);
        return Result.success();
    }
```

# 实用技巧

## validation

用法1:参数校验

`@Pattern`正则表达式匹配

<ImageDisplay src="/images/springboot/springboot-2.png" />

```java
@Validated
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Result register(@Pattern(regexp = "^\\S{5,16}$") String username, @Pattern(regexp = "^\\S{5,16}$") String password) {

        //查询用户
        User u = userService.findByUserName(username);
        if (u == null) {
            //没有占用
            //注册
            userService.register(username, password);
            return Result.success();
        } else {
            //占用
            return Result.error("用户名已被占用");
        }
    }
}
```



用法2:实体类参数校验

`@NotNull`不能为null

```java
//lombok  在编译阶段,为实体类自动生成setter  getter toString
// pom文件中引入依赖   在实体类上添加注解
@Data
public class User {
    @NotNull
    private Integer id;//主键ID
    private String username;//用户名
    @JsonIgnore//让springmvc把当前对象转换成json字符串的时候,忽略password,最终的json字符串中就没有password这个属性了
    private String password;//密码


    @NotEmpty
    @Pattern(regexp = "^\\S{1,10}$")
    private String nickname;//昵称

    @NotEmpty
    @Email
    private String email;//邮箱
    private String userPic;//用户头像地址
    private LocalDateTime createTime;//创建时间
    private LocalDateTime updateTime;//更新时间
}

```

接口添加`@Validated`

```java
@PutMapping("/update")
    public Result update(@RequestBody @Validated User user) {
        userService.update(user);
        return Result.success();
    }
```

分组校验

<ImageDisplay src="/images/springboot/springboot-4.png" />

```java
@Data
public class Category {
    @NotNull(groups = Update.class)
    private Integer id;//主键ID
    @NotEmpty
    private String categoryName;//分类名称
    @NotEmpty
    private String categoryAlias;//分类别名
    private Integer createUser;//创建人ID
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;//创建时间
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateTime;//更新时间

    //如果说某个校验项没有指定分组,默认属于Default分组
    //分组之间可以继承, A extends B  那么A中拥有B中所有的校验项


    public interface Add extends Default {

    }

    public interface Update extends Default{

    }
}
```

没有groups的都是default，id的group为update，所以只有update有这个校验

```java
@PutMapping
    public Result update(@RequestBody @Validated(Category.Update.class) Category category){
        categoryService.update(category);
        return Result.success();
    }
```

##  全局异常处理器

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public Result handleException(Exception e){
        e.printStackTrace();
        return Result.error(StringUtils.hasLength(e.getMessage())? e.getMessage() : "操作失败");
    }
}
```



## jwt令牌

maven坐标  

```xml
<!--java-jwt坐标-->
<dependency>
  <groupId>com.auth0</groupId>
  <artifactId>java-jwt</artifactId>
  <version>4.4.0</version>
</dependency>
```

<font style="color:#DF2A3F;"></font>

<ImageDisplay src="/images/springboot/springboot-5.png" />



**生成jwt和解析jwt示例**

```java
public void testGen() {
    Map<String, Object> claims = new HashMap<>();
    claims.put("id", 1);
    claims.put("username", "张三");
    //生成jwt的代码
    String token = JWT.create()
    .withClaim("user", claims)//添加载荷
    .withExpiresAt(new Date(System.currentTimeMillis() + 1000))//添加过期时间
    .sign(Algorithm.HMAC256("itheima"));//指定算法,配置秘钥

    System.out.println(token);

}

//@Test
public void testParse() {
    //定义字符串,模拟用户传递过来的token
    String token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IuW8oOS4iSJ9LCJleHAiOjE2OTQzMjUzMzB9.dFmeOG04w6EfnCue4CFS-x-XMRv145EfsY8wnchbxL4";

    JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256("itheima")).build();

    DecodedJWT decodedJWT = jwtVerifier.verify(token);//验证token,生成一个解析后的JWT对象
    Map<String, Claim> claims = decodedJWT.getClaims();
    System.out.println(claims.get("user"));

    //如果篡改了头部和载荷部分的数据,那么验证失败
    //如果秘钥改了,验证失败
    //token过期
```

<ImageDisplay src="/images/springboot/springboot-6.png" />



## 拦截器

1. 拦截器逻辑

preHandle是在请求到达接口前执行，一般用于校验信息，存储信息。afterCompletion是请求完成后执行，一般用于释放资源

```java
@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //令牌验证
        String token = request.getHeader("Authorization");
        //验证token
        try {
            Map<String, Object> claims = JwtUtil.parseToken(token);
            ThreadLocalUtil.set(claims);

            //放行
            return true;
        } catch (Exception e) {
            //http响应状态码为401
            response.setStatus(401);
            //不放行
            return false;
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        ThreadLocalUtil.remove();
    }
}
```

HttpServletRequest获得所有请求信息

HttpServletResponse发送相应信息



2. 注册拦截器

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private LoginInterceptor loginInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //登录接口和注册接口不拦截
        registry.addInterceptor(loginInterceptor).excludePathPatterns("/user/login","/user/register");
    }
}
```

## mysql和实体类的驼峰命名转换

在`application.yaml`中写上

```yaml
mybatis:
  configuration:
    map-underscore-to-camel-case: true
```



## ThreadLocal

<ImageDisplay src="/images/springboot/springboot-7.png" />



<ImageDisplay src="/images/springboot/springboot-8.png" />



```java
public class ThreadLocalUtil {
    //提供ThreadLocal对象,
    private static final ThreadLocal THREAD_LOCAL = new ThreadLocal();

    //根据键获取值
    public static <T> T get(){
        return (T) THREAD_LOCAL.get();
    }

    //存储键值对
    public static void set(Object value){
        THREAD_LOCAL.set(value);
    }


    //清除ThreadLocal 防止内存泄漏
    public static void remove(){
        THREAD_LOCAL.remove();
    }
}
```



> 思路：在intercepter中使用TreadLocal.set(claims) 将Jwt中的claims数据提取出来存到TreadLocal里，在其他的业务代码中，如UserController、UserService中使用Map<String, Object> claims = TreadLocal.get() 获取claims数据。在拦截器中请求结束后使用ThreadLocalUtil.remove();清除这个线程

# 核心功能

## 注册

使用`Md5Util`加密密码，数据存入数据库完成登陆

## 登陆

同样使用`Md5Util`校验密码，成果的话使用`JwtUtil`生成jwt令牌，并在令牌中存入用户数据
> 注意注册和登录都不在拦截器的拦截范围中

## 拦截器

每个请求都会经过拦截器校验`jwt`，并将用户信息存入`treadloacl`。

![British Fish and Chips](https://pub-d2e4cfca78f042f29331f4f9fcf74111.r2.dev/20250312213657698.png)





