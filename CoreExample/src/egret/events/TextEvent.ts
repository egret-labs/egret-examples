/**
 * 以下示例加载一个 MP3 文件，进行播放，并输出播放该 MP3 文件时所发生的声音事件的相关信息。
 */
class TextEventExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var linkTxt:egret.TextField = new egret.TextField();
        linkTxt.addEventListener(egret.TextEvent.LINK, this.onLink, this);
        linkTxt.touchEnabled = true;
        var htmlText:string = this.createLink("eventText", "Click for link event");
        linkTxt.textFlow = new egret.HtmlTextParser().parser(htmlText);
        this.addChild(linkTxt);
    }

    private createLink(eventText:string, text:string):string {
        var link:string = "";
        link += "<font color='#FF0000'>";
        link += "<a href='event:" + eventText + "'>" + text + "</a>";
        link += "</font>";
        return link;
    }

    private onLink(event:egret.TextEvent):void {
        egret.log("onLink, event.text : " + event.text);
    }
}