/**
 * 以下示例演示了事件的捕获冒泡。
 */
class TouchEventExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.touchEventDemo();
        this.touchCancelDemo();
    }
    private touchEventDemo(){
        var container = new egret.Sprite();
        this.addChild(container);
        container.rotation = 45;
        
        var left:egret.Shape = new egret.Shape();
        left.graphics.beginFill(0xff0000);
        left.graphics.drawRect(0,0,100,100);
        left.graphics.endFill();
        left.x = 100;
        container.addChild(left);
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
        container.addChild(right);
        right.touchEnabled = true;
        right.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("点击右侧方块，eventPhase：" + event.eventPhase);
        }, right);

        container.touchEnabled = true;
        container.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("容器冒泡侦听，eventPhase：" + event.eventPhase);
        }, this);
        container.addEventListener(egret.TouchEvent.TOUCH_TAP, function (event) {
            egret.log("容器捕获侦听，eventPhase：" + event.eventPhase);
        }, this, true);
    }
    private touchCancelDemo(){
        var scroller = new eui.Scroller();
        scroller.x = 250;
        var list = new eui.List();
        var ac = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        list.dataProvider = ac;
        list.itemRendererSkinName = `
        <e:Skin states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui">
                <e:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"
                         source="resource/button_up.png"
                         source.down="resource/button_down.png"/>
                <e:Label text="{data}" top="8" bottom="8" left="8" right="8"
                         textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/>
            </e:Skin>`

        scroller.viewport = list;
        scroller.height = 200;
        this.addChild(scroller);
        scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{egret.log("111 Scroller Begin")},this);
        list.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{egret.log("111 List Begin")},this);

        scroller.addEventListener(egret.TouchEvent.TOUCH_END,()=>{egret.log("222 Scroller END")},this);
        list.addEventListener(egret.TouchEvent.TOUCH_END,()=>{egret.log("222 List END")},this);

        scroller.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{egret.log("33 Scroller Tap")},this);
        list.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{egret.log("33 List Tap")},this);

        //scroller 滚动后会触发 touchCancel 事件
        //dispatch touchcancel event after scroller move
        scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL,()=>{egret.log("44 Scroller cancel")},this);
        list.addEventListener(egret.TouchEvent.TOUCH_CANCEL,()=>{egret.log("44 List cancel")},this);
    }
}