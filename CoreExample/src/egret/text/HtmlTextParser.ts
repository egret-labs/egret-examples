/**
 * 以下示例演示了使用 HtmlTextParser 显示富文本。
 */
class HtmlTextParserExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var label:egret.TextField = new egret.TextField();
        label.width = 480;
        label.textAlign = egret.HorizontalAlign.CENTER;
        //使用 HtmlTextParser 解析html文本
        label.textFlow = new egret.HtmlTextParser().parser(
            "<font size=12>妈妈再也不用担心我在</font>" +
            "<font color='#336699' size=60 strokecolor='#6699cc' stroke=2>Egret</font>" +
            "<font fontFamily='楷体'>里说一句话不能包含各种</font>" +
            "<font color=0xff0000>五</font>" +
            "<font color=0x00ff00>彩</font>" +
            "<font color=0xf000f0>缤</font>" +
            "<font color=0x00ffff>纷</font>" +
            "<font>、\n</font>" +
            "<font size=36>大</font>" +
            "<font size=6>小</font>" +
            "<font size=16>不</font>" +
            "<font size=24>一</font>" +
            "<font italic='true' color=0x00ff00>格</font>" +
            "<font size=16 color=0xf000f0>式</font>" +
            "<font i='true' color=0xf06f00>各</font>" +
            "<font fontFamily='楷体'><b>样</b></font>" +
            "<font blod='true'>的</font>" +
            "<font><i>文</i></font>" +
            "<font b='true'>字</font>" +
            "<font>了！</font>"
        );
        this.addChild(label);
    }
}