class Vector2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  normalize() {}

  add() {}
}

class GameObject {
  constructor(x = 0, y = 0, width = 0, height = 0, sprite = "") {
    this.position = Vector2D(x, y);
    this.width = width;
    this.height = height;
    this.sprite = sprite;
  }

  setPos(newX, newY) {
    this.x = newX;
    this.y = newY;
  }

  get getPos() {
    return this.position;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }

  get getSize() {
    return {
      width: this.width,
      height: this.height,
    };
  }

  setSprite(newSprite) {
    this.sprite = newSprite;
  }
}

class CollisionObject extends GameObject {
  constructor(x, y, width, height, sprite) {
    super(x, y, width, height, sprite);

    this.colliderRadius = 0;
    this.isColliding = true;
  }
}

class Entity extends CollisionObject {
  constructor(x, y, isColliding, colliderRadius) {
    super(x, y, isColliding, colliderRadius);

    this.speed = 0;
    this.direction = 0;
  }
}
