# CollisionObject

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
