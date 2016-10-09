/**
*   使用以下代码进行XML到JSON的属性访问
*/
class XMLExample extends egret.DisplayObjectContainer {

    public constructor() {
      super();
      var source =
          '<familys xmlns="http://www.w3.org/2005/Atom">'
              + '<family doorNumber="1001">'
                  + '<member relation="father" name="John"/>'
                  + '<member relation="mather" name="Ada"/>'
                  + '<member relation="daughter" name="Lucy"/>'
              + '</family>'
              + '<family doorNumber="1002">'
                  + '<member relation="father" name="Jack"/>'
                  + '<member relation="mather" name="Afra"/>'
                  + '<member relation="son" name="Jom"/>'
              + '</family>'
          + '</familys>';

      var familys = egret.XML.parse(source);
      egret.log(familys.name); //familys
      egret.log(familys.localName); //familys
      egret.log(familys.nodeType); //1
      egret.log(familys.namespace); //http://www.w3.org/2005/Atom

      var children = familys.children;
      egret.log(children.length); //2

      var family1:egret.XML = <egret.XML><any>children[0];
      egret.log(family1.name); //family
      egret.log(family1.localName); //family
      egret.log(family1.nodeType); //1
      egret.log(family1.namespace); //http://www.w3.org/2005/Atom
      egret.log(family1.attributes.doorNumber); //1001
      egret.log(family1["$doorNumber"]); //1001

      var father1:egret.XML = <egret.XML><any>family1.children[0];
      egret.log(father1.name); //member
      egret.log(father1.localName); //member
      egret.log(father1.nodeType); //1
      egret.log(father1.namespace); //http://www.w3.org/2005/Atom
      egret.log(father1.attributes.relation); //father
      egret.log(father1["$relation"]); //father
      egret.log(father1.attributes.name); //John
      egret.log(father1["$name"]); //John
    }
}
