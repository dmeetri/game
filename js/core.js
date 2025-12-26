class Scene {
  constructor(objects) {
    this.objects = objects;
  }

  get getObjects() {
    return this.objects;
  }
}

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

class CollisionObject extends Object {
  constructor(x = 0, y = 0, radius = 10) {
    super(x, y);
    this.radius = radius;
  }
}
