/**
 * 以下示例演示了 ScrollView 滚动组件的使用。
 */
class ScrollViewExample extends egret.DisplayObjectContainer {
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
        //创建 Bitmap
        var bitmap:egret.Bitmap = new egret.Bitmap(texture);

        //创建 ScrollView
        var scrollView:egret.ScrollView = new egret.ScrollView();
        //设置滚动内容
        scrollView.setContent(bitmap);
        //设置滚动区域宽高
        scrollView.width = 100;
        scrollView.height = 100;
        this.addChild(scrollView);
    }
}