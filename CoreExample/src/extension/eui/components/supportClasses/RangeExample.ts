
/**
 * @language en_US
 * The following example shows how to extend eui.Range to a instrumentation style Component
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何实现一个仪表效果的 eui.Range 组件
 */
class RangeViewerExample extends eui.Range {
    pointer: eui.Image;
    constructor() {
        super();
        this.skinName =
        `<e:Skin class="skins.RangeViewerSkin" minWidth="30" minHeight="18" xmlns:e="http://ns.egret.com/eui">
	        <e:Image x="0" y="0" source="resource/range-background.png"/>
	        <e:Image id="pointer" x="60" y="60" source="resource/pointer.png"/>
        </e:Skin>`;
    }
    protected updateSkinDisplayList() {
        var range = this.maximum - this.minimum;
        var rate = (this.value - this.minimum) / range;
        var angle = -150 + rate * 120;
        this.pointer.rotation = angle;
    }
}

class RangeExample extends eui.Group {
    constructor() {
        super();

        var rangeViewer = new RangeViewerExample();
        rangeViewer.minimum = 0;
        rangeViewer.maximum = 120;
        rangeViewer.x = 50;
        rangeViewer.y = 50;

        var timer = new egret.Timer(1000);
        timer.addEventListener(egret.TimerEvent.TIMER, e=> rangeViewer.value = Math.random() * 120, this);
        timer.start();

        this.addChild(rangeViewer);
    }
}
