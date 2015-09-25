class ListExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<s:Scroller xmlns:s="http://ns.egret.com/eui">
                <s:List id="list" width="200" height="400">
                    <s:itemRendererSkinName>
                        <s:Skin states="up,down,disabled" height="50">
                            <s:Label text="{data.label}" textColor="0xFFFFFF" horizontalCenter="0" verticalCenter="0"/>
                        </s:Skin>
                    </s:itemRendererSkinName>
                </s:List>
            </s:Scroller>`;

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