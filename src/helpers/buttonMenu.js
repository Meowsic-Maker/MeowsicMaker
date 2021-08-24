import Phaser from "phaser";

import { Button } from "./button";

export class SimpleScene extends Phaser.Scene {
  create() {
    // this.clickCount = 0;
    // this.clickCountText = this.add.text(100, 200, "");

    const settingsButton = new Button(
      this,
      100,
      100,
      "#000",
      "button",
      "button_pressed",
      "Settings"
    );

    // this.incrementButton = new Button(
    //   this,
    //   100,
    //   100,
    //   "Increment Count",
    //   { fill: "#0f0" },
    //   () => this.incrementClickCount()
    // );
    // this.add.existing(this.incrementButton);

    // this.decrementButton = new Button(
    //   this,
    //   100,
    //   150,
    //   "Decrement Count",
    //   { fill: "#0f0" },
    //   () => this.decrementClickCount()
    // );
    //   this.add.existing(this.decrementButton);

    //   this.updateClickCountText();
    // }

    // incrementClickCount() {
    //   this.clickCount += 1;
    //   this.updateClickCountText();
    // }

    // decrementClickCount() {
    //   this.clickCount -= 1;
    //   this.updateClickCountText();
    // }

    // updateClickCountText() {
    //   this.clickCountText.setText(
    //     `Button has been clicked ${this.clickCount} times.`
    //   );
    // }
  }
}
