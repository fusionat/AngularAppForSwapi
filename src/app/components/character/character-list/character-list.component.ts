
import { Component, OnInit } from "@angular/core";
import { BaseModel } from './../../../models/base.model';
import { Character } from "../../../models/characters";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../reducers/index";
import { LoadCharacters } from "../../../actions/people.actions";
import { Observable } from "rxjs";
import {
  getCharacters,
  getCharacterByName
} from "../../../selectors/characters.selector";
import { GroupModels } from './../../../models/group-models.model';

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"]
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<GroupModels<BaseModel>> = this.store.pipe(select(getCharacters));
  character$: Observable<Character> = this.store.pipe(
    select(getCharacterByName, { name: "Luke Skywalker" })
  );
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onClick() {
    this.store.dispatch(new LoadCharacters());
  }
}
