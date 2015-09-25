/**
 * @language en_US
 * The following example uses the class ScrollPolicyExample to show the policy of the scroller
 */
/**
 * @language zh_CN
 * 以下示例使用 ScrollPolicyExample 类来控制滚动条的策略
 */
class ScrollPolicyExample extends egret.Sprite {
    constructor() {
        super();
        var scrollerAuto = this.getScroller();
        scrollerAuto.scrollPolicyV = eui.ScrollPolicy.AUTO;
        scrollerAuto.height = 190;
        this.addChild(scrollerAuto);
        var txt1 = this.getTxt(eui.ScrollPolicy.AUTO);
        txt1.y = 400;
        this.addChild(txt1);

        var scrollerAuto2 = this.getScroller();
        scrollerAuto2.x = 120;
        scrollerAuto2.scrollPolicyV = eui.ScrollPolicy.AUTO;
        scrollerAuto2.height = 400;
        this.addChild(scrollerAuto2);
        var txt2 = this.getTxt(eui.ScrollPolicy.AUTO);
        txt2.x = 120;
        txt2.y = 400;
        this.addChild(txt2);

        var scrollerON = this.getScroller();
        scrollerON.scrollPolicyV = eui.ScrollPolicy.ON;
        scrollerON.x = 240;
        scrollerON.height = 400;
        this.addChild(scrollerON);
        var txt3 = this.getTxt(eui.ScrollPolicy.ON);
        txt3.x = 240;
        txt3.y = 400;
        this.addChild(txt3);

        var scrollerOFF = this.getScroller();
        scrollerOFF.scrollPolicyV = eui.ScrollPolicy.OFF;
        scrollerOFF.x = 360;
        scrollerOFF.height = 400;
        this.addChild(scrollerOFF);
        var txt4 = this.getTxt(eui.ScrollPolicy.OFF);
        txt4.x = 360;
        txt4.y = 400;
        this.addChild(txt4);
    }
    private getScroller(): eui.Scroller {
        var list = new eui.List();
        var arr = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        list.dataProvider = arr;
        list.itemRenderer = IR_ScrollPolicy;
        var scroller = new eui.Scroller();
        scroller.viewport = list;
        return scroller;
    }
    private getTxt(value: string): egret.TextField {
        var txt = new egret.TextField;
        txt.size = 20;
        txt.textColor = 0xffffff;
        txt.text = value;
        return txt;
    }
}
class IR_ScrollPolicy extends eui.ItemRenderer {
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
