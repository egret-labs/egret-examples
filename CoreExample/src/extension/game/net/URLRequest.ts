/**
 * 以下示例演示了使用 URLLoader 加载图片资源。
 */
class URLRequestExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.startLoad();
    }

    private startLoad():void {
        //创建 URLLoader 对象
        var loader:egret.URLLoader = new egret.URLLoader();
        //设置加载方式为纹理
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //添加加载失败侦听
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
        var url:string = "resource/assets/egret_icon.png";
        var request:egret.URLRequest = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    }

    private onLoadComplete(event:egret.Event):void {
        egret.log("onLoadComplete");
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        //获取加载到的纹理对象
        var texture:egret.Texture = <egret.Texture>loader.data;
        egret.log(texture);
    }

    private onLoadError():void {
        egret.log("onLoadError");
    }
}