class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        //this.load.setBaseURL('https://labs.phaser.io');

        this.load.image('sky', './Background/milky-way.jpg');
        this.load.image('link', './Background/link.png');
        this.load.image('logo', './Img/YOUi.png');
        this.load.image('red', './Img/particle.png');
        this.load.image('ab', './Img/ab.png');
        this.load.image('bb', './Img/bb.png');
        this.load.image('xb', './Img/xb.png');
        this.load.image('yb', './Img/yb.png');
        this.load.image('da', './Img/da.png');
        this.load.image('ua', './Img/ua.png');
        this.load.image('la', './Img/la.png');
        this.load.image('ra', './Img/ra.png');
        this.load.image('back', './Img/back.png');
        this.load.image('start', './Img/start.png');
        this.load.image('home', './Img/home.png');
    }

    create ()
{
    this.add.image(640, 360, 'sky');

    /*const particles = this.add.particles(0, 0, 'red', {
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    particles.startFollow(logo);*/
}
}
const config = {
		width: 1280,
        height: 720,
        // Sets game scaling
        scale: {
            // Fit to window
            mode: Phaser.Scale.FIT,
            // Center vertically and horizontally
            autoCenter: Phaser.Scale.CENTER_BOTH
		},
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: Example
};
const game = new Phaser.Game(config);
