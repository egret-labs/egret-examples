class ViewStackExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<e:Group xmlns:e="http://ns.egret.com/eui">
                <e:TabBar dataProvider="{viewStack}">
                    <e:layout>
                        <e:HorizontalLayout gap="20"/>
                    </e:layout>
                    <e:itemRendererSkinName>
                        <e:Skin states="up,down" height="50">
                            <e:Label text="{data}" textColor.down="0xFFFFFF" textColor.up="0x666666" horizontalCenter="0" verticalCenter="0"/>
                        </e:Skin>
                    </e:itemRendererSkinName>
                </e:TabBar>
                <e:ViewStack y="50" id="viewStack">
                    <e:Group name="Page1">
                        <e:Panel width="400" height="300" title="title panel" xmlns:e="http://ns.egret.com/eui" y="50">
                            <e:Skin>
                                <e:Image width="100%" height="100%" source="resource/track.png" scale9Grid="1,1,4,4"/>
                                <e:Group id="moveArea" width="100%" height="40">
                                    <e:Image width="100%" height="100%" source="resource/thumb.png" scale9Grid="1,1,4,4"/>
                                    <e:Label id="titleDisplay" text="标题" textColor="0" horizontalCenter="0" verticalCenter="0"/>
                                </e:Group>
                                <e:Button id="closeButton" right="-15" y="-15">
                                    <e:Skin states="up,down,disabled">
                                        <e:Image width="50" height="50" source="resource/close.png" scaleX.up="1" scaleX.down="0.95" scaleY.up="1" scaleY.down="0.95"/>
                                    </e:Skin>
                                </e:Button>
                            </e:Skin>
                        </e:Panel>
                    </e:Group>
                    <e:Group name="Page2">
                        <e:List id="list" width="200" height="400" y="50">
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
                                    <e:Object label="Text1"/>
                                    <e:Object label="Text2"/>
                                    <e:Object label="Text3"/>
                                    <e:Object label="Text4"/>
                                    <e:Object label="Text5"/>
                                    <e:Object label="Text6"/>
                                    <e:Object label="Text7"/>
                                    <e:Object label="Text8"/>
                                    <e:Object label="Text9"/>
                                    <e:Object label="Text10"/>
                                </e:Array>
                            </e:ArrayCollection>
                        </e:List>
                    </e:Group>
                </e:ViewStack>
            </e:Group>`;

        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
}