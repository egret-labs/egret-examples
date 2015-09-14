/**
 * 以下示例演示了 MovieClip 序列帧动画的使用。
 * 该示例中假设资源已经用RES模块加载完成
 */
class MovieClipExample extends egret.DisplayObjectContainer {
    private data:any;
    private texture:egret.Texture;
    public constructor() {
        super();

        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadJsonComplete, this);
        var url:string = "resource/assets/chunli.json";
        var request:egret.URLRequest = new egret.URLRequest(url);
        loader.load(request);
    }

    private onLoadJsonComplete(event:egret.Event):void {
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        this.data = JSON.parse(loader.data);

        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadTextureComplete, this);
        var url:string = "resource/assets/chunli.png";
        var request:egret.URLRequest = new egret.URLRequest(url);
        loader.load(request);
    }

    private onLoadTextureComplete(event:egret.Event):void {
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        this.texture = <egret.Texture>loader.data;

        this.createMovieClip();
    }

    private createMovieClip():void {
        //创建动画工厂
        var mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(this.data, this.texture);
        //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        var mc:egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData("test"));
        this.addChild(mc);
        //添加播放完成事件
        mc.addEventListener(egret.Event.COMPLETE, function (){
            console.log("COMPLETE");
        }, this);
        //添加循环播放完成事件
        mc.addEventListener(egret.Event.LOOP_COMPLETE, function (){
            console.log("LOOP_COMPLETE");
        }, this);
        //播放攻击动画
        mc.gotoAndPlay("attack", -1);
    }
}