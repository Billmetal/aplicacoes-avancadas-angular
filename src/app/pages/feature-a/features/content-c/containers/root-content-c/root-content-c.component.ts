import { Component, DoCheck, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { ContentCChildComponent } from "../../components/content-c-child/content-c-child.component";
import { ContentCService } from "../../services/content-c.service";

@Component({
    selector: 'app-root-content-c',
    templateUrl: './root-content-c.component.html',
    styleUrls: ['./root-content-c.component.scss']
})
export class RootContentCComponent implements DoCheck{

    @ViewChild(ContentCChildComponent,{ static: false }) child: ContentCChildComponent = new ContentCChildComponent;

    counter = 0;

    ngDoCheck(): void {
        if(!!this.child){
            console.log(`Parent counter: ${ this.counter }; Child counter: ${ this.child.counter }`);
        }
    }

    handleInc(){
        this.counter++;
    }

    handleDec(){
        this.counter--;
    }

}