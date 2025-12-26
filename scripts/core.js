class Vector2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

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

class CollisionObject extends GameObject {
  constructor(x, y) {
    super(x, y);

    this.radius = 0;
    this.isColliding = true;
  }
}

class Entity extends CollisionObject {
  constructor(x, y, isColliding, radius) {
    super(x, y, isColliding, radius);

    this.speed = 0;
    this.direction = 0;
  }
}
