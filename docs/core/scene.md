# Scene

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

# Добавить объект

# Удалить объект объект
