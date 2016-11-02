/**
 * @language en_US
 * The following example uses the class ItemTapEventExample to show the represents events that are emitted when a item has been touched
 */
/**
 * @language zh_CN
 * 以下示例使用 ItemTapEventExample 类来演示列表项触碰事件
 */
class ItemTapEventExample extends egret.Sprite {
    constructor() {
        super();
        var list = new eui.List();
        var arr = new eui.ArrayCollection(["a1", "a2", "a3", "a4", "a5", "a6"]);
        list.dataProvider = arr;
        list.itemRenderer = IR_ItemTapEvent;
        this.addChild(list);
        list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler, this);
    }
    private onItemTapHandler(e: eui.ItemTapEvent): void {
        egret.log(e.item);
        egret.log(e.itemRenderer);
        egret.log(e.itemIndex);
    }
}
class IR_ItemTapEvent extends eui.ItemRenderer {
    private label: eui.Label;
    constructor() {
        super();
        this.label = new eui.Label();
        this.addChild(this.label);
    }
    protected dataChanged(): void {
        this.label.text = "label:" + this.data.toString();
    }
}
