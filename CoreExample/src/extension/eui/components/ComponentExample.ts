/**
 * @language en_US
 * Usually eui.Component is used as a container for basic layout.
 */
/**
 * @language zh_CN
 * 通常 eui.Component 可以作为简单布局的容器。
 */
class ComponentExample extends egret.Sprite {

    public constructor() {
        super();

        var shape = new egret.Shape();
        shape.graphics.beginFill(0x666666)
        shape.graphics.drawRect(0,0,400,300);
        shape.graphics.endFill();
        this.addChild(shape);

        var exml =
            `<e:Skin xmlns:e="http://ns.egret.com/eui">
                <e:Label text="标题" horizontalCenter="0"/>
                <e:Label text="egret" right="0" bottom="0"/>
            </e:Skin>`;

        var component = new eui.Component();
        component.width = 400;
        component.height = 300;
        component.skinName = exml;
        this.addChild(component);
    }
}
