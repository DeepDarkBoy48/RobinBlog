1. 使用brew安装

```bash
brew install jenv
```

2. 配置jenv环境变量

```bash
nano ~/.zshrc
```

添加配置

```bash
# jenv 配置
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"
```

按 Ctrl + O，然后回车 Enter 保存。
按 Ctrl + X 退出编辑器。
刷新配置

```bash
source ~/.zshrc
```


3. 添加jdk
```java
jenv add /Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home
```

```bash
jenv add /Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
```

```bash
jenv add /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
```

```bash
jenv add /Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home
```

4. 切换版本

查看版本

```bash
jenv versions
```

切换

```bash
jenv global oracle64-17.0.13
```

```plain&#x20;text
jenv global 21
```
