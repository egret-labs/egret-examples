class EditablTextExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<s:Group xmlns:s="http://ns.egret.com/eui">
                <s:layout>
                    <s:VerticalLayout gap="20"/>
                </s:layout>
                <s:Group>
                    <s:Label text="Accout：" size="16" textColor="0xFFFFFF"/>
                    <s:EditableText x="100" size="16" text="input accout" textColor="0xAAAAFF"/>
                </s:Group>
                <s:Group>
                    <s:Label text="Password：" size="16" textColor="0xFFFFFF"/>
                    <s:EditableText x="100" text="input password" displayAsPassword="true" size="16" textColor="0xAAAAFF"/>
                </s:Group>
            </s:Group>`;

        var clazz = EXML.parse(exml);
        var group:eui.Group = new clazz();
        this.addChild(group);

    }
}