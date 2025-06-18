## 简易 NVM 使用教程

NVM (Node Version Manager) 是一个用于管理多个 Node.js 版本的工具，让你可以轻松地在不同的 Node.js 版本之间切换。这在开发需要不同 Node.js 版本支持的项目时非常有用。

### 一、安装 NVM

#### 1. macOS & Linux

**步骤:**

1. **打开终端 (Terminal)**。

2. **执行安装脚本**: 复制并粘贴以下命令之一执行 (推荐使用 `curl`):

&#x20;  Bash

使用 curl (推荐)

```javascript
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

&#x20;  使用 wget

```javascript
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

````plain&#x20;text

**注意**: `v0.39.7` 是当前最新的版本。 你可以在 [NVM 的 GitHub 仓库](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/nvm-sh/nvm) 查看最新版本并替换命令中的版本号。

3. **使环境变量生效**: 关闭并重新打开终端，或者运行以下命令：

Bash

```c
source ~/.bashrc  # 如果你使用 bash
source ~/.zshrc  # 如果你使用 zsh
source ~/.profile # 如果你使用 profile
````

* **验证安装**:

&#x20;  Bash

```c
nvm --version
```

&#x20;  如果显示 NVM 的版本号，则表示安装成功。

#### 2. Windows

**步骤:**

* **访问 [nvm-windows 的 GitHub 仓库](https://www.google.com/url?sa=E\&source=gmail\&q=https://github.com/coreybutler/nvm-windows)**。

* **下载**: 下载最新的 `nvm-setup.zip` 文件。

* **解压并运行**: 解压 `nvm-setup.zip` 并运行 `nvm-setup.exe` 安装程序。

**按照安装向导的指示完成安装**。

* **验证安装**: 打开新的命令提示符或 PowerShell 窗口，输入:

&#x20;  Bash

```c
nvm version
```

&#x20;  如果显示 NVM 的版本号，则表示安装成功。

### 二、常用 NVM 命令

| 命令                            | 描述                           | 示例                          |
| ----------------------------- | ---------------------------- | --------------------------- |
| `nvm ls`                      | 列出已安装的 Node.js 版本            | `nvm ls`                    |
| `nvm ls-remote`               | 列出所有可安装的 Node.js 版本 (包括远程版本) | `nvm ls-remote`             |
| `nvm ls-remote --lts`         | 列出所有可安装的 LTS 版本              | `nvm ls-remote --lts`       |
| `nvm install <version>`       | 安装指定版本的 Node.js              | `nvm install 16.14.2`       |
| `nvm install --lts`           | 安装最新的 LTS 版本                 | `nvm install --lts`         |
| `nvm install node`            | 安装最新的稳定版本 (current)          | `nvm install node`          |
| `nvm use <version>`           | 使用指定版本的 Node.js              | `nvm use 16.14.2`           |
| `nvm alias default <version>` | 设置默认使用的 Node.js 版本           | `nvm alias default 16.14.2` |
| `nvm uninstall <version>`     | 卸载指定版本的 Node.js              | `nvm uninstall 16.14.2`     |
| `node -v`                     | 查看当前正在使用的 Node.js 版本         | `node -v`                   |
| `npm -v`                      | 查看当前正在使用的 npm 版本             | `npm -v`                    |
| `nvm cache clear`             | 清除 NVM 的缓存 (遇到安装问题时可尝试)      | `nvm cache clear`           |

### 三、项目级别的 Node.js 版本管理 (.nvmrc)

为了更方便地管理项目级别的 Node.js 版本，你可以在项目根目录下创建一个 `.nvmrc` 文件，并在文件中指定项目所需的 Node.js 版本。

**步骤:**

* **创建 `.nvmrc`**\*\* 文件\*\*: 在项目根目录下创建名为 `.nvmrc` 的文件。

* **指定 Node.js 版本**: 在 `.nvmrc` 文件中写入你希望项目使用的 Node.js 版本号，例如:



```c
16.14.2
```

* **自动切换版本**: 在项目根目录下运行：

&#x20;  Bash

```c
nvm use
```

&#x20;  NVM 会自动读取 `.nvmrc` 文件中的版本号，并切换到该版本。 如果该版本尚未安装，NVM 会提示你安装。



## Linux环境安装

这是管理多个 Node.js 版本最灵活和推荐的方法。

1. **安装 NVM (如果尚未安装):**
   打开终端并运行以下命令之一来下载并执行 NVM 安装脚本：

```plain&#x20;text
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# 或者使用 wget:
# wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

1. content\_copydownload

2. Use code [with caution](https://support.google.com/legal/answer/13505487).Bash

3. *(请检查 [NVM GitHub 仓库](https://www.google.com/url?sa=E\&q=https%3A%2F%2Fgithub.com%2Fnvm-sh%2Fnvm) 获取最新的安装脚本版本号)*

4. 脚本运行完毕后，它可能会提示你关闭并重新打开终端，或者运行类似下面的命令来加载 NVM：

```plain&#x20;text
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

1. content\_copydownload

2. Use code [with caution](https://support.google.com/legal/answer/13505487).Bash

3. 这些行通常会自动添加到你的 `~/.bashrc`, `~/.zshrc` 或 `~/.profile` 文件中。你可以手动检查并添加（如果需要），然后 `source ~/.bashrc` (或对应的配置文件)。

4. **验证 NVM 安装:**
   关闭并重新打开终端，然后输入：

```plain&#x20;text
command -v nvm
```

1. content\_copydownload

2. Use code [with caution](https://support.google.com/legal/answer/13505487).Bash

3. 如果输出了 `nvm`，则表示安装成功。

4. **安装 Node.js v23.5.0:**

```plain&#x20;text
nvm install 23.5.0
```

1. content\_copydownload

2. Use code [with caution](https://support.google.com/legal/answer/13505487).Bash

3. NVM 会下载、编译（如果需要）并安装 Node.js v23.5.0。

4. **使用 Node.js v23.5.0:**
   安装完成后，NVM 通常会自动使用新安装的版本。你可以明确指定：

```plain&#x20;text
nvm use 23.5.0
```

1. content\_copydownload

2. Use code [with caution](https://support.google.com/legal/answer/13505487).Bash

3. **设置默认版本 (可选):**
   如果你希望每次打开新终端时都默认使用此版本：

```plain&#x20;text
nvm alias default 23.5.0
```

1. content\_copydownload

2. Use code [with caution](https://support.google.com/legal/answer/13505487).Bash

3. **验证 Node.js 和 npm 安装:**

```plain&#x20;text
node -v
# 应该输出: v23.5.0
npm -v
# npm 版本会随 Node.js 版本一起安装
```

1. content\_copydownload

2. Use code [with caution](https://support.google.com/legal/answer/13505487).Bash

**方法二：手动下载并安装二进制文件**
