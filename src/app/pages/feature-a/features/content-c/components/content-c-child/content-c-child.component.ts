import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ContentCService } from "../../services/content-c.service";

@Component({
    selector: 'app-content-c-child',
    templateUrl: './content-c-child.component.html',
    styleUrls: ['./content-c-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentCChildComponent {

    @Input() counter: number = 0;
    @Output() inc = new EventEmitter();
    @Output() dec = new EventEmitter();

    incClick(){
        this.inc.emit();
    }

    decClick(){
        this.dec.emit();
    }

}