import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/tasks-to-do/shared/models/todo.model";
import * as fromListActions from "./list.actions";

export interface ListState {
    entities: Todo[];
    loading: boolean;
    loadinMore: boolean;
    error: boolean;
    page: number;
}

export const listInitialState: ListState = {
    entities: [],
    loading: false,
    loadinMore: false,
    error: false,
    page: 0
};

export const reducer = createReducer(
    listInitialState,
    on(fromListActions.loadListFromLastTodos,fromListActions.loadListFromList,state => ({
        ...state,
        entities: [],
        loading: true,
        page: 0,
        error: false
    })),
    on(fromListActions.loadMore, state => ({
        ...state,
        loadingMore: true,
        page: state.page + 1,
        error: false
    })),
    on(fromListActions.loadListSuccess,(state,{ entities }) => ({
        ...state,
        entities: [...state.entities, ...entities],
        loading: false,
        error: false
    })),
    on(fromListActions.loadListFailure,state  => ({
        ...state,
        loading: false,
        error: true
    }))
);

export function listReducer(state: ListState | undefined, action: Action){
    return reducer(state,action);
}