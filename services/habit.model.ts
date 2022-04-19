export default class Habit {
  thumbnail: string;
  constructor(public id: number, public name: string, public image: string, public couleur: string) {
    this.thumbnail = image + '/preview';
  }
}

