/**
 * Created by yn on 2014/8/26.
 */
class IconButton extends egret.gui.Button
{
    public constructor()
    {
        super();
        this.hostComponentKey="screenContents.IconButton";
    }
    private _iconPath:string;
    public get icon():string
    {
        return this._iconPath;
    }
    public set icon(v:string)
    {
        if(v!=this._iconPath)
        {
            this._iconPath=v;
            this.invalidateSkinState();
        }
    }
    public image:egret.gui.UIAsset;
    public validateSkinState():void
    {
        if(this.image)
            this.image.source=this.icon;
        super.validateSkinState();
    }
}