/**
 * Created by yn on 2014/8/28.
 */
class DropDownListScreen extends egret.gui.SkinnableComponent
{
    public constructor()
    {
        super();
        this.skinName="screenContentSkins.DropDownListScreenSkin";
    }

    /**
     * 皮肤组件
     */
    public dropDownlist:egret.gui.DropDownList = null;

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
        }
    }
}