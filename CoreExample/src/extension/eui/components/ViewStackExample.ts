class ViewStackExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<s:Group xmlns:s="http://ns.egret.com/eui">
                <s:TabBar dataProvider="{viewStack}">
                    <s:layout>
                        <s:HorizontalLayout gap="20"/>
                    </s:layout>
                    <s:itemRenderer>
                        <s:ItemRenderer states="up,down" height="50">
                            <s:Label text="{data}" textColor.down="0xFFFFFF" textColor.up="0x666666" horizontalCenter="0" verticalCenter="0"/>
                        </s:ItemRenderer>
                    </s:itemRenderer>
                </s:TabBar>
                <s:ViewStack y="50" id="viewStack">
                    <s:Group name="页面1">
                        <s:Panel width="400" height="300" title="title panel" xmlns:s="http://ns.egret.com/eui" y="50">
                            <s:Skin>
                                <s:Image width="100%" height="100%" source="resource/track.png" scale9Grid="1,1,4,4"/>
                                <s:Group id="moveArea" width="100%" height="40">
                                    <s:Image width="100%" height="100%" source="resource/thumb.png" scale9Grid="1,1,4,4"/>
                                    <s:Label id="titleDisplay" text="标题" textColor="0" horizontalCenter="0" verticalCenter="0"/>
                                </s:Group>
                                <s:Button id="closeButton" right="-15" y="-15">
                                    <s:Skin states="up,down,disabled">
                                        <s:Image width="50" height="50" source="resource/close.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                                    </s:Skin>
                                </s:Button>
                            </s:Skin>
                        </s:Panel>
                    </s:Group>
                    <s:Group name="页面2">
                        <s:List id="list" width="200" height="400" y="50">
                            <s:layout>
                                <s:VerticalLayout gap="20"/>
                            </s:layout>
                            <s:itemRenderer>
                                <s:ItemRenderer states="up,down,disabled" height="50">
                                    <s:Label text="{data.label}" textColor="0" horizontalCenter="0" verticalCenter="0"/>
                                </s:ItemRenderer>
                            </s:itemRenderer>
                            <s:ArrayCollection>
                                <s:Array>
                                    <s:Object label="Text1"/>
                                    <s:Object label="Text2"/>
                                    <s:Object label="Text3"/>
                                    <s:Object label="Text4"/>
                                    <s:Object label="Text5"/>
                                    <s:Object label="Text6"/>
                                    <s:Object label="Text7"/>
                                    <s:Object label="Text8"/>
                                    <s:Object label="Text9"/>
                                    <s:Object label="Text10"/>
                                </s:Array>
                            </s:ArrayCollection>
                        </s:List>
                    </s:Group>
                </s:ViewStack>
            </s:Group>`;

        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
}