class ListExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<e:Scroller xmlns:e="http://ns.egret.com/eui">
                <e:List id="list" width="200" height="400">
                    <e:itemRendererSkinName>
                        <e:Skin states="up,down,disabled" height="50">
                            <e:Label text="{data.label}" textColor="0xFFFFFF" horizontalCenter="0" verticalCenter="0"/>
                        </e:Skin>
                    </e:itemRendererSkinName>
                </e:List>
            </e:Scroller>`;

        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
        var list:eui.List = scroller.list;
        var collection = new eui.ArrayCollection();
        for(var i = 0; i < 20; i ++)
        {
            collection.addItem({"label":"Text" + i});
        }
        list.dataProvider = collection;

    }
}