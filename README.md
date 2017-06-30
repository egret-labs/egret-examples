Egret Examples
==============

### 如何运行
* 安装Egret

> 您可以访问[egret-core](https://github.com/egret-labs/egret-core)来安装 Egret

* 下载 egret-examples
* 将下载后的 egret-examples 解压到与egret平级文件夹，该文件夹在下文中被称为 {examples}

> 开发者可以将该文件夹安装到其他位置，但是为了整体结构整洁，建议解压到与 egret 平级的文件夹

* 编译 Examples

执行以下脚本

``` 
cd {examples}
egret build CoreExample -e 
egret build EUIExample -e
```

> 注意：不要忽略 ```-e``` 参数

* 启动 Examples

执行以下脚本

``` 
cd {examples}
egret startserver CoreExample 
```
