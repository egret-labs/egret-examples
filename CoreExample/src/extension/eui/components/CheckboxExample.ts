
/**
 * @language en_US
 * The following example shows how to use the eui.Checkbox class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.Checkbox 类
 */
class CheckboxExample extends eui.Group {
    constructor() {
        super();

        var checkboxSkin =
            `<e:Skin states="up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected" xmlns:e="http://ns.egret.com/eui">
                <e:Group width="100%" height="100%">
                    <e:layout>
                        <e:HorizontalLayout verticalAlign="middle"/>
                    </e:layout>
                    <e:Image fillMode="scale" alpha="1" alpha.disabled="0.5" alpha.down="0.7"
                             source="resource/CheckBox/checkbox_unselect.png"
                             source.upAndSelected="resource/CheckBox/checkbox_select_up.png"
                             source.downAndSelected="resource/CheckBox/checkbox_select_down.png"
                             source.disabledAndSelected="resource/CheckBox/checkbox_select_disabled.png"/>
                    <e:Label id="labelDisplay" size="20" textColor="0x707070"
                             textAlign="center" verticalAlign="middle"
                             fontFamily="Tahoma"/>
                </e:Group>
            </e:Skin>`;

        var checkbox = new eui.CheckBox();

        //组件可以接受：皮肤类定义,皮肤类名,皮肤实例,EXML文件内容,或外部EXML文件路径作为 skinName 的值
        //这里我们直接用 EXML 内容作为 skinName
        checkbox.skinName = checkboxSkin;
        checkbox.label = "CheckBox Example";
        checkbox.addEventListener(egret.Event.CHANGE, e=> checkbox.label = checkbox.selected ? "Selected" : "Unselected", this);
        checkbox.x = 50;
        checkbox.y = 50;
        this.addChild(checkbox);
    }
}
