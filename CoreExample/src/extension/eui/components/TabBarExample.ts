class TabBarExample extends egret.Sprite {

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
                    <e:Group name="tab1">
                        <e:Label text="TestPanel1" x="50" y="50"/>
                    </e:Group>
                    <e:Group name="tab2">
                        <e:Label text="TestPanel2" x="50" y="50"/>
                    </e:Group>
                </e:ViewStack>
            </e:Group>`;

        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
}
