
/**
 * @language en_US
 * The following example shows how to use the eui.Button class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.Button 类
 */
class ButtonExample extends eui.Group {
    constructor() {
        super();

        var buttonSkin =
            `<e:Skin class="skins.ButtonSkin" states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui">
                <e:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"
                         source="resource/button_up.png"
                         source.down="resource/button_down.png"/>
                <e:Label id="labelDisplay" top="8" bottom="8" left="8" right="8"
                         textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/>
                <e:Image id="iconDisplay" horizontalCenter="0" verticalCenter="0"/>
            </e:Skin>`;

        var button = new eui.Button();

        //组件可以接受：皮肤类定义,皮肤类名,皮肤实例,EXML文件内容,或外部EXML文件路径作为 skinName 的值
        //这里我们直接用 EXML 内容作为 skinName
        button.skinName = buttonSkin;
        button.label = "Button";
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, e=> button.label = " Tap! ", this);
        button.x = 50;
        button.y = 50;

        this.addChild(button);
    }
}
