import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/tasks-to-do/shared/models/todo.model";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/tasks-to-do/state/app.reducer";
import * as fromListAction from "../state/list.actions";
import * as fromListSelectors from "../state/list.selectors";
import { Observable } from "rxjs";

@Component({
    selector: 'jv-last-todos',
    templateUrl: './last-todos.component.html',
    styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit{

    list$!: Observable<Todo[]>;
    loading$!: Observable<boolean>

    constructor(private store: Store<AppState>) {

    }

    ngOnInit(){
        this.store.dispatch(fromListAction.loadListFromLastTodos());
        this.list$ = this.store.pipe(select(fromListSelectors.selectListEntities));
        this.loading$ = this.store.pipe(select(fromListSelectors.selectListLoading));
    }

    markAsDone(id: number) {

    }
}