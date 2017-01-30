import {Component, Input} from "@angular/core";
import {List} from "../list";

@Component({
  selector: 'tm-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() board;
  private newListMode: boolean = false;

  constructor() {
  }

  addNewList(listTitle: string) {
    this.board.addList(listTitle);
    this.newListMode = false;
  }

  removeList(list: List) {
    this.board.removeList(list);
  }

}
