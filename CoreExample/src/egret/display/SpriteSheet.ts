/**
 * 以下示例演示了使用 SpriteSheet 处理合并后的大图。
 * 可以配合 RES 模块进行加载，RES模块封装了对 SpriteSheet 的使用。
 */
class SpriteSheetExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.startLoad();
    }

    private startLoad():void {
        //创建 ImageLoader 对象
        var loader:egret.ImageLoader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url:string = "resource/assets/egret_icon.png";
        //开始加载
        loader.load(url);
    }

    private onLoadComplete(event:egret.Event):void {
        var loader:egret.ImageLoader = <egret.ImageLoader>event.target;
        //获取加载到的纹理对象
        var bitmapData:egret.BitmapData = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;

        //创建 SpriteSheet 对象
        var spriteSheet:egret.SpriteSheet = new egret.SpriteSheet(texture);
        egret.log(spriteSheet.getTexture("part1"));//null
        //创建一个新的 Texture 对象
        spriteSheet.createTexture("part1", 0, 0, 100, 100);
        egret.log(spriteSheet.getTexture("part1"));//egret.Texture
    }
}