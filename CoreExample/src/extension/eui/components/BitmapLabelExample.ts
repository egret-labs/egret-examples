/**
 * @language en_US
 * The following example shows how to use the eui.BitmapLabel class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.BitmapLabel 类
 */
class BitmapLabelExample extends eui.Group {
    constructor(){
        super();
        RES.getResByUrl("resource/assets/font.fnt", this.onLoadComplete, this,
            RES.ResourceItem.TYPE_FONT);
    }
    private onLoadComplete(font:egret.BitmapFont):void {
        var bitmapLabel:eui.BitmapLabel = new eui.BitmapLabel();
        bitmapLabel.font = font;
        this.addChild(bitmapLabel);
        bitmapLabel.text = "Hello Egret";
    }
}