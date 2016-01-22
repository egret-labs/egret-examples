/**
 * @language en_US
 * The following example uses the class ColumnAlignExample to show
 *  the property columnAlign in TileLayout class
 */
/**
 * @language zh_CN
 * 以下示例使用 ColumnAlignExample 类来演示 TileLayout 类的 columnAlign 可定义的值
 */
class ColumnAlignExample extends egret.Sprite {
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init(): void {
        var arrAlign = [eui.ColumnAlign.LEFT, eui.ColumnAlign.JUSTIFY_USING_GAP, eui.ColumnAlign.JUSTIFY_USING_WIDTH];
        for (var i = 0, max = arrAlign.length; i < max; i++) {
            var group = new eui.Group();
            group.width = 500;
            group.y = i*120;
            this.addChild(group);
            var layout = new eui.TileLayout();
            layout.columnAlign = arrAlign[i];
            group.layout = layout;
            var txt = this.getTxt(arrAlign[i]);
            txt.x = 500;
            txt.y = i*120;
            this.addChild(txt);
            for (var j = 0; j < 4; j++) {
              var btn = this.getButton();
              group.addChild(btn);
            }
        }
    }
    private getTxt(value: string): egret.TextField {
        var txt = new egret.TextField;
        txt.text = value;
        txt.textColor = 0xffffff;
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
