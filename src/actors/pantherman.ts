import * as ex from "excalibur";
import { Resources } from "../resources/resources";

// import { CollisionType } from "excalibur";

export class Pantherman extends ex.Actor {
  public onGround = true;
  constructor() {
    super({
                // pos: ex.vec(150, 100),
        // vel: ex.vec(0, 100),
        pos: ex.vec(150, 70),
        collisionType: ex.CollisionType.Active,
        collider: ex.Shape.Box(13, 13, ex.Vector.Half, ex.vec(0, 3))
      });
    }
    
    onInitialize() {
      this.graphics.add(Resources.Panther.toSprite());
      this.on('pointerup', () => {
        alert('yo');
      });
    }
    onPreUpdate(engine: ex.Engine) {
      if(engine.input.keyboard.isHeld(ex.Input.Keys.Space)) {
        this.vel.y = -400;
        this.onGround = false;
      }
    }
}
