import * as Tone from "tone";

export default class Cat2 {
  constructor(scene) {
    this.render = (x, y, sprite) => {
      let cat = scene.add
        .image(x, y, sprite)
        .setDisplaySize(90, 80)
        .setInteractive();
      cat.setData({
        soundOn: false,
        music: "src/assets/meow.mp3",
        dropZones: [],
        meow() {
          console.log("meowed!");
          const meowSound = new Tone.Player(this.music).toDestination();
          const playSound = (sound) => {
            Tone.loaded().then(() => {
              const loop = new Tone.Loop((time) => {
                meowSound.start();
              }, "1n").start(0);

              Tone.Transport.bpm.value = 80;
              Tone.Transport.start();
              // Tone.Transport.stop(+30);
            });
          };
          if (this.soundOn) {
            playSound(meowSound);
          }
        },
      });

      scene.input.setDraggable(cat);
      return cat;
    };
  }
  // meow() {
  //   const meowSound = new Tone.Player(this.music).toDestination();
  //   const playSound = (sound) => {
  //     Tone.loaded().then(() => {
  //       const loop = new Tone.Loop((time) => {
  //         meowSound.start();
  //       }, "1n").start(0);

  //       Tone.Transport.bpm.value = 80;
  //       Tone.Transport.start();
  //       // Tone.Transport.stop(+30);
  //     });
  //   };
  //   if (this.soundOn) {
  //     playSound(meow);
  //   }
  // }
}
