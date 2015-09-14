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
        //创建 URLLoader 对象
        var loader:egret.URLLoader = new egret.URLLoader();
        //设置加载方式为纹理
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url:string = "resource/assets/egret_icon.png";
        var request:egret.URLRequest = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    }

    private onLoadComplete(event:egret.Event):void {
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        //获取加载到的纹理对象
        var texture:egret.Texture = <egret.Texture>loader.data;

        //创建 SpriteSheet 对象
        var spriteSheet:egret.SpriteSheet = new egret.SpriteSheet(texture);
        console.log(spriteSheet.getTexture("part1"));//null
        //创建一个新的 Texture 对象
        spriteSheet.createTexture("part1", 0, 0, 100, 100);
        console.log(spriteSheet.getTexture("part1"));//egret.Texture
    }
}