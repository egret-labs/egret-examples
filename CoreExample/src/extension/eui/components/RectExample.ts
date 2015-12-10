class RectExample extends eui.Group{
    constructor(){
        super();
        var exml =
            `<e:Group width="100" height="100" xmlns:e="http://ns.egret.com/eui">
               <e:Rect height="100%" width="100%" fillColor="0xffffff"/>
            </e:Group>`;
        var clazz = EXML.parse(exml);
        var group:eui.Group = new clazz();
        this.addChild(group);
    }
}