import { Manufacturer  } from "./Manufacturer.js";

class Stove extends Manufacturer {
  stoves;
  oven;
  lighters;
  ovenLamp;
  ovenLampButton;
  ovenGlass;
  brand;

  constructor(color, height, width, brand, stoves, oven, lighters, ovenLamp, ovenLampButton, ovenGlass){
    super(color, height, width, brand);

    this.stoves = stoves;
    this.oven = oven;
    this.lighters = lighters;
    this.ovenLamp = ovenLamp;
    this.ovenLampButton = ovenLampButton;
    this.ovenGlass = ovenGlass;

  }

};