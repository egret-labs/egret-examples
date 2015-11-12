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
                `<s:Panel title="title panel" xmlns:s="http://ns.egret.com/eui">
                    <s:Skin>
                        <s:Image width="100%" height="100%" source="resource/track.png" scale9Grid="1,1,4,4"/>
                        <s:Group id="moveArea" width="100%" height="40">
                            <s:Image width="100%" height="100%" source="resource/thumb.png" scale9Grid="1,1,4,4"/>
                            <s:Label id="titleDisplay" text="Title" textColor="0" horizontalCenter="0" verticalCenter="0"/>
                        </s:Group>
                        <s:Button id="closeButton" right="-15" y="-15">
                            <s:Skin states="up,down,disabled">
                                <s:Image width="50" height="50" source="resource/close.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                            </s:Skin>
                        </s:Button>
                    </s:Skin>
                </s:Panel>`;

        var clazz = EXML.parse(exml);
        var panel = new clazz();
        panel.width = 600;
        panel.height = 400;
        panel.y = 100;
        this.addChild(panel);
    }
}