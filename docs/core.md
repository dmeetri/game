# Core - Ядро

Все методы перечисленные ниже располагаются в `js/core.js`

## Scene

Класс сцены. Хранит в себе все объекты, которые были созданы. Позволяет создавать и удалять объекты в себе. Есть поддержка нескольких сцен

Код:

```JavaScript
class Scene {
  constructor(objects) {
    this.objects = objects;
  }

  get getObjects() {
    return this.objects;
  }
}
```

## Object

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

## CollisionObject

Класс для объектов, котором нужна коллизия. Коллизия высчитывается только по кругу. Другие формы движок не поддерживает

Код:

```JavaScript
class CollisionObject extends Object {
  constructor(x = 0, y = 0, radius = 10) {
    super(x, y);
    this.radius = radius;
  }
}
```
