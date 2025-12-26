# Object

Базовый класс от которого наследуются все элементы. Представляет собой ноль объект. Упрощает разработку, ведь не приходится писать координаты и логику передвижения для каждого объекта

Код:

```JavaScript
class Object {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  update(deltatime) {}

  render() {
    throw new Error("Дочерние методы должны реализовать метод render");
  }
}
```
