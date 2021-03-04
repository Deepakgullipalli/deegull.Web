import { Component, OnInit,OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnDestroy {
  subscription: Subscription;
  entityId: string;
  constructor(private testService: TestService) {
    this.subscription = this.testService.getMessage().subscribe(message => { this.entityId = message; });
   }
    
  ngOnInit(): void {
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
