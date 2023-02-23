var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClickPhoto = /** @class */ (function () {
    function ClickPhoto(aspectRatio) {
        this.aspectRatio = aspectRatio;
    }
    return ClickPhoto;
}());
var CameraApp = /** @class */ (function (_super) {
    __extends(CameraApp, _super);
    function CameraApp(aspectRatio, renderSizeValue) {
        var _this = _super.call(this, aspectRatio) || this;
        _this.aspectRatio = aspectRatio;
        _this.renderSizeValue = renderSizeValue;
        _this.renderSizeValue = renderSizeValue;
        return _this;
    }
    CameraApp.prototype.getBlackAndWhite = function () {
        console.log("A photo of aspect ratio " + this.aspectRatio + " and with B&W filter was clicked with render size value of " + this.renderSizeValue);
    };
    return CameraApp;
}(ClickPhoto));
var camObj = new CameraApp("16:8", 75);
camObj.getBlackAndWhite();
