var list = [

    //external
    "ExternalInterface",
    //localStorage
    "localStorage",
    //display
    "Bitmap",
    "BitmapFillMode",
    "BlendMode",
    "DisplayObject",
    "DisplayObjectContainer",
    "Graphics",
    "RenderTexture",
    "Shape",
    "Sprite",
    "SpriteSheet",
    "Stage",
    "Texture",
    //player
    "StageScaleMode",
    //events
    "Event",
    "EventDispatcher",
    "EventPhase",
    "IEventDispatcher",
    "IOErrorEvent",
    "TextEvent",
    "TimerEvent",
    //geom
    "Matrix",
    "Point",
    "Rectangle",
    //media
    "Sound",
    "Video",
    //text
    "BitmapFont",
    "BitmapText",
    "HtmlTextParser",
    "TextField",

    //utils
    "ByteArray",
    "callLater",
    "getDefinitionByName",
    "getOptionName",
    "getQualifiedClassName",
    "getQualifiedSuperClassName",
    "getTimer",
    "hasDefinition",
    "is",
    "numberUtils",
    "Timer",
    "toColorString",
    "XML",
    //extension
    //Dragonbones
    "Dragonbones",
    //game-display
    "MovieClip",
    "ScrollView",
    //game-net
    "URLLoader",
    "URLLoaderDataFormat",
    "URLRequest",
    "URLRequestHeader",
    "URLRequestMethod",
    "URLVariables",
    //game-player
    "Ticker",
    //game-tuils
    "Recycler",
    "setInterval",
    "setTimeout",
    //resource
    "Resource",
    "GetResByUrl",
    //socket
    "WebSocket",
    //tween
    "Tween"
];

var examples = {
    "Core": list,
    "EUI": ["all"],
    "GUI": ["ocean", "simple"]
};


function returnHref(thirdName, forthName) {
    if (thirdName.indexOf("GUI") >= 0) {
        return "GUIExample/index.html?mainClass=" + forthName + "&test=" + forthName + "&r=" + Math.random();
    }
    else if (thirdName.indexOf("EUI") >= 0) {
        return "EUIExample/index.html?mainClass=" + (forthName) + "&test=" + forthName + "&r=" + Math.random();
    }
    else {
        return "CoreExample/index.html?mainClass=" + (forthName + "Example") + "&test=" + forthName + "&r=" + Math.random();
    }
}

createRoot("Egret", "examples", examples, returnHref);
