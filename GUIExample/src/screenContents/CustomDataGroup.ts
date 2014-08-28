/**
 * Created by yn on 2014/8/28.
 */
class CustomDataGroup extends egret.gui.DataGroup implements egret.gui.IViewport
{
    public constructor()
    {
        super();
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