import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { Todo } from "src/app/tasks-to-do/shared/models/todo.model";
import { TodosService } from "src/app/tasks-to-do/shared/services/todos.service";
import { AppState } from "src/app/tasks-to-do/state/app.reducer";
import * as fromListActions from "./list.actions";
import * as fromListSelectors from "./list.selectors";

@Injectable()
export class ListEffects {

    loadList$ = createEffect(() => this.actions$.pipe(
        ofType(
            fromListActions.loadListFromLastTodos,
            fromListActions.loadListFromList,
            fromListActions.loadMore
        ),
        withLatestFrom(
            this.store.pipe(select(fromListSelectors.selectListEntities)),
            this.store.pipe(select(fromListSelectors.selectListPage))
        ),
        mergeMap(([,entities,page]) => {
            if(page === 0 && entities.length >= 10){
                return of(fromListActions.notifyHydrated());
            }
            return this.todosService.getList(page).pipe(
                map(entities => fromListActions.loadListSuccess({ entities })),
                catchError(() => of(fromListActions.loadListFailure()))
            ); 
        })
    ));

    createTodos$ = createEffect(() => this.actions$.pipe(
        ofType(fromListActions.createTodo),
        mergeMap(prop => this.todosService.create(prop.prop).pipe(
            map(todo => fromListActions.createTodoSuccess({ todo })),
            catchError(() => of(fromListActions.createTodoFailure()))
        )
    )));

    removeTodo$ = createEffect(() => this.actions$.pipe(
        ofType(fromListActions.removeTodo),
        mergeMap(({ id }) => this.todosService.remove(id).pipe(
            map(() => fromListActions.removeTodoSuccess({ id })),
            catchError(() => of(fromListActions.removeTodoFailure()))
        ))
    ));

    constructor(private actions$: Actions,
                private todosService: TodosService,
                private store: Store<AppState>){

    }
}