class RadioButtonGroupExample extends egret.Sprite {

    public constructor() {
        super();

        var skinExml =
            `<s:Skin class="skins.RadioButtonSkin" states="up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected" xmlns:s="http://ns.egret.com/eui">
                <s:Image includeIn="disabledAndSelected" source="resource/RadioButton/radiobutton_select_disabled.png"/>
                <s:Image includeIn="downAndSelected" source="resource/RadioButton/radiobutton_select_down.png"/>
                <s:Image includeIn="upAndSelected" source="resource/RadioButton/radiobutton_select_up.png"/>
                <s:Image includeIn="up,down,disabled" source="resource/RadioButton/radiobutton_unselect.png"/>
                <s:Label x="38" id="labelDisplay" textColor="0xffffff" size="18"/>
            </s:Skin>`;
        EXML.parse(skinExml);

        var exml =
            `<s:Group xmlns:s="http://ns.egret.com/eui">
                <s:layout>
                    <s:VerticalLayout gap="20"/>
                </s:layout>
                <s:RadioButton groupName="en" label="A. This is a radioButton." skinName="skins.RadioButtonSkin"/>
                <s:RadioButton groupName="en" label="B. This is a progressBar." skinName="skins.RadioButtonSkin"/>
                <s:RadioButton groupName="cn" label="1. 今天是晴天." skinName="skins.RadioButtonSkin"/>
                <s:RadioButton groupName="cn" label="2. 今天是雨天." skinName="skins.RadioButtonSkin"/>
            </s:Group>`;
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
        group.x = 50;
        group.y = 50;
    }

}