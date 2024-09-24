import * as ex from 'excalibur';
import panther from "./images/panthertiny.png";

export const Resources = {
  Panther: new ex.ImageSource(panther),
  // jump: new Sound('/res/sfx/jump.wav'),
} as const;

export const loader = new ex.Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}