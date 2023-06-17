export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  makeNoise(sound = "loud noise") {
    console.log(sound);
  }
}
