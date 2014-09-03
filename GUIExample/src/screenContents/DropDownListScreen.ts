/**
 * Created by yn on 2014/8/28.
 */
class DropDownListScreen extends egret.gui.SkinnableContainer
{
    public constructor()
    {
        this.skinName="screenContentSkins.DropDownListScreenSkin";
        super();
    }

    /**
     * 皮肤组件
     */
    public dropDownlist:egret.gui.DropDownList;
    public partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName,instance);
        if(instance==this.dropDownlist)
        {
            var dp:Array<any>=[];
            for (var i:number = 1; i < 50; i++)
            {
                dp.push({label:"item"+i,toggle:false});
            }
            this.dropDownlist.dataProvider=new egret.gui.ArrayCollection(dp);
            this.dropDownlist.selectedIndex=0;
            //根据皮肤类型应用不同的呈现器皮肤
            switch (GUIExplorer.skinType)
            {
                case "simple":
                    this.dropDownlist.itemRendererSkinName="skins.simple.DropDownListItemRendererSkin";
                    break;
                case "ocean":
                    this.dropDownlist.itemRendererSkinName="skins.ocean.DropDownListItemRendererSkin";
                    break;
            }
        }
    }
}