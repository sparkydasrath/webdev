var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created: ", +this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    return User;
}());
var j = new User("John", "j@g.com", 1);
console.log(j);
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        console.log("Member id = " + _this.id + " for " + name);
        return _this;
    }
    return Member;
}(User));
var k = new User("KJohn", "j@g.com", 2);
console.log(k);
var m = new Member(123, "KKK", "KK@gg.com", 1111);
