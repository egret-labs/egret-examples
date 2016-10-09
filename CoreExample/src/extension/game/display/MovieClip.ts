/**
 * 以下示例演示了 MovieClip 序列帧动画的使用。
 * 该示例中假设资源已经用RES模块加载完成
 */
class MovieClipExample extends egret.DisplayObjectContainer {
    private data:any;
    private texture:egret.Texture;
    public constructor() {
        super();

        var loader:egret.HttpRequest = new egret.HttpRequest();
        loader.responseType = egret.HttpResponseType.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadJsonComplete, this);
        loader.open("resource/assets/chunli.json", egret.HttpMethod.GET);
        loader.send();
    }

    private onLoadJsonComplete(event:egret.Event):void {
        var loader:egret.HttpRequest = <egret.HttpRequest>event.target;
        this.data = JSON.parse(loader.response);

        var imageLoader:egret.ImageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, this.onLoadTextureComplete, this);
        imageLoader.load("resource/assets/chunli.png");
    }

    private onLoadTextureComplete(event:egret.Event):void {
        var loader:egret.ImageLoader = <egret.ImageLoader>event.target;
        //获取加载到的纹理对象
        var bitmapData:egret.BitmapData = loader.data;
        //创建纹理对象
        this.texture = new egret.Texture();
        this.texture.bitmapData = bitmapData;

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
            egret.log("COMPLETE");
        }, this);
        //添加循环播放完成事件
        mc.addEventListener(egret.Event.LOOP_COMPLETE, function (){
            egret.log("LOOP_COMPLETE");
        }, this);
        //播放攻击动画
        mc.gotoAndPlay("attack", -1);
    }
}