import { Scene } from 'phaser';
import { SCENE_KEYS } from '@/constants/scene.keys';
import { BATTLE_BACKGROUND_KEYS } from '@/constants/battle-backgrounds.keys';
import ForestBackground from '@assets/BattleBackground.png';

export class Battle extends Scene {
    constructor() {
        super(SCENE_KEYS.BATTLE);
    }

    preload() {
        console.log('Battle scene: preload started');
        this.load.image(BATTLE_BACKGROUND_KEYS.FOREST, ForestBackground);
        console.log('Battle scene: preload complete');
    }

    create() {
        console.log('Battle scene: create started');
        this.add.image(0, 0, BATTLE_BACKGROUND_KEYS.FOREST).setOrigin(0, 0);
        console.log('Battle scene: create complete');
    }

}
