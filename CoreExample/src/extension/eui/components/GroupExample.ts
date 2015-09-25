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
            `<s:Group xmlns:s="http://ns.egret.com/eui">
                <s:layout>
                 <s:HorizontalLayout gap="20"/>
                </s:layout>
                <s:Group>
                    <s:layout>
                        <s:VerticalLayout gap="20"/>
                    </s:layout>
                    <s:Label text="BeiJIng" textColor="0xFFFFFF"/>
                    <s:Label text="sunny" textColor="0xFFFFCC"/>
                    <s:Image source="resource/sunny.png"/>
                </s:Group>
                <s:Group>
                    <s:layout>
                        <s:VerticalLayout gap="20"/>
                    </s:layout>
                    <s:Label text="ShangHai" textColor="0xFFFFFF"/>
                    <s:Label text="cloudy" textColor="0xFFFFCC"/>
                    <s:Image source="resource/cloudy.png"/>
                </s:Group>
            </s:Group>`;

        var clazz = EXML.parse(exml);
        var group:eui.Group = new clazz();
        this.addChild(group);
    }
}