var skins;
(function (skins) {
	var MainSkin=(function (_super) {
		__extends(MainSkin, _super);
		function MainSkin() {
			_super.call(this);
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("normal",
					[
					])
			];
		}
		var _proto = MainSkin.prototype;
	
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.height = 148;
			t.horizontalCenter = -6;
			t.verticalCenter = 2;
			t.width = 292;
			t.elementsContent = [this.btnBlue_i(),this.btnGreen_i(),this._Label1_i()];
			return t;
		};
		_proto.btnBlue_i = function () {
			var t = new eui.Button();
			this.btnBlue = t;
			t.horizontalCenter = -60;
			t.label = "蓝色";
			t.name = "blue";
			t.skinName = "resource/skins/blue/ButtonSkin.exml";
			t.verticalCenter = 0;
			return t;
		};
		_proto.btnGreen_i = function () {
			var t = new eui.Button();
			this.btnGreen = t;
			t.horizontalCenter = 60;
			t.label = "绿色";
			t.name = "green";
			t.skinName = "resource/skins/green/ButtonSkin.exml";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.size = 24;
			t.text = "请选择一个主题";
			t.textColor = 0xFFFFFF;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["btnBlue","btnGreen"];
			},
			enumerable: true,
			configurable: true
		});
		return MainSkin;
	})(eui.Skin);
})(skins || (skins = {}));