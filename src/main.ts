import * as ex from "excalibur"
import { Pantherman } from './actors/pantherman';
import { loader } from "./resources/resources";
import { Floors } from "./actors/floors";
import { clouds1, clouds2, cityScape1, cityScape2, nearScape1, nearScape2, nearScape3 } from "./actors/backgrounds";
import { GameOver, resetbutton } from "./actors/scenes";

 
class Game extends ex.Engine {
    constructor() {
      super({width: 480, height: 270});
      
    }
    initialize() {
      //I've commented out the actors in our engine initialization and put them into our scene below, it functions in the same way except you don't have to use 'this.add'
      // const roc = new Pantherman();
      // this.add(roc);
      // const building = new Floors();
      // this.add(building);
      this.add('gameover', new GameOver());
      this.add('level', new Level ());
      this.start(loader);
      game.goToScene('level');

    }
  }
  ex.Physics.acc = new ex.Vector(0, 800);
 
  // let mySound = new Sound('./audio/wee-19996.wav')
  // mySound.play()
 

  // Note on this: put any game.add actors or things in here, it works just like the engine but it makes it easier to switch from scene to scene.
  export class Level extends ex.Scene {
    constructor() {
        super();
    }
    onInitialize(game: ex.Engine) {

      //DeepBackgrounds
      game.add(clouds1);
      game.add(clouds2);

      //MidBackgrounds
      game.add(cityScape1);
      game.add(cityScape2);

      //NearBackgrounds
      game.add(nearScape1);
      game.add(nearScape2);
      game.add(nearScape3);
      
      //adding the player
      const roc = new Pantherman();
      game.add(roc);
      
      // coords at the top of the screen
      const monitorActor = new ex.Actor({
        pos: ex.vec(0, 0),
        anchor: ex.vec(0, 0)
      })
      monitorActor.graphics.use(roc.monitorText)
      this.add(monitorActor);
      
      //floors, we have 2 of them sharing the same velocity currently but this can be deleted or altered however we want
      const building = new Floors(240);
      game.add(building);
      
      const building2 = new Floors(814);
      game.add(building2);
      
      const buildingSpeed = ex.vec(-100, 0);
      setTimeout(() => {
        building2.vel = buildingSpeed;
        building.vel = buildingSpeed;
      }, 1000);
      
      //DeepBackground Scroll
      const deepBackgroundSpeed = ex.vec(-10, 0);
      setTimeout(() => {
      clouds1.vel = deepBackgroundSpeed;
      clouds2.vel = deepBackgroundSpeed;
      }, 1000);

      //MidBackground Scroll
      const midBackgroundSpeed = ex.vec(-30, 0);
      setTimeout(() => {
        cityScape1.vel = midBackgroundSpeed;
        cityScape2.vel = midBackgroundSpeed;
      }, 1000);
      
      //NearBackground Scroll
      const nearBackgroundSpeed = ex.vec(-60, 0);
      setTimeout(() => {
      nearScape1.vel = nearBackgroundSpeed;
      nearScape2.vel = nearBackgroundSpeed;
      nearScape3.vel = nearBackgroundSpeed;
      }, 1000);

      // when roc exits the viewport we pull up the reset screen
      roc.on("exitviewport", () => {
        game.goToScene('gameover');
      });

      resetbutton.on('pointerup', () => {
        // When you click the reset button it resets. for now I'm manually resetting the position of each actor, the commented out code was me trying to delete the current scene and initialize a new one but the actors were acting strange (no pun intended)
        roc.pos.x = 150;
        roc.pos.y = 70;

        building.pos.x = 240;
        building2.pos.x = 805;

        clouds1.pos.x = 250,
        clouds2.pos.x = 750,

        cityScape1.pos.x = 250,
        cityScape2.pos.x = 750,

        nearScape1.pos.x = 250,
        nearScape2.pos.x = 750,
        nearScape3.pos.x = 1250,
    
        // game.remove('level');
        // const newLevel = new Level();
        // game.add('level', newLevel);
        game.goToScene('level');
      });
    }
  }

  ex.Physics.acc = new ex.Vector(0, 800);



  export const game = new Game();


  
  game.initialize();

