/**
 * @language en_US
 * The following example uses the class PropertyEventExample to show represents the event object
 * passed to the event listener when one of the properties of
 * an object has changed, and provides information about the change.
 */
/**
 * @language zh_CN
 * 以下示例使用 PropertyEventExample 类来演示对象的一个属性发生更改时传递到事件侦听器的事件
 */
class PropertyEventExample extends egret.Sprite {
    private txt: eui.EditableText;
    private group: eui.Group;
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    private init(): void {
        this.group = new eui.Group();
        this.group.addEventListener(eui.PropertyEvent.PROPERTY_CHANGE, this.onChangeHandler, this);

        this.addChild(this.group);

        var layout = new eui.TileLayout();
        layout.horizontalGap = 20;
        layout.verticalGap = 20;
        layout.requestedColumnCount = 3;
        this.group.layout = layout;

        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
    }
    private onTouchHandler(): void {
        var btn = this.getButton();
        this.group.addChild(btn);
    }
    private onChangeHandler(e: eui.PropertyEvent): void {
        egret.log(e.type);
    }
    private getButton(): eui.Button {
        var exml =
        `<e:Skin class="skins.ButtonSkin" states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui">
            <e:Image source="resource/button_up.png" source.down="resource/button_down.png" scale9Grid="1,3,8,8" width="100%" height="100%"/>
            <e:Label id="labelDisplay" top="8" bottom="8" left="8" right="8" size="20" fontFamily="Tahoma" textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/>
        </e:Skin>`;
        var clazz = EXML.parse(exml);
        var btn = new eui.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    }
}
