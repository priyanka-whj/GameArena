class Player2
{
    constructor(x, y, width, height)
    {         
        this.rectX = x;
        this.rectY = y;
        this.rectW = width;
        this.rectH = height;
        this.rect = createSprite(this.rectX, this.rectY, this.rectW, this.rectH);
        this.rect.addImage(player2Img);
        this.rect.scale = 0.1;
    }
    moveUp()
    {
        this.rect.y = this.rect.y - 2;
    }
    moveDown()
    {
        this.rect.y = this.rect.y + 2;
    }
    moveLeft()
    {
        this.rect.x = this.rect.x - 2;
    }
    moveRight()
    {
        this.rect.x = this.rect.x + 2;
    }
};