/**
 * @language en_US
 * The exmaple follow shows a panel.
 */
/**
 * @language zh_CN
 * 下面的例子演示了一个面板。
 */
class PanelExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
                `<e:Panel title="title panel" xmlns:e="http://ns.egret.com/eui">
                    <e:Skin>
                        <e:Image width="100%" height="100%" source="resource/track.png" scale9Grid="1,1,4,4"/>
                        <e:Group id="moveArea" width="100%" height="40">
                            <e:Image width="100%" height="100%" source="resource/thumb.png" scale9Grid="1,1,4,4"/>
                            <e:Label id="titleDisplay" text="Title" textColor="0" horizontalCenter="0" verticalCenter="0"/>
                        </e:Group>
                        <e:Button id="closeButton" right="-15" y="-15">
                            <e:Skin states="up,down,disabled">
                                <e:Image width="50" height="50" source="resource/close.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </e:Skin>
                        </e:Button>
                    </e:Skin>
                </e:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();
        panel.width = 600;
        panel.height = 400;
        panel.y = 100;
        this.addChild(panel);
    }
}