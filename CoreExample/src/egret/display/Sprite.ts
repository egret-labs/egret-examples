/**
 * 以下示例演示了使用 Sprite 类绘制一个正方形，然后侦听他的各种触摸事件。
 */
class SpriteExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var sprite:egret.Sprite = new egret.Sprite();
        sprite.graphics.beginFill(0xff0000);
        sprite.graphics.drawRect(0, 0, 100, 100);
        sprite.graphics.endFill();
        this.addChild(sprite);

        sprite.touchEnabled = true;
        sprite.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        sprite.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        sprite.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        sprite.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }

    private onTouchBegin():void {
        egret.log("onTouchBegin");
    }

    private onTouchEnd():void {
        egret.log("onTouchEnd");
    }

    private onTouchMove():void {
        egret.log("onTouchMove");
    }

    private onTouchTap():void {
        egret.log("onTouchTap");
    }
}