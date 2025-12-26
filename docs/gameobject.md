# GameObject

Базовый класс, от которого наследуются все объекты в игры

Данный класс задает позицию для объекта, а так же его отображение. Не умеет передвигаться, не умеет просчитывать коллизию

## Методы

### getPos

Получение координат объекта

### render

Метод для отображения объекта на экране

# Код

```JavaScript
class GameObject {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  get getPos() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  render(deltaTime) {
    throw new Error("Наследники должны определить метод render");
  }
}
```
