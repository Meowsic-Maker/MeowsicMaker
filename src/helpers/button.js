import Phaser from "phaser";

export class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontColor, key1, key2, text) {
    super(scene);

    this.scene = scene;
    this.x = x;
    this.y = y;

    const button = this.scene.add.image(x, y, key1).setInteractive();
    const buttonText = this.scene.add.text(x, y, text, {
      fontSize: "28px",
      color: fontColor,
    });
    Phaser.Display.Align.In.Center(buttonText, button);

    this.add(button);
    this.add(buttonText);

    button.on("pointerdown", () => {
      button.setTexture(key2);
    });
    button.on("pointerup", () => {
      button.setTexture(key1);
    });
    this.scene.add.existing(this);
  }

  // enterButtonHoverState() {
  //   this.setStyle({ fill: "#ff0" });
  // }

  // enterButtonRestState() {
  //   this.setStyle({ fill: "#0f0" });
  // }

  // enterButtonActiveState() {
  //   this.setStyle({ fill: "#0ff" });
  // }
}
