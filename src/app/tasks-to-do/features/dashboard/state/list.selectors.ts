import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ListState } from "./list.reducer";

export const selectListState = createFeatureSelector('list').call;

export const selectListEntities = createSelector(
    selectListState,
    (state: ListState) => state.entities
);

export const selectListLoading = createSelector(
    selectListState,
    (state: ListState) => state.loading
);

export const selectListLoadingMore = createSelector(
    selectListState,
    (state: ListState) => state.loadinMore
);

export const selectListError = createSelector(
    selectListState,
    (state: ListState) => state.error
);

export const selectListPage = createSelector(
    selectListState,
    (state: ListState) => state.page
);