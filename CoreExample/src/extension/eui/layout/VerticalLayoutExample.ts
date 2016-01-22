/**
 * @language en_US
 * The following example uses the class VerticalLayoutExample to show
 * arranges the layout elements in a vertical sequence,top to bottom
 */
/**
 * @language zh_CN
 * 以下示例使用 VerticalLayoutExample 类来演示垂直顺序从上向下排列布局元素
 */
class VerticalLayoutExample extends egret.Sprite {
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    private init(): void {
        var group = new eui.Group();
        group.x = 20;
        group.y = 20;
        this.addChild(group);

        var layout = new eui.VerticalLayout();
        layout.gap = 30;
        group.layout = layout;

        var btn1 = this.getButton();
        group.addChild(btn1);

        var btn2 = this.getButton();
        group.addChild(btn2);

        var btn3 = this.getButton();
        group.addChild(btn3);
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
