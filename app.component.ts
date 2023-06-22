import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('signin', style({ transform: 'translateX(0px)' })),
      state('signup', style({ transform: 'translateX(-425px)' })),
      transition('signin <=> signup', animate('0.5s ease-in-out'))
    ])
  ]
})
export class AppComponent {
  formState: 'signin' | 'signup' = 'signin';

  changeFormState(state: 'signin' | 'signup') {
    this.formState = state;
  }
}



 

