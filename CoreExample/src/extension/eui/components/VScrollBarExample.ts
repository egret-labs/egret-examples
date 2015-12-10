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
            `<e:Group xmlns:e="http://ns.egret.com/eui">
                <e:Image width="200" height="400" source="resource/selected.png" scale9Grid="1,1,4,4"/>
                <e:Scroller >
                    <e:Skin>
                        <e:HScrollBar id="horizontalScrollBar" width="100%" height="30" bottom="0">
                            <e:Skin>
                                <e:Image width="100%" height="100%" source="resource/track.png" scale9Grid="1,1,4,4"/>
                                <e:Image id="thumb" width="30" height="30" source="resource/thumb.png"  scale9Grid="1,1,4,4"/>
                            </e:Skin>
                        </e:HScrollBar>
                        <e:VScrollBar id="verticalScrollBar" width="30" height="100%" right="0">
                            <e:Skin>
                                <e:Image width="100%" height="100%" source="resource/track.png" scale9Grid="1,1,4,4"/>
                                <e:Image id="thumb" width="30" height="30" source="resource/thumb.png"  scale9Grid="1,1,4,4"/>
                            </e:Skin>
                        </e:VScrollBar>
                    </e:Skin>
                        <e:List id="list" width="200" height="400">
                            <e:layout>
                                <e:VerticalLayout gap="20"/>
                            </e:layout>
                            <e:itemRendererSkinName>
                                <e:Skin states="up,down,disabled" height="50">
                                    <e:Label text="{data.label}" textColor="0" horizontalCenter="0" verticalCenter="0"/>
                                </e:Skin>
                            </e:itemRendererSkinName>
                            <e:ArrayCollection>
                                <e:Array>
                                    <e:Object label="Item1"/>
                                    <e:Object label="Item2"/>
                                    <e:Object label="Item3"/>
                                    <e:Object label="Item4"/>
                                    <e:Object label="Item5"/>
                                    <e:Object label="Item6"/>
                                    <e:Object label="Item7"/>
                                    <e:Object label="Item8"/>
                                    <e:Object label="Item9"/>
                                    <e:Object label="Item10"/>
                                </e:Array>
                            </e:ArrayCollection>
                        </e:List>
                </e:Scroller>
            </e:Group>`;

        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
    }
}