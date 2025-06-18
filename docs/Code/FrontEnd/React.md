# 1. 使用vite安装

```bash
npm create vite@latest
```

选择react，typescript

进入文件目录

```bash
cd react-project
```

安装第三方包

```bash
npm install
```

运行

```bash
npm run dev
```

安装格式化插件

```bash
prettier
```

![](images/Pasted%20image%2020250618003540.png)
![](images/Pasted%20image%2020250618003544.png)

安装bootstrap

```bash
npm i bootstrap@latest
```

# Docusarus

第一次启动

```bash
npx create-docusaurus@latest my-website classic
```

```bash
cd my-website
npm run start
```

**部署**

1. 构建生产版本

```bash
npm run build
```

* 写Dockerfile

```bash
# 构建阶段
FROM node:18 AS builder

# 设置工作目录
WORKDIR /app

# 复制所有文件
COPY . .

# 安装依赖
RUN npm install

# 构建项目
RUN npm run build

# 运行阶段
FROM nginx:alpine

# 删除默认的html
RUN rm -rf /usr/share/nginx/html/*

# 复制构建产物到 Nginx 目录
COPY --from=builder /app/build /usr/share/nginx/html

-v /主机上的目录:/usr/share/nginx/html \  # 将主机上的目录挂载到容器的 /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
```



把这些文件目录传到服务器

![](images/Pasted%20image%2020250618003444.png)

* docker构建

进入根目录

```bash
cd /frontend/
```

删除容器

```bash
docker rm docusarus -f 
```

删除镜像

```bash
docker rmi docusarus
```

构建镜像

```bash
sudo docker build -t docusarus .
```

构建容器

```bash
sudo docker run -d --name docusarus -p 80:80 docusarus
```



# next.js

```bash
 npx create-next-app@latest my-next-app
```

```bash
cd my-next-app
```

```bash
npm run dev
```

