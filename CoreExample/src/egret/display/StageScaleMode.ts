/**
 * 以下示例演示了设置屏幕适配方式。
 * 游戏默认的适配方式在egret_loader.js和native_require.js中修改
 */
class StageScaleModeExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage():void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        //设置屏幕适配方式为 EXACT_FIT
        this.stage.scaleMode = egret.StageScaleMode.EXACT_FIT;
    }
}