
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/dragonBones/dragonBones.js",
	"libs/modules/socket/socket.js",
	"libs/modules/eui/eui.js",
	"polyfill/promise.js",
	"bin-debug/extension/eui/components/CheckboxExample.js",
	"bin-debug/egret/display/Bitmap.js",
	"bin-debug/egret/display/BlendMode.js",
	"bin-debug/egret/display/DisplayObject.js",
	"bin-debug/egret/display/DisplayObjectContainer.js",
	"bin-debug/egret/display/Graphics.js",
	"bin-debug/egret/display/Mask.js",
	"bin-debug/egret/display/RenderTexture.js",
	"bin-debug/egret/display/Shape.js",
	"bin-debug/egret/display/Sprite.js",
	"bin-debug/egret/display/SpriteSheet.js",
	"bin-debug/egret/display/Stage.js",
	"bin-debug/egret/display/Texture.js",
	"bin-debug/egret/events/Event.js",
	"bin-debug/egret/events/EventDispatcher.js",
	"bin-debug/egret/events/EventPhase.js",
	"bin-debug/egret/events/IEventDispatcher.js",
	"bin-debug/egret/events/IOErrorEvent.js",
	"bin-debug/egret/events/StageOrientationEvent.js",
	"bin-debug/egret/events/TextEvent.js",
	"bin-debug/egret/events/TimerEvent.js",
	"bin-debug/egret/events/TouchEvent.js",
	"bin-debug/egret/external/ExternalInterface.js",
	"bin-debug/egret/geom/Matrix.js",
	"bin-debug/egret/geom/Point.js",
	"bin-debug/egret/geom/Rectangle.js",
	"bin-debug/egret/localStorage/localStorage.js",
	"bin-debug/egret/media/Sound.js",
	"bin-debug/egret/media/Video.js",
	"bin-debug/egret/net/HttpRequestExample.js",
	"bin-debug/egret/net/ImageLoaderExample.js",
	"bin-debug/egret/player/StageScaleMode.js",
	"bin-debug/egret/sensor/DeviceOrientation.js",
	"bin-debug/egret/sensor/Geolocation.js",
	"bin-debug/egret/sensor/Motion.js",
	"bin-debug/egret/system/Capabilities.js",
	"bin-debug/egret/text/BitmapFont.js",
	"bin-debug/egret/text/BitmapText.js",
	"bin-debug/egret/text/HtmlTextParser.js",
	"bin-debug/egret/text/TextField.js",
	"bin-debug/egret/utils/ByteArray.js",
	"bin-debug/egret/utils/callLater.js",
	"bin-debug/egret/utils/getDefinitionByName.js",
	"bin-debug/egret/utils/getOption.js",
	"bin-debug/egret/utils/getQualifiedClassName.js",
	"bin-debug/egret/utils/getQualifiedSuperClassName.js",
	"bin-debug/egret/utils/getTimer.js",
	"bin-debug/egret/utils/hasDefinition.js",
	"bin-debug/egret/utils/is.js",
	"bin-debug/egret/utils/numberUtils.js",
	"bin-debug/egret/utils/Timer.js",
	"bin-debug/egret/utils/toColorString.js",
	"bin-debug/egret/utils/XML.js",
	"bin-debug/extension/dragonbones/Dragonbones.js",
	"bin-debug/extension/eui/binding/BindingExample.js",
	"bin-debug/extension/eui/binding/WatcherExample.js",
	"bin-debug/extension/eui/collections/ArrayCollectionExample.js",
	"bin-debug/extension/eui/components/BitmapLabelExample.js",
	"bin-debug/extension/eui/components/ButtonExample.js",
	"bin-debug/egret/display/BitmapFillMode.js",
	"bin-debug/extension/eui/components/ComponentExample.js",
	"bin-debug/extension/eui/components/DataGroupExample.js",
	"bin-debug/extension/eui/components/EditablTextExample.js",
	"bin-debug/extension/eui/components/GroupExample.js",
	"bin-debug/extension/eui/components/HScrollBarExample.js",
	"bin-debug/extension/eui/components/HSliderExample.js",
	"bin-debug/extension/eui/components/ImageExample.js",
	"bin-debug/extension/eui/components/ItemRendererExample.js",
	"bin-debug/extension/eui/components/LabelExample.js",
	"bin-debug/extension/eui/components/ListExample.js",
	"bin-debug/extension/eui/components/PanelExample.js",
	"bin-debug/extension/eui/components/ProgressBarExample.js",
	"bin-debug/extension/eui/components/RadioButtonExample.js",
	"bin-debug/extension/eui/components/RadioButtonGroupExample.js",
	"bin-debug/extension/eui/components/RectExample.js",
	"bin-debug/extension/eui/components/ScrollerExample.js",
	"bin-debug/extension/eui/components/SkinExample.js",
	"bin-debug/extension/eui/components/supportClasses/DefaultAssetAdapterExample.js",
	"bin-debug/extension/eui/components/supportClasses/RangeExample.js",
	"bin-debug/extension/eui/components/TabBarExample.js",
	"bin-debug/extension/eui/components/TextInputExample.js",
	"bin-debug/extension/eui/components/ToggleButtonExample.js",
	"bin-debug/extension/eui/components/ToggleSwitchExample.js",
	"bin-debug/extension/eui/components/ViewStackExample.js",
	"bin-debug/extension/eui/components/VScrollBarExample.js",
	"bin-debug/extension/eui/components/VSliderExample.js",
	"bin-debug/extension/eui/core/DirectionExample.js",
	"bin-debug/extension/eui/core/ScrollPolicyExample.js",
	"bin-debug/extension/eui/core/ThemeExample.js",
	"bin-debug/extension/eui/events/CollectionEventExample.js",
	"bin-debug/extension/eui/events/ItemTapEventExample.js",
	"bin-debug/extension/eui/events/PropertyEventExample.js",
	"bin-debug/extension/eui/events/UIEventExample.js",
	"bin-debug/extension/eui/layout/BasicLayoutExample.js",
	"bin-debug/extension/eui/layout/ColumnAlignExample.js",
	"bin-debug/extension/eui/layout/HorizontalLayoutExample.js",
	"bin-debug/extension/eui/layout/JustifyAlignExample.js",
	"bin-debug/extension/eui/layout/RowAlignExample.js",
	"bin-debug/extension/eui/layout/TileLayoutExample.js",
	"bin-debug/extension/eui/layout/TileOrientationExample.js",
	"bin-debug/extension/eui/layout/VerticalLayoutExample.js",
	"bin-debug/extension/game/display/MovieClip.js",
	"bin-debug/extension/game/display/ScrollView.js",
	"bin-debug/extension/game/net/URLLoader.js",
	"bin-debug/extension/game/net/URLLoaderDataFormat.js",
	"bin-debug/extension/game/net/URLRequest.js",
	"bin-debug/extension/game/net/URLRequestHeader.js",
	"bin-debug/extension/game/net/URLRequestMethod.js",
	"bin-debug/extension/game/net/URLVariables.js",
	"bin-debug/extension/game/player/Ticker.js",
	"bin-debug/extension/game/utils/Recycler.js",
	"bin-debug/extension/game/utils/setInterval.js",
	"bin-debug/extension/game/utils/setTimeout.js",
	"bin-debug/extension/resource/GetResByUrl.js",
	"bin-debug/extension/resource/Resource.js",
	"bin-debug/extension/socket/WebSocket.js",
	"bin-debug/extension/tween/Tween.js",
	"bin-debug/Loader.js",
	"bin-debug/Main.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "noScale",
		contentWidth: 480,
		contentHeight: 800,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};