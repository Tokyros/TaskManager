import {Card} from "./card";
export class List {
  constructor(private _title: string, private _cards: Array<Card> = []) {
  }

  get cards(): Array<Card> {
    return this._cards;
  }

  set cards(value: Array<Card>) {
    this._cards = value;
  }

  addCard(cardTitle: string) {
    this.cards.push(new Card(cardTitle));
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
