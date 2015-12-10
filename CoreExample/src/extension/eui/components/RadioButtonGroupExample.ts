class RadioButtonGroupExample extends egret.Sprite {

    public constructor() {
        super();

        var skinExml =
            `<e:Skin class="skins.RadioButtonSkin" states="up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected" xmlns:e="http://ns.egret.com/eui">
                <e:Image height="22" includeIn="disabledAndSelected" source="resource/RadioButton/radiobutton_select_disabled.png"/>
                <e:Image height="22" includeIn="downAndSelected" source="resource/RadioButton/radiobutton_select_down.png"/>
                <e:Image height="22" includeIn="upAndSelected" source="resource/RadioButton/radiobutton_select_up.png"/>
                <e:Image height="22" includeIn="up,down,disabled" source="resource/RadioButton/radiobutton_unselect.png"/>
                <e:Label x="38" id="labelDisplay" textColor="0xffffff" size="18"/>
            </e:Skin>`;
        EXML.parse(skinExml);

        var exml =
            `<e:Group xmlns:e="http://ns.egret.com/eui">
                <e:layout>
                    <e:VerticalLayout gap="20"/>
                </e:layout>
                <e:RadioButton groupName="en" label="A. This is a radioButton." skinName="skins.RadioButtonSkin"/>
                <e:RadioButton groupName="en" label="B. This is a progressBar." skinName="skins.RadioButtonSkin"/>
                <e:RadioButton groupName="cn" label="1. 今天是晴天." skinName="skins.RadioButtonSkin"/>
                <e:RadioButton groupName="cn" label="2. 今天是雨天." skinName="skins.RadioButtonSkin"/>
            </e:Group>`;
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
        group.x = 50;
        group.y = 50;
    }

}
