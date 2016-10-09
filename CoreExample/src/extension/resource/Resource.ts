/**
 * 下面的示例使用 ResourceExample 类展示使用RES模块加载资源过程。
 */
class ResourceExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.initStateText();

        //添加资源配置加载完成事件
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //加载配置
        this.trace("开始加载配置文件");
        RES.loadConfig("resource/resource.json", "resource/assets/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        this.trace("配置文件加载成功");
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //添加资源组加载完成事件
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        //添加资源组加载失败事件
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        //添加资源加载失败事件
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onResourceItemLoadError, this);
        //添加资源组加载进度事件
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        //开始加载 preload 资源组
        this.trace("开始加载preload组");
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.trace("preload组加载完成");

            this.trace("开始加载一个不存在的资源");
            RES.getResAsync("nothing", function (){}, this);
        }
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.trace("preload资源加载进度 : " + event.itemsLoaded + " / " + event.itemsTotal);
        }
    }

    /**
     * 资源组加载出错
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        this.trace("preload组加载失败");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    }

    /**
     * 资源加载出错
     */
    private onResourceItemLoadError(event:RES.ResourceEvent):void {
        this.trace("项目加载失败,url : " + event.resItem.url);
    }

    private stateText:egret.TextField;
    private text:string = "TestResource";

    private initStateText():void {
        this.stateText = new egret.TextField();
        this.stateText.size = 22;
        this.stateText.text = this.text;
        this.stateText.width = 480;
        this.addChild(this.stateText);
    }

    private trace(msg:any):void {
        this.text = this.text + "\n" + msg;
        this.stateText.text = this.text;
        egret.log(msg);
    }
}