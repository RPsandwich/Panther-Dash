
import * as ex from 'excalibur';
import { Resources } from "../resources/resources";

// Create a parent background class
// Create a child Deep Background class
// Set Starting position, shovel into array function in Background Class
// Set image, size, parallax effect, 3 class instances, array of instances to use as args in array function, call function in Deep Background Class

export class Background extends ex.Actor {
  constructor(xnumber: number) {
    super({
      pos: ex.vec(xnumber,135),
      width: 500,
      height: 270,
    });
  }
}


export class DeepBackground extends Background {
  onInitialize (_engine: ex.Engine) {
  this.graphics.use(Resources.Skyline1.toSprite());
  }
}

export const clouds1 = new DeepBackground(250)
export const clouds2 = new DeepBackground(clouds1.width+250)


export class MidBackground extends Background {
  onInitialize (_engine: ex.Engine) {
  this.graphics.use(Resources.citySkyline.toSprite());
  }
}

export const cityScape1 = new MidBackground(250)
export const cityScape2 = new MidBackground(cityScape1.width+250)

export class NearBackground extends Background {
  onInitialize (_engine: ex.Engine) {
  this.graphics.use(Resources.cathedralSkyline.toSprite());
  }
}

export const nearScape1 = new NearBackground(250)
export const nearScape2 = new NearBackground(nearScape1.width+250)
export const nearScape3 = new NearBackground(nearScape1.width+nearScape2.width+250)