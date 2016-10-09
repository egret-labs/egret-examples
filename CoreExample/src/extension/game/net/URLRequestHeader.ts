/**
 * 以下示例演示了将 HTTP 请求标头 header 添加到 requestHeaders 属性的数组中。
 * 该标头指出，即使应用程序具有所请求内容的缓存副本，也应当将请求转发给原始服务器。
 */
class URLRequestHeaderExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.startLoad();
    }

    private startLoad():void {
        //创建 URLLoader 对象
        var loader:egret.URLLoader = new egret.URLLoader();
        //设置加载方式为纹理
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //添加加载失败侦听
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
        var url:string = "http://www.[yourdomain].com/greeting.cfm";
        var request:egret.URLRequest = new egret.URLRequest(url);
        //添加header
        var header:egret.URLRequestHeader = new egret.URLRequestHeader("pragma", "no-cache");
        request.requestHeaders.push(header);
        //开始加载
        loader.load(request);
    }

    private onLoadComplete(event:egret.Event):void {
        egret.log("onLoadComplete");
    }

    private onLoadError():void {
        egret.log("onLoadError");
    }
}