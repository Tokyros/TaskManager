import {List} from "./list";
export class Board {
  private _lists: Array<List> = [];

  constructor(private _title: string = "Default Title", private _isActive: boolean = false) {
  }


  get lists(): Array<List> {
    return this._lists;
  }

  set lists(value: Array<List>) {
    this._lists = value;
  }

  removeList(listToRemove: List) {
    for (var i = 0; i < this._lists.length; i++) {
      var list = this._lists[i];
      if (list === listToRemove) {
        this._lists.splice(this._lists.indexOf(list), 1);
      }
    }
  }

  addList(listTitle: string) {
    this._lists.push(new List(listTitle));
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

}
