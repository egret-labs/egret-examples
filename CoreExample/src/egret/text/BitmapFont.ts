/**
 * 以下示例演示了使用 BitmapText 显示特殊字体。
 */
class BitmapFontExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();


    }

    private onLoadComplete(font:egret.BitmapFont):void {
        var bitmapText:egret.BitmapText = new egret.BitmapText();
        bitmapText.font = font;
        this.addChild(bitmapText);
        bitmapText.text = "Hello Egret";
    }
}