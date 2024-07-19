import { Preloader } from './scenes/preloader.scene';
import { Battle } from './scenes/battle.scene';
import { Game, type Types } from "phaser";

const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    pixelArt: true,
    backgroundColor: '#000000',
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
