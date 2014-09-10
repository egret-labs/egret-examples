/**
 * Created by yn on 2014/9/10.
 */
class CustomItemRenderer extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();
        //this.skinName="skins.ocean.CustomItemRendererSkin";
        this.hostComponentKey="screenContents.CustomItemRender";
    }
    public toggleButton:egret.gui.ToggleButton;
    public partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName,instance);
        if(instance == this.toggleButton)
            this.toggleButton.addEventListener(egret.Event.CHANGE,this.touchDown,this);
    }
    private touchDown(event:egret.Event):void
    {
        this.data.toggle=this.toggleButton.selected;
    }
    public dataChanged():void
    {

        if(this.toggleButton)
        {
            this.toggleButton.selected=this.data.toggle;
        }
        super.dataChanged();
    }
}