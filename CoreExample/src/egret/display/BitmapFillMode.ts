/**
 * 以下示例演示了设置位图的填充方式。
 * 还可以配合 RES 模块更便捷的加载。
 */
class BitmapFillModeExample extends egret.DisplayObjectContainer {
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
        //创建 Bitmap 进行显示
        var bitmap:egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(bitmap);

        //默认是以拉伸填充区域
        console.log(bitmap.fillMode);//scale
        //设置重复位图以填充区域
        bitmap.fillMode = egret.BitmapFillMode.REPEAT;
        bitmap.width = 480;
        bitmap.height = 800;
        console.log(bitmap.fillMode);//repeat
    }
}