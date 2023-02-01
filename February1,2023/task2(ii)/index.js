//polymorphism in ts
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
var Timeline = /** @class */ (function () {
    function Timeline(pages, postsPerPage, ads) {
        this.pages = pages;
        this.postsPerPage = postsPerPage;
        this.ads = ads;
    }
    return Timeline;
}());
var User = /** @class */ (function () {
    function User(userID, name, username) {
        this.userID = userID;
        this.name = name;
        this.username = username;
    }
    User.prototype.renderTimeline = function () {
        return new Timeline(5, 12, true);
    };
    return User;
}());
var PremiumUser = /** @class */ (function (_super) {
    __extends(PremiumUser, _super);
    function PremiumUser(userID, name, username, plan) {
        var _this = _super.call(this, userID, name, username) || this;
        _this.plan = plan;
        return _this;
    }
    PremiumUser.prototype.renderTimeline = function () {
        return new Timeline(4, 12, false);
    };
    return PremiumUser;
}(User));
var freeUser = new User(24356, "random-free-user", "freeUser123");
var premiumUser = new PremiumUser(74365, "random-premium-user", "premiumUser789", "@1299");
console.log(freeUser.renderTimeline());
console.log(premiumUser.renderTimeline());
