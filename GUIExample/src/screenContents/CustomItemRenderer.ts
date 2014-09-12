/**
 * Created by yn on 2014/9/10.
 */
class CustomItemRenderer extends egret.gui.ItemRenderer
{
    public constructor()
    {
        super();
        this.hostComponentKey="CustomItemRender";
    }

    public toggleSwitch:egret.gui.ToggleSwitch;

    public partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName,instance);
        if(instance == this.toggleSwitch)
            this.toggleSwitch.addEventListener(egret.Event.CHANGE,this.touchDown,this);
    }

    private touchDown(event:egret.Event):void
    {
        this.data.toggle=this.toggleSwitch.selected;
    }

    public dataChanged():void
    {
        super.dataChanged();
        if(this.toggleSwitch)
        {
            this.toggleSwitch.selected=this.data.toggle;
        }
    }
}