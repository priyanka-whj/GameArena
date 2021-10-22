class Player1
{
    constructor(x, y, width, height)
    {         
        this.rectX = x;
        this.rectY = y;
        this.rectW = width;
        this.rectH = height;
        this.rect = createSprite(this.rectX, this.rectY, this.rectW, this.rectH);
        this.rect.addImage(player1Img);
        this.rect.scale = 0.1;
    }
};