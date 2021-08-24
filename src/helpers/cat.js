export default class Cat {
  constructor(scene) {
    this.render = (x, y, sprite) => {
      let cat = scene.add
        .image(x, y, sprite)
        .setScale(0.35, 0.35)
        .setInteractive();
      scene.input.setDraggable(cat);
      return cat;
    };
  }
}
