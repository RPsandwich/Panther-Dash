import * as ex from 'excalibur';
import { Engine, Actor, Color, CollisionType, SolverStrategy, vec,} from "excalibur";
// import { game, Level } from "../main";


//killing floor is the cyan reset screen, it should not be named this but it's funny to me.
export class Killingfloor extends ex.Actor {
    constructor () {
        super({
            x: 500,
            y: 200,
            width: 1000,
            height: 400,
            collisionType: ex.CollisionType.Fixed,
            color: Color.Cyan,
        });
    }
   
    }

    //actor for the reset button box
    export class Resetbuttonbox extends ex.Actor {
        constructor () {
            super({
                x: 240,
                y: 200,
                width: 80,
                height: 30,
                collisionType: ex.CollisionType.Fixed,
                color: Color.White,
               
            });
        }
        }
    //text for reset button
    export class Resetbutton extends ex.Actor {
        constructor () {
            super({
                x: 240,
                y: 200,
                width: 80,
                height: 30,
                collisionType: ex.CollisionType.Fixed,
                color: Color.White,
               
            });
        }
        }
    //exporting the actors to main so I can mess with them here instead of shoving stuff into our scene
        export const resetbutton = new Resetbutton


    //Our gameover scene containing our reset stuff
    export class GameOver extends ex.Scene {
        constructor() {
            super();
        }
        onInitialize(game: ex.Engine) {
        const killingfloor = new Killingfloor
        const resetbuttonbox = new Resetbuttonbox
        game.add(killingfloor)
        game.add(resetbuttonbox)
        game.add(resetbutton)
        
        resetbutton.graphics.use(text);
    
    
        }
    }

    //this is where I assign text to the actor
    const text = new ex.Text({
        text: 'Restart'
    });