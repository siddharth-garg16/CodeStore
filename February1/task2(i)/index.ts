//abstraction and abstract classes in ts
//Abstraction is a method of modelling objects in a system that separates the responsibilities of the class or type from the code that inherits it. 

abstract class ClickPhoto {
    constructor(
        public aspectRatio:string,
    ){}

    abstract getBlackAndWhite():void
}

class CameraApp extends ClickPhoto {
    constructor(
        public aspectRatio:string,
        public renderSizeValue:number
    ){
        super(aspectRatio);
        this.renderSizeValue = renderSizeValue;
    }

    getBlackAndWhite(): void {
        console.log("A photo of aspect ratio " + this.aspectRatio + " and with B&W filter was clicked with render size value of " + this.renderSizeValue);
    }
}

let camObj = new CameraApp("16:8", 75);
camObj.getBlackAndWhite();