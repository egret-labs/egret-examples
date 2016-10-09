/**
 * 以下示例演示了使用 getTimer 获取启动 Egret 引擎以来经过的毫秒数。
 */
class getTimerExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        egret.Tween.get(this, {loop:true}).wait(1000).call(function (){
            egret.log(egret.getTimer());
        });
    }
}