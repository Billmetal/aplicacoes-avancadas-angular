import { ComponentFixture, TestBed } from "@angular/core/testing";
import { listInitialState } from "../state/list.reducer";
import { ListComponent } from "./list.component";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { initialState } from "src/app/tasks-to-do/state/app.reducer";
import { By } from "@angular/platform-browser";
import * as fromListActions from "../state/list.actions";

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;
    let store: MockStore<any>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [

            ],
            declarations: [
                ListComponent
            ],
            providers: [
                provideMockStore({ initialState: {list: listInitialState} })
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;

        store = TestBed.inject(MockStore);

        fixture.detectChanges();
    });

    it('should create',() => {
        expect(component).toBeTruthy();
    });

    it('should show loading indicator',() => {
        store.setState({
            list: {
                ...initialState,
                loading: true
            }
        });
        fixture.detectChanges();

        const loading = fixture.debugElement.query(By.css('span'));

        expect(loading).toBeTruthy();
    });

    it('should dispatch removeTodo action',() => {
        spyOn(store,'dispatch');

        component.onDelete(123);

        expect(store.dispatch).toHaveBeenCalledWith(fromListActions.removeTodo({ id: 123 }));
    });
});