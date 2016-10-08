/**
 * 以下示例演示了设置显示对象的混合模式。
 * 还可以配合 RES 模块更便捷的加载。
 */
class BlendModeExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.startLoad();
    }

    private startLoad():void {
        //创建 ImageLoader 对象
        var loader:egret.ImageLoader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url:string = "resource/assets/button.png";
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
        
        //创建 Bitmap 进行显示
        var bitmap:egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(bitmap);

        var bitmap:egret.Bitmap = new egret.Bitmap(texture);
        //设置混合模式为叠加效果
        bitmap.blendMode = egret.BlendMode.ADD;
        bitmap.x = bitmap.y = 25;
        this.addChild(bitmap);
    }
}