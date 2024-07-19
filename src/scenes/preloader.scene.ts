import { Scene } from 'phaser';
import { SCENE_KEYS } from '@/constants/scene.keys';

export class Preloader extends Scene {
    constructor() {
        super(SCENE_KEYS.PRELOADER);
    }

    preload() {
        console.log('Preloader scene: preload started');
        this.load.image('logo', 'assets/logo.png');
        console.log('Preloader scene: preload complete');
    }

    create() {
        console.log('Preloader scene: create started');
        this.scene.start(SCENE_KEYS.BATTLE);
        console.log('Preloader scene: create complete');
    }

}
