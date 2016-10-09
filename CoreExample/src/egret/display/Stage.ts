/**
 * 以下示例演示了激活舞台或调整舞台大小时调度事件。
 */
class StageExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var stage:egret.Stage = egret.MainContext.instance.stage;
        //添加激活侦听
        stage.addEventListener(egret.Event.ACTIVATE, this.activateHandler, this);
        //添加取消激活侦听
        stage.addEventListener(egret.Event.DEACTIVATE, this.deactivateHandler, this);
        //添加屏幕大小改变侦听
        stage.addEventListener(egret.Event.RESIZE, this.resizeHandler, this);
    }

    private activateHandler():void {
        egret.log("activateHandler");
    }

    private deactivateHandler():void {
        egret.log("deactivateHandler");
    }

    private resizeHandler():void {
        egret.log("resizeHandler");
        var stage:egret.Stage = egret.MainContext.instance.stage;
        egret.log("stageWidth: " + stage.stageWidth + " stageHeight: " + stage.stageHeight);
    }
}