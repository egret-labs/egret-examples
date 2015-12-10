/**
 * @language en_US
 * The following example shows the general use of a ItemRenderer.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 ItemRenderer 的常规用法。
 */
class ItemRendererExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<e:DataGroup class="Example.DataGroup" xmlns:e="http://ns.egret.com/eui" x="300" y="50">
                <e:layout>
                    <e:VerticalLayout gap="20"/>
                </e:layout>
                    <e:itemRendererSkinName>
                        <e:Skin>
                            <e:Label text="{data.label}" textColor="{data.color}"/>
                        </e:Skin>
                    </e:itemRendererSkinName>
                <e:ArrayCollection>
                    <e:Array>
                        <e:Object label="a" color="0xcc9999"/>
                        <e:Object label="b" color="0xff9966"/>
                        <e:Object label="c" color="0xcc3333"/>
                        <e:Object label="d" color="0xff6666"/>
                    </e:Array>
                </e:ArrayCollection>
            </e:DataGroup>`;

        var clazz = EXML.parse(exml);
        var dataGroup:eui.DataGroup = new clazz();
        this.addChild(dataGroup);
    }
}