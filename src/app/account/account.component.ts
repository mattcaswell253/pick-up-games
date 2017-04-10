import { Component } from '@angular/core';
import { AuthPortComponent } from 'angular-stormpath';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent extends AuthPortComponent {

}
