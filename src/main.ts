import * as ex from "excalibur"
import { Pantherman } from './actors/pantherman';
import { loader } from "./resources/resources";
import { Floors } from "./actors/floors";


  class Game extends ex.Engine {
    constructor() {
      super({width: 480, height: 270});
      
    }
    initialize() {
      const roc = new Pantherman();
      this.add(roc);
      const building = new Floors();
      this.add(building);

      this.start(loader);
    }
  }
  ex.Physics.acc = new ex.Vector(0, 800);
 
  // let mySound = new Sound('./audio/wee-19996.wav')
  // mySound.play()
  export const game = new Game();
  game.initialize();
