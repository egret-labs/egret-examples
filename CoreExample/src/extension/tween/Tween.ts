/**
 * 以下示例演示了使用 Tween 实现简单动画。
 */
class TweenExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.x = shape.y = 100;
        this.addChild(shape);

        //创建 Tween 对象
        egret.Tween.get(shape, {
            loop: true,//设置循环播放
            onChange: this.onChange,//设置更新函数
            onChangeObj: this//更新函数作用域
        })
            .to({rotation: 360}, 2000)//设置2000毫秒内 rotation 属性变为360
            .wait(1000)//设置等待1000毫秒
            .call(this.onComplete, this, ["param1", {key: "key", value: 3}]);//设置回调函数及作用域，可用于侦听动画完成
    }

    private onChange():void {
        egret.log("onChange");
    }

    private onComplete(param1:string, param2:any):void {
        egret.log("onComplete");
        egret.log(param1);
        egret.log(param2);
    }
}
