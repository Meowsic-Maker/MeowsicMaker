import Phaser from "phaser";
import Cat from "../helpers/cat";
import Zone from "../helpers/zone";

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: "Game",
    });
  }

  preload() {
    this.load.image("bg", "src/assets/bg.jpg");
    this.load.image("cat", "src/assets/neko.jpeg");
  }

  create() {
    this.add.image(640, 390, "bg").setScale(0.4, 0.4);
    let self = this;

    this.dealCatText = this.add
      .text(75, 350, ["DEAL CATS"])
      .setFontSize(18)
      .setFontFamily("Trebuchet MS")
      .setColor("#00ffff")
      .setInteractive();

    this.zone1 = new Zone(this);
    this.dropZone1 = this.zone1.renderZone(660, 500, 100, 100);
    this.outline1 = this.zone1.renderOutline(this.dropZone1);

    this.zone2 = new Zone(this);
    this.dropZone2 = this.zone2.renderZone(360, 400, 100, 100);
    this.outline2 = this.zone2.renderOutline(this.dropZone2);

    this.zone3 = new Zone(this);
    this.dropZone3 = this.zone3.renderZone(460, 300, 100, 100);
    this.outline3 = this.zone3.renderOutline(this.dropZone3);

    this.zone4 = new Zone(this);
    this.dropZone4 = this.zone4.renderZone(630, 190, 100, 100);
    this.outline4 = this.zone4.renderOutline(this.dropZone4);

    this.zone5 = new Zone(this);
    this.dropZone5 = this.zone5.renderZone(740, 140, 100, 100);
    this.outline5 = this.zone5.renderOutline(this.dropZone5);

    this.zone6 = new Zone(this);
    this.dropZone6 = this.zone6.renderZone(860, 290, 100, 100);
    this.outline6 = this.zone6.renderOutline(this.dropZone6);

    this.zone7 = new Zone(this);
    this.dropZone7 = this.zone7.renderZone(950, 390, 100, 100);
    this.outline7 = this.zone7.renderOutline(this.dropZone7);

    this.dealCats = () => {
      this.dealCats = () => {
        for (let i = 0; i < 7; i++) {
          let playerCat = new Cat(this);
          playerCat.render(475 + i * 100, 650, "cat");
        }
      };
    };

    this.dealCatText.on("pointerdown", function () {
      self.dealCats();
    });

    this.dealCatText.on("pointerover", function () {
      self.dealCatText.setColor("#ff69b4");
    });

    this.dealCatText.on("pointerout", function () {
      self.dealCatText.setColor("#00ffff");
    });

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragstart", function (pointer, gameObject) {
      gameObject.setTint(0xff69b4);
      self.children.bringToTop(gameObject);
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      gameObject.setTint();
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
    });

    this.input.on("drop", function (pointer, gameObject, dropZone) {
      dropZone.data.values.cats++;
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;
    });
  }

  update() {}
}
