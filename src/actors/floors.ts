import * as ex from "excalibur";
// import { CollisionType } from "excalibur";

export class Floors extends ex.Actor {
  constructor(xnumber: number) {
    super({
      color: ex.Color.DarkGray,
      pos: ex.vec(xnumber, 275),
      // y: game.drawHeight - 40,
      width: 480,
      height: 120,
      collisionType: ex.CollisionType.Fixed,
      });
    }}
