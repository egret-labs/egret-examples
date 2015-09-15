/**
 * 以下示例演示了使用版本控制进行资源的版本管理。
 */
class VersionControlExample extends egret.DisplayObjectContainer {

    private ctr:egret.VersionController;    //定义版本控制器

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        this.applyVersionControl();    //尽早进行版本控制的调用处理
    }

    private applyVersionControl():void{
        this.ctr = new egret.VersionController();

        this.ctr.addEventListener(egret.IOErrorEvent.IO_ERROR, loadError, this);
        this.ctr.addEventListener(egret.Event.COMPLETE, loadComplete, this);
        this.ctr.fetchVersion();    //调用获取版本信息数据的方法

        var self = this;
        function loadError(e) {
            self.ctr.removeEventListener(egret.IOErrorEvent.IO_ERROR, loadError, self);
            self.ctr.removeEventListener(egret.Event.COMPLETE, loadComplete, self);

            self.errorCall();
        }

        function loadComplete(e) {
            self.ctr.removeEventListener(egret.IOErrorEvent.IO_ERROR, loadError, self);
            self.ctr.removeEventListener(egret.Event.COMPLETE, loadComplete, self);

            self.completeCall();
        }
    }

    private errorCall():void {
        //console.error("Version control file loading failed. Please check");
    }

    private completeCall():void{
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadTextureComplete, this);
        var originalUrl:string = "resource/assets/egret_icon.png";    //开发时原始的资源url
        var virtualUrl:string = this.ctr.getVirtualUrl(originalUrl);    //发布后实际的资源url
        console.log(originalUrl, virtualUrl);
        var request:egret.URLRequest = new egret.URLRequest(virtualUrl);
        loader.load(request);
    }

    private onLoadTextureComplete(event:egret.Event):void {
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        var texture:egret.Texture = <egret.Texture>loader.data;

        var icon:egret.Bitmap = new egret.Bitmap();
        icon.texture = texture;
        this.addChild(icon);
    }
}