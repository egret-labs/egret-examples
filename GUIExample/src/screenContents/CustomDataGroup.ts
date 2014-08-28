/**
 * Created by yn on 2014/8/28.
 */
class CustomDataGroup extends egret.gui.DataGroup implements egret.gui.IViewport
{
    public constructor()
    {
        super();
        //根据皮肤类型应用不同的呈现器皮肤
        switch (GUIExplorer.skinType)
        {
            case "simple":
                this.itemRendererSkinName="skins.simple.DropDownListItemRendererSkin";
                break;
            case "ocean":
                this.itemRendererSkinName="skins.ocean.DropDownListItemRendererSkin";
                break;
        }
    }
}