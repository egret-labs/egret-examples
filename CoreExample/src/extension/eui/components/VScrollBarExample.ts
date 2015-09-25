/**
 * @language en_US
 * The following example shows a HSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个垂直带滚动条的 List。
 */
class VScrollBarExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<s:Group xmlns:s="http://ns.egret.com/eui">
                <s:Image width="200" height="400" source="resource/selected.png" scale9Grid="1,1,4,4"/>
                <s:Scroller >
                    <s:Skin>
                        <s:HScrollBar id="horizontalScrollBar" width="100%" height="30" bottom="0">
                            <s:Skin>
                                <s:Image width="100%" height="100%" source="resource/track.png" scale9Grid="1,1,4,4"/>
                                <s:Image id="thumb" width="30" height="30" source="resource/thumb.png"  scale9Grid="1,1,4,4"/>
                            </s:Skin>
                        </s:HScrollBar>
                        <s:VScrollBar id="verticalScrollBar" width="30" height="100%" right="0">
                            <s:Skin>
                                <s:Image width="100%" height="100%" source="resource/track.png" scale9Grid="1,1,4,4"/>
                                <s:Image id="thumb" width="30" height="30" source="resource/thumb.png"  scale9Grid="1,1,4,4"/>
                            </s:Skin>
                        </s:VScrollBar>
                    </s:Skin>
                        <s:List id="list" width="200" height="400">
                            <s:layout>
                                <s:VerticalLayout gap="20"/>
                            </s:layout>
                            <s:itemRendererSkinName>
                                <s:Skin states="up,down,disabled" height="50">
                                    <s:Label text="{data.label}" textColor="0" horizontalCenter="0" verticalCenter="0"/>
                                </s:Skin>
                            </s:itemRendererSkinName>
                            <s:ArrayCollection>
                                <s:Array>
                                    <s:Object label="Item1"/>
                                    <s:Object label="Item2"/>
                                    <s:Object label="Item3"/>
                                    <s:Object label="Item4"/>
                                    <s:Object label="Item5"/>
                                    <s:Object label="Item6"/>
                                    <s:Object label="Item7"/>
                                    <s:Object label="Item8"/>
                                    <s:Object label="Item9"/>
                                    <s:Object label="Item10"/>
                                </s:Array>
                            </s:ArrayCollection>
                        </s:List>
                </s:Scroller>
            </s:Group>`;

        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
    }
}