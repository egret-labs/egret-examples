/**
 * 以下示例使用 IOErrorEventExample 类说明在试图加载不存在的文件时如何调度错误事件对象。
 */
class IOErrorEventExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var loader:egret.URLLoader = new egret.URLLoader();
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
        var request:egret.URLRequest = new egret.URLRequest("nothing.json");
        loader.load(request);
    }

    private onIOError(event:egret.IOErrorEvent):void {
        console.log("onIOError");
    }
}