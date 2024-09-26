import * as ex from 'excalibur';
import cathedralSkyline from "./images/cathedralSkyline.png";
import citySkyline from "./images/citySkyline.png";
import cloudscape1 from "./images/Cloudscape1.png";
import cloudscape2 from "./images/Cloudscape2.png";
import cloudscape3 from "./images/Cloudscape3.png";
import cloudscape4 from "./images/Cloudscape4.png";
//import panther from "./images/panthertiny.png";
import playerSpriteSheetFile from './images/playerSheet.png';

const Resources = {
  //Panther: new ex.ImageSource(panther),
  player: new ex.ImageSource(playerSpriteSheetFile),
  // jump: new Sound('/res/sfx/jump.wav'),
  cathedralSkyline: new ex.ImageSource(cathedralSkyline),
  citySkyline: new ex.ImageSource(citySkyline),
  Skyline1: new ex.ImageSource(cloudscape1),
  Skyline2: new ex.ImageSource(cloudscape2),
  Skyline3: new ex.ImageSource(cloudscape3),
  Skyline4: new ex.ImageSource(cloudscape4),
} as const;

const loader = new ex.Loader();


const playerSpriteSheet = ex.SpriteSheet.fromImageSource({
  image:Resources.player, 
  grid: { 
      columns: 6,
      rows: 1, 
      spriteWidth: 39,
      spriteHeight: 34
  }
});

for (const res in Resources) {
  loader.addResource((Resources as any)[res]);
}

export {Resources, loader, playerSpriteSheet};