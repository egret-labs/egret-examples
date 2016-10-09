/**
 * @language en_US
 * The following example uses the class UIEventExample to show the ui component trigger the event
 */
/**
 * @language zh_CN
 * 以下示例使用 UIEventExample 类来演示UI组件触发事件
 */
class UIEventExample extends egret.Sprite {
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    private progress: eui.ProgressBar;
    private init(): void {
        var panel = this.getPanel();
        panel.x = 200;
        panel.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onUIEventHandler, this);
        panel.addEventListener(eui.UIEvent.CLOSING, this.onUIEventHandler, this);
        panel.addEventListener(eui.UIEvent.MOVE, this.onUIEventHandler, this);
        this.addChild(panel);

        var list = new eui.List();
        var arr = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        list.dataProvider = arr;
        list.itemRenderer = IR_UIEvents;
        var scroller = new eui.Scroller();
        scroller.viewport = list;
        scroller.height = 190;
        this.addChild(scroller);
        scroller.addEventListener(eui.UIEvent.CHANGE_START, this.onUIEventHandler, this);
        scroller.addEventListener(egret.Event.CHANGE, this.onChangeHander, this);
        scroller.addEventListener(eui.UIEvent.CHANGE_END, this.onUIEventHandler, this);
    }
    private onUIEventHandler(e: eui.UIEvent): void {
        egret.log("eui.UIEvent:",e.type);
    }
    private onChangeHander(e: egret.Event): void {
        egret.log("egret.Event:",e.type);
    }
    private getPanel(): eui.Panel {
        var exmlButton =
        `<e:Skin class="skins.ButtonSkin" states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui">
            <e:Image source="resource/button_up.png" source.down="resource/button_down.png" scale9Grid="1,3,8,8" width="100%" height="100%"/>
            <e:Label id="labelDisplay" top="8" bottom="8" left="8" right="8" size="20" fontFamily="Tahoma" textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/>
        </e:Skin>`;
        EXML.parse(exmlButton);

        var exml =
        `<e:Skin class="skins.PanelSkin" xmlns:e="http://ns.egret.com/eui" minWidth="450" minHeight="25">
            <e:Image left="0" right="0" bottom="0"  top="0" source="resource/border.png" scale9Grid="2,2,12,12"/>
            <e:Group id="moveArea" left="0" right="0" top="1" height="45">
                <e:Image left="0" right="0" bottom="0"  top="0" source="resource/header.png"/>
                <e:Label id="titleDisplay" size="20" fontFamily="Tahoma" textColor="0xFFFFFF" wordWrap="false" left="15" right="5" verticalCenter="0"/>
            </e:Group>
            <e:Group id="contentGroup" width="100%" height="200" top="50" bottom="30"/>
            <e:Button skinName = "skins.ButtonSkin" id="closeButton" label="close" bottom="5" horizontalCenter="0"/>
        </e:Skin>`;
        var clazz = EXML.parse(exml);
        var panel = new eui.Panel();
        panel.skinName = "skins.PanelSkin";
        return panel;
    }
}

class IR_UIEvents extends eui.ItemRenderer {
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
