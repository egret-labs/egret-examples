/**
 * 以下示例演示了舞台方向旋转变化事件的使用。
 */
class StageOrientationEventExample extends egret.DisplayObjectContainer {
    private text:egret.TextField;

    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddStage, this);
    }

    private onAddStage():void{
        this.text = new egret.TextField();
        this.text.text = "Text init.";
        this.text.x = 50;
        this.text.y = 100;
        this.addChild(this.text);
        this.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, this.onOrientationChange, this);
    }

    private onOrientationChange(e:egret.StageOrientationEvent):void{
        egret.log("onOrientationChange");
        this.text.text = "onOrientationChange";
    }
}