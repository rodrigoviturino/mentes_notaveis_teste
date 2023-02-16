import  { Manufacturer } from './Class/Manufacturer.js';
import { OvenGlass } from './Class/OvenGlass.js';
import { Lighter } from './Class/Lighter.js';
import { Stove } from './Class/Stove.js';

// const manufacturer = new Manufacturer('black', 1.5, 2,'feira do rolo');
// console.log(manufacturer.getManufacturer());

const lighters = [];
lighters.push(new Lighter('black'));
lighters.push(new Lighter('red'));
lighters.push(new Lighter('white'));
lighters.push(new Lighter('purple'));
lighters.push(new Lighter('yellow'));

const ovenGlass = new OvenGlass(10, 20);
const stove = new Stove('white', 100,10,'electrolux', 4,1, lighters, 1,1, ovenGlass );
console.log(stove.getStoveSpecifications());
// let fabricante = new Fabricante("#table-dev");
