import {Component, Input} from "@angular/core";
import {List} from "../list";

@Component({
  selector: 'tm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() list: List;
  private newCardMode: boolean = false;

  constructor() {
  }

  addNewCard(cardName: string) {
    this.list.addCard(cardName);
    this.newCardMode = false;
  }

}
