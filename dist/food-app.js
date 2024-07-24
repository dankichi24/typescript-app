"use strict";
var Score = /** @class */ (function () {
    function Score() {
        this.score = 0;
    }
    Score.prototype.add = function (value) {
        this.score += value;
        this.updateDisplay();
    };
    Score.prototype.updateDisplay = function () {
        var scoreElement = document.querySelector(".score__number");
        if (scoreElement) {
            scoreElement.textContent = this.score.toString();
        }
    };
    return Score;
}());
var Food = /** @class */ (function () {
    function Food(name, value) {
        this.name = name;
        this.value = value;
    }
    Food.prototype.getName = function () {
        return this.name;
    };
    Food.prototype.getValue = function () {
        return this.value;
    };
    return Food;
}());
var Foods = /** @class */ (function () {
    function Foods() {
        this.foods = [];
    }
    Foods.prototype.addFood = function (food) {
        this.foods.push(food);
    };
    Foods.prototype.getFoods = function () {
        return this.foods;
    };
    return Foods;
}());
document.addEventListener("DOMContentLoaded", function () {
    var score = new Score();
    var foods = new Foods();
    var foodItems = [
        { name: "緑黄色野菜 +5", value: 5 },
        { name: "その他の野菜 +4", value: 4 },
        { name: "ナッツ類 +2", value: 2 },
        { name: "穀物類 +1", value: 1 },
        { name: "魚類 +4", value: 4 },
        { name: "豆類 +3", value: 3 },
        { name: "鶏肉 +2", value: 2 },
        { name: "ワイン（1日1杯まで） +1", value: 1 },
        { name: "バターとマーガリン -3", value: -3 },
        { name: "チーズ -1", value: -1 },
        { name: "肉（脂身） -3", value: -3 },
        { name: "冷凍食品 -5", value: -5 },
        { name: "スイーツ -5", value: -5 },
        { name: "Fast food -5", value: -5 },
        { name: "外食 -3", value: -3 },
        { name: "ビール -3", value: -3 },
    ];
    foodItems.forEach(function (item) {
        var food = new Food(item.name, item.value);
        foods.addFood(food);
    });
    var buttons = document.querySelectorAll(".foods-container button");
    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var food = foods.getFoods()[index];
            score.add(food.getValue());
        });
    });
});
//# sourceMappingURL=food-app.js.map