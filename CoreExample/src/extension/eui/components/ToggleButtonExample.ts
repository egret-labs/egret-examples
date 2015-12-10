class ToggleButtonExample extends egret.Sprite {

    public constructor() {
        super();

        var exml =
            `<e:Group xmlns:e="http://ns.egret.com/eui">
                <e:ToggleButton x="100" y="100">
                    <e:Skin states="up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected">
                        <e:Image source="resource/ToggleSwitch/toggle_switch_off.png" includeIn="up,down"/>
                        <e:Image source="resource/ToggleSwitch/toggle_switch_on.png" includeIn="upAndSelected,downAndSelected"/>
                    </e:Skin>
                </e:ToggleButton>
            </e:Group>`;

        var clazz = EXML.parse(exml);
        var button = new clazz();
        this.addChild(button);
    }
}