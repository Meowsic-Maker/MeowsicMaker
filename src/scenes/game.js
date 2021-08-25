import Phaser from "phaser";
import Cat1 from "../helpers/cat1";
import Cat2 from "../helpers/cat2";
import Menu from "../helpers/menu";
import Zone from "../helpers/zone";
import * as Tone from "tone";

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: "Game",
    });
  }

  preload() {
    this.load.image("bg", "src/assets/bg.jpg");
    this.load.image("cat", "src/assets/happyneko.png");
    this.load.image("cat2", "src/assets/neko.jpeg");
    this.load.image("button1", "src/assets/latteneko.png");
    this.load.image("button2", "src/assets/caliconeko.png");
    this.load.image("button3", "src/assets/greyneko.png");
    this.load.image("button4", "src/assets/kuroneko.png");
    this.load.image("button5", "src/assets/sleepyneko.png");
    this.load.image("button6", "src/assets/coffeeneko.png");
    this.load.audio("bossanova", "src/assets/bossa-nova-bass.wav");
    this.load.audio("meow", "src/assets/meow.mp3");
    this.load.audio("bell", "src/assets/bell.mp3");
  }

  create() {
    this.add.image(640, 390, "bg").setScale(0.4, 0.4);
    let self = this;

    const bellSound = () => {
      const bell = new Tone.Player("src/assets/bell.mp3").toDestination();
      bell.autostart = true;
    };

    const getCatSound = () => {
      const audioContext = new AudioContext();
      const osc = audioContext.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = 350;
      osc.frequency.exponentialRampToValueAtTime(
        600,
        audioContext.currentTime + 1
      );
      const gain = audioContext.createGain();
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.9
      );
      osc.start();
      osc.stop(audioContext.currentTime + 1);
      osc.connect(gain).connect(audioContext.destination);
    };

    this.menuZone = new Menu(this);
    this.menuDropZone = this.menuZone.renderZone(80, 390, 120, 660);
    this.menuOutline = this.menuZone.renderOutline(this.menuDropZone);

    this.zone1 = new Zone(this);
    this.dropZone1 = this.zone1.renderZone(645, 480, 210, 360);
    this.outline1 = this.zone1.renderOutline(this.dropZone1);

    this.zone2 = new Zone(this);
    this.dropZone2 = this.zone2.renderZone(330, 400, 140, 240);
    this.outline2 = this.zone2.renderOutline(this.dropZone2);

    this.zone3 = new Zone(this);
    this.dropZone3 = this.zone3.renderZone(470, 300, 140, 200);
    this.outline3 = this.zone3.renderOutline(this.dropZone3);

    this.zone4 = new Zone(this);
    this.dropZone4 = this.zone4.renderZone(610, 200, 140, 200);
    this.outline4 = this.zone4.renderOutline(this.dropZone4);

    this.zone5 = new Zone(this);
    this.dropZone5 = this.zone5.renderZone(740, 150, 120, 180);
    this.outline5 = this.zone5.renderOutline(this.dropZone5);

    this.zone6 = new Zone(this);
    this.dropZone6 = this.zone6.renderZone(860, 305, 220, 130);
    this.outline6 = this.zone6.renderOutline(this.dropZone6);

    this.zone7 = new Zone(this);
    this.dropZone7 = this.zone7.renderZone(920, 440, 220, 140);
    this.outline7 = this.zone7.renderOutline(this.dropZone7);

    this.gameButton1 = this.add
      .sprite(80, 120, "button1")
      .setDisplaySize(90, 80)
      .setInteractive();

    this.gameButton2 = this.add
      .sprite(80, 220, "button2")
      .setDisplaySize(90, 80)
      .setInteractive();

    this.gameButton3 = this.add
      .sprite(80, 320, "button3")
      .setDisplaySize(90, 80)
      .setInteractive();

    this.gameButton4 = this.add
      .sprite(80, 420, "button4")
      .setDisplaySize(90, 80)
      .setInteractive();

    this.gameButton5 = this.add
      .sprite(80, 520, "button5")
      .setDisplaySize(90, 80)
      .setInteractive();

    this.gameButton6 = this.add
      .sprite(80, 620, "button6")
      .setDisplaySize(90, 80)
      .setInteractive();

    this.cats = [];

    // this.dealCats = () => {
    //   for (let i = 0; i < 7; i++) {
    //     let playerCat = new Cat(this);
    //     playerCat.render(80, 120 + i * 90, "cat");
    //     playerCat.name = "Cat " + (i + 1);
    //     this.cats.push(playerCat);
    //     console.log("playerCat", playerCat);
    //     console.log("this.cats", this.cats);
    //   }
    // };

    // this.dealCatText.on("pointerdown", function () {
    //   const bell = new Tone.Player("src/assets/bell.mp3").toDestination();
    //   bell.autostart = true;
    //   self.dealCats();
    // });

    // this.dealCatText.on("pointerover", function () {
    //   self.dealCatText.setColor("#ff69b4");
    // });

    // this.dealCatText.on("pointerout", function () {
    //   self.dealCatText.setColor("#00ffff");
    // });

    this.gameButton1.on(
      "pointerdown",
      function (pointer) {
        bellSound();
        let playerCat = new Cat1(this);
        playerCat.render(80, 120, "cat");
        playerCat.name = "Cat 1";
      }.bind(this)
    );

    this.gameButton2.on(
      "pointerdown",
      function (pointer) {
        bellSound();
        let playerCat2 = new Cat2(this);
        playerCat2.render(80, 220, "cat2");
        playerCat2.name = "Cat 2";
      }.bind(this)
    );

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragstart", function (pointer, gameObject) {
      getCatSound();
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
      if (dropZone.data.values.isMenu) {
        gameObject.data.values.dropZones.forEach(
          (zone) => (zone.data.values.occupied = false)
        );
        gameObject.data.values.soundOn = false;
        console.log(gameObject.data.values.soundOn);
        gameObject.destroy();
      } else if (!dropZone.data.values.occupied) {
        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;
        dropZone.data.values.occupied = true;
        if (gameObject.data.values.dropZones.length !== 0) {
          gameObject.data.values.dropZones.forEach(
            (zone) => (zone.data.values.occupied = false)
          );
        }
        gameObject.data.values.dropZones.push(dropZone);
        gameObject.data.values.soundOn = true;
        gameObject.data.values.meow();
      } else {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
    });
  }

  update() {}
}
