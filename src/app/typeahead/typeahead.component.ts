import { Component, Optional, Self } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl} from "@angular/forms";
import { autocomplete } from "./typeahead.utils";

@Component({
    selector: 'jv-typeahead',
    templateUrl: './typeahead.component.html',
    styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements ControlValueAccessor{

    control = new FormControl('');
    disabled!: boolean;
    private onChange!: (value: string) => void;
    private onTouched!: () => void;

    constructor(@Optional() @Self() ngControl: NgControl){
        ngControl.valueAccessor = this;

        ngControl.control;
    }

    writeValue(value: string): void {
        this.control.setValue(value);
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean){
       if(isDisabled){
            this.control.disable();
       } else {
            this.control.enable();
       }
    }

    onSelect(value: string){
        this.onChange(value);
    }

    onFocus(){
        this.onTouched();
    }

    get filteredStates(): string[] {
        return !!this.control.value ? autocomplete(this.control.value) : [];
    }
}