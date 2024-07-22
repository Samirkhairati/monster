import { Preloader } from './scenes/preloader.scene';
import { Battle } from './scenes/battle.scene';
import { Game, type Types } from "phaser";

const config: Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: 1024,
    height: 768,
    parent: 'game-container',
    pixelArt: false,
    backgroundColor: '#fff',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Preloader,
        Battle
    ]
};

export default new Game(config);
