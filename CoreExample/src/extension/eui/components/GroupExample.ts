/**
 * @language en_US
 * The following example shows the general use of a Group.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 Group 的常规用法。
 */
class GroupExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<e:Group xmlns:e="http://ns.egret.com/eui">
                <e:layout>
                 <e:HorizontalLayout gap="20"/>
                </e:layout>
                <e:Group>
                    <e:layout>
                        <e:VerticalLayout gap="20"/>
                    </e:layout>
                    <e:Label text="BeiJIng" textColor="0xFFFFFF"/>
                    <e:Label text="sunny" textColor="0xFFFFCC"/>
                    <e:Image source="resource/sunny.png"/>
                </e:Group>
                <e:Group>
                    <e:layout>
                        <e:VerticalLayout gap="20"/>
                    </e:layout>
                    <e:Label text="ShangHai" textColor="0xFFFFFF"/>
                    <e:Label text="cloudy" textColor="0xFFFFCC"/>
                    <e:Image source="resource/cloudy.png"/>
                </e:Group>
            </e:Group>`;

        var clazz = EXML.parse(exml);
        var group:eui.Group = new clazz();
        this.addChild(group);
    }
}