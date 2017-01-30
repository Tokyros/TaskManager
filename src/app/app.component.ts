import {Component} from "@angular/core";
import {Board} from "./board";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

export class TasksData {
  private _boards: Array<Board> = [];


  get boards(): Array<Board> {
    return this._boards;
  }

  set boards(value: Array<Board>) {
    this._boards = value;
  }

  addBoard(title: string) {
    this._boards.push(new Board(title));
  }

  removeBoard(board: Board) {
    this._boards.splice(this._boards.indexOf(board), 1);
  }

  activateBoardByName(boardNameToActivate: string) {
    for (var i = 0; i < this._boards.length; i++) {
      var board = this._boards[i];
      console.log(`checking - ${board.title}`);
      board.isActive = board.title === boardNameToActivate;
    }
  }

  activateBoard(boardToActivate: Board) {
    for (var i = 0; i < this._boards.length; i++) {
      var board = this._boards[i];
      if (board === boardToActivate) {
        board.isActive = true;
      } else {
        board.isActive = false;
      }
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [TasksData]
})
export class AppComponent {

  constructor(public taskBoards: TasksData, private modalService: NgbModal) {
    taskBoards.addBoard("New Board");
    taskBoards.boards[0].isActive = true;
    taskBoards.boards[0].addList("New List");
    taskBoards.boards[0].lists[0].addCard("New Card");
  }

  addNewBoard(newBoardTitle: string) {
    this.taskBoards.addBoard(newBoardTitle);
  }

  removeBoard(board: Board) {
    this.taskBoards.removeBoard(board);
  }

  activateBoard(board: Board) {
    this.taskBoards.activateBoard(board);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    })
  }
}
