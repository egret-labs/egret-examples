/**
 * 以下示例演示了使用 URLLoader 设置不同的 dataFormat 加载不同的资源。
 */
class URLLoaderDataFormatExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.startLoad(egret.URLLoaderDataFormat.TEXTURE, "resource/assets/egret_icon.png");
        this.startLoad(egret.URLLoaderDataFormat.TEXT, "resource/assets/icons.json");
        this.startLoad(egret.URLLoaderDataFormat.SOUND, "resource/assets/sound.mp3");
    }

    private startLoad(dataFormat:string, url:string):void {
        //创建 URLLoader 对象
        var loader:egret.URLLoader = new egret.URLLoader();
        //设置加载方式
        loader.dataFormat = dataFormat;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var request:egret.URLRequest = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    }

    private onLoadComplete(event:egret.Event):void {
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        egret.log("dataFormat : " + loader.dataFormat);
        //获取加载到的对象
        var data:any = loader.data;
        egret.log("data : " + data);
    }
}