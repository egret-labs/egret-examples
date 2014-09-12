/**
 * Created by yn on 2014/8/26.
 */
class IconButton extends egret.gui.Button
{
    public constructor()
    {
        super();
        this.hostComponentKey="IconButton";
    }

    private _icon:string;
    /**
     * icon素材名
     */
    public get icon():string
    {
        return this._icon;
    }
    public set icon(value:string) {
        if (this._icon == value)
            return;
        this._icon = value;
        if (this.iconDisplay) {
            this.iconDisplay.source = value;
        }
    }

    public iconDisplay:egret.gui.UIAsset;

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);

        if (instance == this.iconDisplay){
            this.iconDisplay.source = this._icon;
        }
    }
}