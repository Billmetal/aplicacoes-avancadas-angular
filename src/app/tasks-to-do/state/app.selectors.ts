import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

export const selectUserContext = createFeatureSelector('userContext').call; 

export const selectUserName = createSelector(
    selectUserContext,
    (state: AppState) => state.user.name
);