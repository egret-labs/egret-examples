/**
 * @language en_US
 * The following example uses the class TileOrientationExample to show
 *  the property orientation in TileLayout class
 */
/**
 * @language zh_CN
 * 以下示例使用 TileOrientationExample 类来演示 TileLayout 类的 orientation 可定义的值
 */
class TileOrientationExample extends egret.Sprite {
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init(): void {
        var arrValues = [eui.TileOrientation.ROWS, eui.TileOrientation.COLUMNS];
        for (var i = 0, max = arrValues.length; i < max; i++) {
            var group = new eui.Group();
            group.width = 550;
            group.height = 180;
            group.y = i * 250;
            this.addChild(group);
            var layout = new eui.TileLayout();
            layout.orientation = arrValues[i];
            layout.requestedColumnCount = 3;
            layout.requestedRowCount = 3;
            group.layout = layout;
            var txt = this.getTxt(arrValues[i]);
            txt.x = 350;
            txt.y = i*250;
            this.addChild(txt);
            for (var j = 0; j < 6; j++) {
                var btn = this.getButton();
                group.addChild(btn);
            }
        }
    }
    private getTxt(value: string): egret.TextField {
        var txt = new egret.TextField;
        txt.size = 20;
        txt.textColor = 0xffffff;
        txt.text = value;
        return txt;
    }
    private getButton(): eui.Button {
        var exml =
        `<e:Skin class="skins.ButtonSkin" states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui">
            <e:Image source="resource/button_up.png" source.down="resource/button_down.png" scale9Grid="1,3,8,8" width="100%" height="100%"/>
            <e:Label id="labelDisplay" top="8" bottom="8" left="8" right="8" size="20" fontFamily="Tahoma" textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/>
        </e:Skin>`;
        var clazz = EXML.parse(exml);
        var btn = new eui.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    }
}
