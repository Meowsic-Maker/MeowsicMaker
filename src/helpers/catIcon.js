export default class CatIcon {
  constructor(scene) {
    this.render = (x, y, sprite) => {
      let catIcon = scene.add
        .image(x, y, sprite)
        .setScale(0.35, 0.35)
        .setInteractive();
      return cat;
    };
  }
}
