/**
 * @language en_US
 * The following example shows a HSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 HSlider。
 */
class HSliderExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<e:Skin minWidth="20" minHeight="8"  xmlns:e="http://ns.egret.com/eui">
                <e:Image id="track" source="resource/slider/track.png" scale9Grid="1,1,4,4" width="100%" height="6" verticalCenter="0"/>
                <e:Image id="trackHighlight" source="resource/slider/tracklight.png" scale9Grid="1,1,4,4" height="6" verticalCenter="0"/>
                <e:Image id="thumb" source="resource/slider/thumb.png" verticalCenter="0"/>
            </e:Skin>`;

        var hslider = new eui.HSlider();
        hslider.skinName = exml;
        hslider.width = 300;
        hslider.x = 100;
        hslider.y = 50;
        this.addChild(hslider);
    }
}