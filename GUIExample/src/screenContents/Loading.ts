/**
 * Created by yn on 2014/9/1.
 */
class Loading extends egret.Sprite
{
    public constructor()
    {
        super();
        this.createChildren();
    }
    private contentWidth:number=0;
    private contentHeight:number=0;
    public contentSize(width:number,height:number):void
    {
        this.contentWidth=width;
        this.contentHeight=height;
        this.drawBack();
    }
    private drawBack():void
    {
        this.graphics.clear();
        this.graphics.beginFill(0x000000,.3);
        this.graphics.drawRect(0,0,this.contentWidth,this.contentHeight);
        this.graphics.endFill();
    }
    private display:egret.TextField;
    public createChildren():void
    {
        this.display=new egret.TextField();
        this.display.size=50;
        this.display.textColor=0x222222;
        this.display.bold=true;
        this.display.visible=false;
        this.addChild(this.display);
    }
    public setProgress(v:number,info:string):void
    {
        this.display.x=(this.contentWidth-this.display.width)/2;
        this.display.y=(this.contentHeight-this.display.height)/2;
        this.display.text=info+v.toString()+"%";
        this.display.visible=true;
    }
}