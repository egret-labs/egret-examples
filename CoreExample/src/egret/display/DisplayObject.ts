/**
 * 以下示例演示了 DisplayObject 的各个事件。
 */
class DisplayObjectExample extends egret.Sprite {
    public constructor() {
        super();

        this.touchEnabled = true;
        this.draw();
        this.addEventListener(egret.Event.ADDED, this.onAdded, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.addEventListener(egret.Event.REMOVED, this.onRemoved, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.addEventListener(egret.Event.RENDER, this.onRender, this);
    }

    private draw():void {
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 0, 100, 100);
        this.graphics.endFill();
    }

    private onClick(event:MouseEvent):void {
        egret.log("onClick");
        this.parent.removeChild(this);
    }

    private onAdded(event:Event):void {
        egret.log("onAdded");
    }

    private onEnterFrame(event:Event):void {
        egret.log("onEnterFrame");
        this.removeEventListener("enterFrame", this.onEnterFrame, this);
    }

    private onRemoved(event:Event):void {
        egret.log("onRemoved");
    }

    private onRender(event:Event):void {
        egret.log("onRender");
    }
}