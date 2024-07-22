import { Scene } from 'phaser';
import { SCENE_KEYS } from '@/constants/scene.keys';
import { MONSTER_KEYS } from '@/constants/monster.keys';
import { BATTLE_BACKGROUND_KEYS } from '@/constants/battle-backgrounds.keys';


import ForestBackground from '@assets/BattleBackground.png';

import BulbasaurBack from '@assets/monsters/back/BULBASAUR.png';
import CharmanderBack from '@assets/monsters/back/CHARMANDER.png';
import SquirtleBack from '@assets/monsters/back/SQUIRTLE.png';

import BulbasaurFront from '@assets/monsters/front/BULBASAUR.png';
import CharmanderFront from '@assets/monsters/front/CHARMANDER.png';
import SquirtleFront from '@assets/monsters/front/SQUIRTLE.png';

export class Battle extends Scene {
    constructor() {
        super({
            key: SCENE_KEYS.BATTLE,
        });
    }

    preload() {
        console.log('Battle scene: preload started');

        this.load.on('progress', (progress: number) => {
            const currentTime = performance.now();
            console.log(`Progress: ${Math.round(progress * 100)}% at ${currentTime.toFixed(3)} ms`);
        });

        this.load.image(BATTLE_BACKGROUND_KEYS.FOREST, ForestBackground);

        this.load.image(`${MONSTER_KEYS.BULBASAUR}:BACK`, BulbasaurBack);
        this.load.image(`${MONSTER_KEYS.CHARMANDER}:BACK`, CharmanderBack);
        this.load.image(`${MONSTER_KEYS.SQUIRTLE}:BACK`, SquirtleBack);

        this.load.image(`${MONSTER_KEYS.BULBASAUR}:FRONT`, BulbasaurFront);
        this.load.image(`${MONSTER_KEYS.CHARMANDER}:FRONT`, CharmanderFront);
        this.load.image(`${MONSTER_KEYS.SQUIRTLE}:FRONT`, SquirtleFront);


        console.log('Battle scene: preload complete');
    }

    create() {
        this.add.image(this.scale.width / 2, this.scale.height / 2, BATTLE_BACKGROUND_KEYS.FOREST).setOrigin(0.5, 0.5)
        console.log(this.scale.width, this.scale.height)
        this.add.image(100, 100, `${MONSTER_KEYS.BULBASAUR}:BACK`).setOrigin(0.5, 0.5)
        this.add.image(300, 100, `${MONSTER_KEYS.CHARMANDER}:FRONT`).setOrigin(0.5, 0.5)
        const graphics = this.add.graphics();

        const tileSize = 64; // Each tile is 4x4 pixels (since 32x32 board with 8x8 tiles)

        // Loop to draw the chessboard
        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 20; col++) {
                const color = (row + col) % 2 === 0 ? 0xffffff : 0x000000; // Alternate colors
                graphics.fillStyle(color, 1.0);
                graphics.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
            }
        }

    }

}
