class Score {
  private score: number;

  constructor() {
    this.score = 0;
  }

  add(value: number): void {
    this.score += value;
    this.updateDisplay();
  }

  updateDisplay(): void {
    const scoreElement = document.querySelector(".score__number");
    if (scoreElement) {
      scoreElement.textContent = this.score.toString();
    }
  }
}

class Food {
  private name: string;
  private value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }

  getName(): string {
    return this.name;
  }

  getValue(): number {
    return this.value;
  }
}

class Foods {
  private foods: Food[];

  constructor() {
    this.foods = [];
  }

  addFood(food: Food): void {
    this.foods.push(food);
  }

  getFoods(): Food[] {
    return this.foods;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const score = new Score();
  const foods = new Foods();

  const foodItems = [
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

  foodItems.forEach((item) => {
    const food = new Food(item.name, item.value);
    foods.addFood(food);
  });

  const buttons = document.querySelectorAll(".foods-container button");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const food = foods.getFoods()[index];
      score.add(food.getValue());
    });
  });
});
