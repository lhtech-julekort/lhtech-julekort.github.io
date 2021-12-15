import Phaser from 'phaser'
export default class GreetScene extends Phaser.Scene {

   constructor() {
      super('greet-scene');
   }

   preload() {
      this.load.spritesheet('legoBtn-anim', 'src/assets/LegoBtnSprite.png', {frameWidth: 216, frameHeight: 132});
      this.load.bitmapFont('gbfont', 'src/assets/fonts/gbfont.png', 'src/assets/fonts/gbfont.xml')
      this.load.image('logoTech', 'src/assets/logoTech.png', {frameWidth: 400, frameHeight: 180})
   } 
   create() {
      this.label = this.add.bitmapText(310, 100, 'gbfont', '', 24)
      this.typewriteText('This message is brought to you by:')
      this.btn = this.add.sprite(600, 600, 'legoBtn-anim')
      
      this.anims.create( {
         key: "legoBtn-anim",
         frames: this.anims.generateFrameNumbers('legoBtn-anim', {start: 0, end: 3}),
         frameRate: 15,
         repeat: 0
      });
      
      this.btn.setInteractive()
      this.btn.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
         this.btn.play('legoBtn-anim')
         this.btn.on('animationcomplete', () => {
            this.cameras.main.fadeOut(2000, 0, 0, 0)
         })
      })

      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
         this.scene.start('scene-two')
      })
   }


   update() { }

   typewriteText(text) {
      this.label.setText(text);
      this.label.setText('');

      const length = text.length
      let i = 0
      this.time.addEvent({
         callback: () => {
            this.label.text += text[i]
            ++i
            if(i >= length) {
               this.showLogo('logoTech')
            }
         },
         repeat: length -1,
         delay: 80
      });
   }

   showLogo(imgKey) {
         this.time.addEvent({
            delay: 900,
            callback: () => {
               this.add.image(600, 300, imgKey).setScale(1.5)
            },
         })
      }

      showButtonAndText() {
         this.time.addEvent({
            delay: 900,
            callback: () => {
               this.add.text(600, 550, 'Click the button to proceed')
               this.add.sprite(600, 600, 'legoBtn-anim')
            }
         })
      }

   //showImage-metode her
}
