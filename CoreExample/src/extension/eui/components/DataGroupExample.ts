/**
 * @language en_US
 * The following example demonstrates two methods to create DataGroup.
 */
/**
 * @language zh_CN
 * 下面的例子演示了两种方法来创建 DataGroup。
 */
class DataGroupExample extends egret.Sprite {

    public constructor() {
        super();
        this.createDataGroupByTypeScript();
        this.createDataGroupByEXML();
    }

    private createDataGroupByTypeScript():void {
        var dataGroup = new eui.DataGroup();
        dataGroup.layout = new eui.VerticalLayout();
        dataGroup.itemRenderer = LabelRender;
        var collection = new eui.ArrayCollection();
        collection.addItem({"label": "1", "color": 0xcc9999});
        collection.addItem({"label": "2", "color": 0xff9966});
        collection.addItem({"label": "3", "color": 0xcc3333});
        collection.addItem({"label": "4", "color": 0xff6666});
        dataGroup.dataProvider = collection;
        this.addChild(dataGroup);
        dataGroup.x = 50;
        dataGroup.y = 50;
    }

    private createDataGroupByEXML():void {
        var exml =
            `<s:DataGroup class="Example.DataGroup" xmlns:s="http://ns.egret.com/eui" x="300" y="50">
                <s:layout>
                    <s:VerticalLayout gap="20"/>
                </s:layout>
                <s:itemRenderer>
                    <s:ItemRenderer>
                     <s:Label text="{data.label}" textColor="{data.color}"/>
                    </s:ItemRenderer>
                </s:itemRenderer>
                <s:ArrayCollection>
                    <s:Array>
                        <s:Object label="a" color="0xcc9999"/>
                        <s:Object label="b" color="0xff9966"/>
                        <s:Object label="c" color="0xcc3333"/>
                        <s:Object label="d" color="0xff6666"/>
                    </s:Array>
                </s:ArrayCollection>
            </s:DataGroup>`;
        var clazz = EXML.parse(exml);
        var dataGroup2:eui.DataGroup = new clazz();
        this.addChild(dataGroup2);
    }
}

class LabelRender extends eui.ItemRenderer {

    private label:eui.Label;

    public constructor() {
        super();
        this.label = new eui.Label();
        this.addChild(this.label);
    }

    public dataChanged() {
        if (this.data) {
            this.label.text = this.data.label;
            this.label.textColor = this.data.color;
        }
    }
}