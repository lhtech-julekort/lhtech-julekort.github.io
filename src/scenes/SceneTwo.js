import Phaser from 'phaser'
// import rikkeName from '../assets/rikkeName.png'


export default class SceneTwo extends Phaser.Scene {

      constructor() {
         super('scene-two')
      }

      preload() {
         //STATICS
         this.load.image('bgImg', 'src/assets/backgroundBigII.png');
         this.load.image('upRightBrick', 'src/assets/Brick_4.png', {frameWidth: 216, frameHeight: 131})
         this.load.image('lowRightBrick', 'src/assets/Brick_1.png', {frameWidth: 216, frameHeight: 141})
         this.load.image('upLeftBrick', 'src/assets/Brick_6.png', {frameWidth: 216, frameHeight: 131})
         this.load.image('lowLeftBrick', 'src/assets/Brick_8.png', {frameWidth: 216, frameHeight: 141})
         this.load.image('pc', 'src/assets/Computersprite.png', {frameWidth: 78, frameHeight: 51})
         this.load.image('presents', 'src/assets/presents.png', {frameWidth: 84, frameHeight: 64})
         this.load.image('smallTree', 'src/assets/smallTree.png', {frameWidth: 90, frameHeight: 156})
         this.load.image('smallTreeII', 'src/assets/smallTreeII.png', {frameWidth: 90, frameHeight: 156})
         this.load.image('rikkeName', 'src/assets/rikkeName.png')
         
         
         //ANIMATIONS
         this.load.spritesheet('marie', 'src/assets/marie.png', {frameWidth: 75, frameHeight: 125})
         this.load.spritesheet('banner', 'src/assets/banner.png', {frameWidth: 872, frameHeight: 162})
         this.load.spritesheet('anne', 'src/assets/Anne.png', {frameWidth: 105, frameHeight: 135})
         this.load.spritesheet('tree-ani', 'src/assets/TreePresents.png', {frameWidth: 208, frameHeight: 364})
         this.load.spritesheet('rasmus-ani', 'src/assets/RasmusII.png', {frameWidth: 110, frameHeight: 150})
         this.load.spritesheet('thea-ani', 'src/assets/Thea.png', {frameWidth: 78, frameHeight: 140})
         this.load.spritesheet('dion-ani', 'src/assets/DionII.png', {frameWidth: 69, frameHeight: 159})
         this.load.spritesheet('wine-chris', 'src/assets/ChristianWine.png', {frameWidth: 110, frameHeight: 150})
         this.load.spritesheet('rikke', 'src/assets/rikkeGlassesHair.png', {frameWidth: 87, frameHeight: 75}) 
         
      }

      create() {
         //IMGs
         this.add.image(0, 0, 'bgImg').setOrigin(0,0)
         this.add.image(1200, 0, 'upRightBrick').setOrigin(1, 0)
         this.add.image(1200, 800, 'lowRightBrick').setOrigin(1, 1)
         this.add.image(0, 0, 'upLeftBrick').setOrigin(0, 0)
         this.add.image(0, 800, 'lowLeftBrick').setOrigin(0, 1)
         this.add.image(1050, 320, 'smallTree')    //right
         this.add.image(1010, 370, 'pc')           //right
         this.rikke = this.add.sprite(200, 380, 'rikke').setAngle(-40)
         this.add.image(250, 400, 'smallTreeII')   //left
         this.add.image(310, 440, 'presents')      //left
         this.add.image(210, 455, 'rikkeName')
         
         
         //ANIMATIONS
         this.marieImg = this.add.sprite(520, 460, 'marie')
         this.wineChris = this.add.sprite(300, 600, 'wine-chris')
         this.banner = this.add.sprite(600, 120, 'banner')
         this.anneImg = this.add.sprite(890, 470, 'anne')
         this.treeImg = this.add.sprite(600, 500, 'tree-ani')
         this.rasmusImg = this.add.sprite(850, 600, 'rasmus-ani')
         this.theaImg = this.add.sprite(700, 585, 'thea-ani')
         this.dion = this.add.sprite(750, 400, 'dion-ani')
         

         this.anims.create({ 
            key: 'marie',
            frames: this.anims.generateFrameNumbers('marie', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         })


         this.anims.create({  //wine chris
            key: 'wine-chris',
            frames: this.anims.generateFrameNumbers('wine-chris', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         })


         this.anims.create({
            key: 'tree-ani',
            frames: this.anims.generateFrameNumbers('tree-ani', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         })
         
         this.anims.create({
            key: 'rasmus-ani',
            frames: this.anims.generateFrameNumbers('rasmus-ani', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         })

         this.anims.create({
            key: 'thea-ani',
            frames: this.anims.generateFrameNumbers('thea-ani', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         })
         
         this.anims.create({
            key: 'dion-ani',
            frames: this.anims.generateFrameNumbers('dion-ani', {start: 0, end: 3}),
            frameRate: 1.9,
            repeat: -1
         })
         
         this.anims.create({
            key: 'banner',
            frames: this.anims.generateFrameNumbers('banner', {start: 0, end: 1}),
            frameRate: 2.5,
            repeat: -1
         })

         this.anims.create({
            key: 'anne',
            frames: this.anims.generateFrameNumbers('anne', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
         })

         this.anims.create({ 
            key: 'rikke',
            frames: this.anims.generateFrameNumbers('rikke', {start: 0, end: 1}),
            frameRate: 2.5,
            repeat: -1
         })



         this.marieImg.play('marie')
         this.wineChris.play('wine-chris')
         this.treeImg.play('tree-ani')
         this.rasmusImg.play('rasmus-ani')
         this.theaImg.play('thea-ani')
         this.dion.play('dion-ani')
         this.anneImg.play('anne')
         this.banner.play('banner')
         this.rikke.play('rikke')


      }
      

}