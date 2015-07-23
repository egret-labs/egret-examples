/**
 * 以下示例演示了使用 BitmapText 显示特殊字体。
 */
class BitmapTextExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        RES.getResByUrl("resource/assets/font.fnt", this.onLoadComplete, this,
            RES.ResourceItem.TYPE_FONT);
    }

    private onLoadComplete(font:egret.BitmapFont):void {
        var bitmapText:egret.BitmapText = new egret.BitmapText();
        bitmapText.font = font;
        this.addChild(bitmapText);
        bitmapText.text = "Hello Egret";
    }
}