/**
 * @language en_US
 * The following example uses the class BitmapFillModeExample to show how the bimap fillmode
 */
/**
 * @language zh_CN
 * 以下示例使用 BitmapFillModeExample 类来说明如何使用图像填充方式
 */
class BitmapFillModeEuiExample extends egret.Sprite {
    constructor() {
        super();
        var image_repeat = new eui.Image();
        image_repeat.width = 400;
        image_repeat.source = "resource/egret.png";
        image_repeat.fillMode = eui.BitmapFillMode.REPEAT;
        var txt = this.getTxt("repeat");
        txt.x = 402;
        this.addChild(txt);
        this.addChild(image_repeat);

        var image_clip = new eui.Image();
        image_clip.y = 150;
        image_clip.width = 400;
        image_clip.source = "resource/egret.png";
        image_clip.fillMode = eui.BitmapFillMode.CLIP;
        var txt = this.getTxt("clip");
        txt.x = 402; txt.y = 150;
        this.addChild(txt);
        this.addChild(image_clip);

        var image_scale = new eui.Image();
        image_scale.y = 300;
        image_scale.width = 400;
        image_scale.source = "resource/egret.png";
        image_scale.fillMode = eui.BitmapFillMode.SCALE;
        var txt = this.getTxt("scale");
        txt.x = 402; txt.y = 300;
        this.addChild(txt);
        this.addChild(image_scale);
    }
    private getTxt(value: string): egret.TextField {
        var txt = new egret.TextField;
        txt.text = value;
        txt.textColor = 0xffffff;
        return txt;
    }
}
