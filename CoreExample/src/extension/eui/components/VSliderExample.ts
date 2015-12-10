/**
 * @language en_US
 * The following example shows a VSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 VSlider。
 */
class VSliderExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<e:VSlider x="50" y="50" height="300" xmlns:e="http://ns.egret.com/eui">
                <e:Skin minWidth="20" minHeight="8">
                    <e:Image id="track" source="resource/slider/track.png"  scale9Grid="1,1,4,4" width="6" height="100%" verticalCenter="0"/>
                    <e:Image id="trackHighlight" source="resource/slider/tracklight.png" scale9Grid="1,1,4,4" width="6" verticalCenter="0"/>
                    <e:Image id="thumb" source="resource/slider/thumb.png" rotation="90" x="15"/>
                </e:Skin>
            </e:VSlider>`;

        var clazz = EXML.parse(exml);
        var vslider = new clazz();
        this.addChild(vslider);
    }
}