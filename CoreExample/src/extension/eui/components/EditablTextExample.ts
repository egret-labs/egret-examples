/**
 * @language en_US
 * The following example shows how to use the eui.EditablText class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.EditablText 类
 */
class EditablTextExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<e:Group xmlns:e="http://ns.egret.com/eui">
                <e:layout>
                    <e:VerticalLayout gap="20"/>
                </e:layout>
                <e:Group>
                    <e:Label text="Accout：" size="16" textColor="0xFFFFFF"/>
                    <e:EditableText x="100" size="16" text="input accout" textColor="0xAAAAFF"/>
                </e:Group>
                <e:Group>
                    <e:Label text="Password：" size="16" textColor="0xFFFFFF"/>
                    <e:EditableText x="100" text="input password" displayAsPassword="true" size="16" textColor="0xAAAAFF"/>
                </e:Group>
            </e:Group>`;

        var clazz = EXML.parse(exml);
        var group:eui.Group = new clazz();
        this.addChild(group);

    }
}