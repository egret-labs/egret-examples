/**
 * @language en_US
 * The following example shows how to assign a button to skin.
 */
/**
 * @language zh_CN
 * 下面的例子演示了如何给一个按钮赋值皮肤。
 */
class SkinExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<e:Button xmlns:e="http://ns.egret.com/eui">
                <e:Skin states="up,down,disabled">
                    <e:Image width="50" height="50" source="resource/close.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                </e:Skin>
            </e:Button>`;

        var clazz = EXML.parse(exml);
        var button = new clazz();
        this.addChild(button);
    }
}