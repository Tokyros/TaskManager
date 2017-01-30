import {Component, OnInit, Input} from "@angular/core";
import {Card} from "../card";

@Component({
  selector: 'tm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() {
  }

  ngOnInit() {
  }

}
