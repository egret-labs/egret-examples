/**
 * @language en_US
 * The following example shows how to use the eui.TextInput class
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何使用 eui.TextInput 类
 */
class TextInputExample extends eui.Group{
    constructor(){
        super();
        var textInputSkin = `
            <e:Skin class="skins.TextInputSkin" minHeight="40" minWidth="300" states="normal,disabled,normalWithPrompt,disabledWithPrompt" xmlns:e="http://ns.egret.com/eui">
                <e:Image width="100%" height="100%" scale9Grid="1,3,8,8" source="resource/button_up.png"/>
                <e:Rect height="100%" width="100%" fillColor="0xffffff"/>
                <e:EditableText id="textDisplay" verticalCenter="0" left="10" right="10"
                                textColor="0x000000" textColor.disabled="0xff0000" width="100%" height="24" size="20" />
                <e:Label id="promptDisplay" verticalCenter="0" left="10" right="10"
                                textColor="0xa9a9a9" width="100%" height="24" size="20" touchEnabled="false" includeIn="normalWithPrompt,disabledWithPrompt"/>
            </e:Skin>
        `;
        var textInput:eui.TextInput = new eui.TextInput();
        textInput.skinName = textInputSkin;
        this.addChild(textInput);

    }
}