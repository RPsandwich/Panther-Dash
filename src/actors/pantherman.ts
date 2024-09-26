import * as ex from "excalibur";
import { Resources, playerSpriteSheet } from "../resources/resources";

// import { CollisionType } from "excalibur";

const enum JumpState {
  run,
  jump,
  fall,
  land
}
const run = ex.Animation.fromSpriteSheet(playerSpriteSheet, [0, 1, 2, 3, 4, 5], 150);
const jump = ex.Animation.fromSpriteSheet(playerSpriteSheet, [1], 150);
const fall = ex.Animation.fromSpriteSheet(playerSpriteSheet, [0], 150);
const land = ex.Animation.fromSpriteSheet(playerSpriteSheet, [3, 4, 5], 150);


export class Pantherman extends ex.Actor {

  public onGround = true;
  private jumpState = JumpState.run;
  private inTransition = false;
  private initialJumpVelocity = 400; // Initial jump speed
  private upwardVelocity = 200; // Upward velocity after the initial jump
  private downwardVelocity = 600; // Downward velocity
  
 
  // lets you monitor various attributes and such externally
  public monitorText = new ex.Text({
    text: 'this should be changing',
    font: new ex.Font({
    textAlign: ex.TextAlign.Left,
    baseAlign: ex.BaseAlign.Top,
    family: 'monospace'
    })
  })
  constructor() {
    super({
                // pos: ex.vec(150, 100),
        // vel: ex.vec(0, 100),
        pos: ex.vec(150, 70),
        collisionType: ex.CollisionType.Active,
        collider: ex.Shape.Box(13, 13, ex.vec(0.5, 0 ), ex.vec(0, 3)),
        
    
      });
    }
    
    onInitialize() {
      const scaleFactor = 1;
      run.scale = new ex.Vector(scaleFactor, scaleFactor);
      jump.scale = new ex.Vector(scaleFactor, scaleFactor);
      fall.scale = new ex.Vector(scaleFactor, scaleFactor);
      land.scale = new ex.Vector(scaleFactor, scaleFactor);
      this.graphics.add(run);
      this.graphics.add(jump);
      this.graphics.add(fall);
      this.graphics.add(land);
      this.handleJumpState(JumpState.run);
      this.on('pointerup', () => {
        // alert('yo');
      });
      this.on('postcollision', (evt) => this.onPostCollision(evt));
      //when this object collides, fire onPostCollision
      //when i become enabled, subscribe to my postcollision event, and when that event fires, call onPostCollision <a local custom thing
    }

    onPostCollision(evt: ex.PostCollisionEvent) {
      this.onGround = true;
    }


  handleJumpState(newJumpState: JumpState )
  {
    if (this.inTransition) return; //if already animation a state, do nothing
    this.inTransition = true;
    this.setJumpAnimation(newJumpState);
    switch(newJumpState) {
      case JumpState.run:
        //do run/onGround animation
        break;
      case JumpState.jump:
        //do startJumpAnimation
        
        break;
      case JumpState.fall:
        //TODO: make this state work, for some reason it doesnt right now
        //do inAirAnimation
        break;
      case JumpState.land:
        //do landAnimation

        break;
        default:
          
        }
      //todo add duration and intransitiion before setting new state. 
      this.inTransition = false; //add this at the end of animations completing. look into events or promises in js.
      // check excalibur for on complete animation event
      this.jumpState = newJumpState;
      console.log(`I SHOULD BE ANIMATING IN THIS STATE: ${this.jumpState}\n`);
  }

  setJumpAnimation(newJumpState: JumpState)
  {

    switch(newJumpState) {
      case JumpState.run:
        this.graphics.use(run);
        break;
      case JumpState.jump:
        //do startJumpAnimation
        this.graphics.use(jump);
        
        break;
      case JumpState.fall:
        //TODO: make this state work, for some reason it doesnt right now
        //do inAirAnimation
        this.graphics.use(fall);
        break;
      case JumpState.land:
        //do landAnimation
        this.graphics.use(fall);

        break;
        default:
          this.graphics.use(run);  
        }
  }
            
      onPreUpdate(engine: ex.Engine) 
      {
        //if you hit jump button AND you are on the ground
        if(engine.input.keyboard.isHeld(ex.Input.Keys.Space) && this.onGround) {
          this.vel.y = -400;
          this.onGround = false; 
          this.handleJumpState(JumpState.jump);
        }
        
        if (this.vel.y >=0 && !this.onGround && this.jumpState != JumpState.fall) //if in the air and mvoing down, youre falling
        {
          //TODO: for some reason this isnt firing
          this.handleJumpState(JumpState.fall); //set state to falling
        }

        if (this.jumpState == JumpState.fall && this.onGround == true) //if in falling state, but hit ground play land anim
        {
          this.handleJumpState(JumpState.land);
        }

        if (this.jumpState == JumpState.land && this.onGround == true)
        {
          this.handleJumpState(JumpState.run);
        }


        // ATTRIBUTE MONITOR TEXT
        this.monitorText.text = 'Pantherman.vel.y=' +
          Math.round(this.vel.y).toString()
          + '\n' //newline
          + 'Pantherman.onGround='
          + this.onGround.valueOf().toString()
    }
}

// onActivate() {
//   if (!this.isJumping) {
//       this.isJumping = true; // Start the jump
//       this.jumpStage = 0; // Reset the jump stage
//   }
// }
// }

// // Setup the engine and player
// const engine = new Engine();
// const player = new Player();
// engine.add(player);

// // Listen for space bar input
// engine.input.keyboard.on('press', (evt) => {
//     if (evt.key === ex.Input.Keys.Space) {
//         player.onActivate();
//     }
// });

// engine.start();
