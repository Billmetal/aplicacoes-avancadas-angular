import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Todo } from "src/app/tasks-to-do/shared/models/todo.model";
import { AppState } from "src/app/tasks-to-do/state/app.reducer";
import * as fromListSelectors from "../state/list.selectors";
import * as fromListActions from "../state/list.actions";

@Component({
    selector: 'lv-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

    list$!: Observable<Todo[]>;
    loading$!: Observable<boolean>;
    loadingMore$!: Observable<boolean>;

    shouldShowLoadingIndicator$!: Observable<boolean>;

    constructor(private store: Store<AppState>){

    }

    ngOnInit(){
        this.store.dispatch(fromListActions.loadListFromList());

        this.list$ = this.store.pipe(select(fromListSelectors.selectListEntities));
        this.loading$ = this.store.pipe(select(fromListSelectors.selectListLoading));
        this.loadingMore$ = this.store.pipe(select(fromListSelectors.selectListLoadingMore));

        this.shouldShowLoadingIndicator$ = combineLatest([
            this.loading$,
            this.loadingMore$
        ]).pipe(
            map(([loading,loadingMore]) => loading || loadingMore)
        );
    }

    markAsDone(id: number){
            
    }

    onDelete(id: number){
        this.store.dispatch(fromListActions.removeTodo({id}));
    }

    loadMore(){
       this.store.dispatch(fromListActions.loadMore());
    }
}