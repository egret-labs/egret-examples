var components;
(function (components) {
	var CloseButton=(function (_super) {
		__extends(CloseButton, _super);
		var CloseButton$Skin1 = 	(function (_super) {
			__extends(CloseButton$Skin1, _super);
			function CloseButton$Skin1() {
				_super.call(this);
				
				this.elementsContent = [this._Image1_i()];
			}
			var _proto = CloseButton$Skin1.prototype;
	
			_proto._Image1_i = function () {
				var t = new eui.Image();
				t.percentHeight = 100;
				t.source = "resource/assets/close.png";
				t.percentWidth = 100;
				return t;
			};
			Object.defineProperty(_proto, "skinParts", {
				get: function () {
					return [];
				},
				enumerable: true,
				configurable: true
			});
			return CloseButton$Skin1;
		})(eui.Skin);
	
		function CloseButton() {
			_super.call(this);
			
			this.skinName = CloseButton$Skin1;
		}
		var _proto = CloseButton.prototype;
	
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return [];
			},
			enumerable: true,
			configurable: true
		});
		return CloseButton;
	})(eui.Button);
})(components || (components = {}));