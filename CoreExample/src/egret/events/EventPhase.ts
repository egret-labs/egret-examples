/**
 * 以下示例演示了事件的各个阶段。
 */
class EventPhaseExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.rotation = 45;

        var left:egret.Shape = new egret.Shape();
        left.graphics.beginFill(0xff0000);
        left.graphics.drawRect(0,0,100,100);
        left.graphics.endFill();
        left.x = 100;
        this.addChild(left);
        left.touchEnabled = true;
        left.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("点击左侧方块，eventPhase：" + event.eventPhase);
        }, left);

        var right:egret.Shape = new egret.Shape();
        right.graphics.beginFill(0x00ff00);
        right.graphics.drawRect(0,0,100,100);
        right.graphics.endFill();
        right.x = 145;
        right.y = -40;
        this.addChild(right);
        right.touchEnabled = true;
        right.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("点击右侧方块，eventPhase：" + event.eventPhase);
        }, right);

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("容器冒泡侦听，eventPhase：" + event.eventPhase);
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("容器捕获侦听，eventPhase：" + event.eventPhase);
        }, this, true);
    }
}