export class Manufacturer {
  color;
  height;
  width;
  brand;

  constructor(color, height, width, brand){
    this.color = color;
    this.height = height;
    this.width = width;
    this.brand = brand;
  }

  getFabricante(){
    return `
      color: ${this.color ? $this.color : 'Color Not specified'},
      height: ${this.height ? $this.height : 'Height Not specified'},
      width: ${this.width ? $this.width : 'Width Not specified'},
      brand: ${this.brand ? $this.brand : 'Brand Not specified'}
    `;
  }

}