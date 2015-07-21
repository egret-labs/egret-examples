/**
 * 以下示例演示了设置屏幕适配方式。
 * 游戏默认的适配方式在egret_loader.js和native_require.js中修改
 */
class StageScaleModeExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        //设置屏幕适配方式为 EXACT_FIT
        egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.EXACT_FIT;
    }
}