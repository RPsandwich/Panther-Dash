import * as ex from "excalibur";
// import { CollisionType } from "excalibur";

export class Floors extends ex.Actor {
  constructor() {
    super({
        color: ex.Color.DarkGray,
        pos: ex.vec(200, 275),
        x: 324,
        // y: game.drawHeight - 40,
        width: 600,
        height: 120,
        collisionType: ex.CollisionType.Fixed,
      });
    }}
