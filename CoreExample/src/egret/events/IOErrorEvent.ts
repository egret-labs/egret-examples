/**
 * 以下示例使用 IOErrorEventExample 类说明在试图加载不存在的文件时如何调度错误事件对象。
 */
class IOErrorEventExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var loader:egret.HttpRequest = new egret.HttpRequest();
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
        loader.open("nothing.json", egret.HttpMethod.GET);
        loader.send();
    }

    private onIOError(event:egret.IOErrorEvent):void {
        egret.log("onIOError");
    }
}