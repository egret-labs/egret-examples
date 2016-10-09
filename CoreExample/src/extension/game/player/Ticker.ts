/**
 * 以下示例演示了使用 Ticker 注册和删除帧函数。
 */
class TickerExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        //注册事件侦听
        egret.Ticker.getInstance().register(this.onTick, this);
        egret.log("register");
    }

    private passTime:number = 0;

    private onTick(dt:number):void {
        //累加时间，dt是帧时间间隔以毫秒为单位
        this.passTime += dt;
        egret.log("onTick");
        //经过5秒后删除帧函数
        if (this.passTime > 5000) {
            egret.Ticker.getInstance().unregister(this.onTick, this);
            egret.log("unregister");
        }
    }
}