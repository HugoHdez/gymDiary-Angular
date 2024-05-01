import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import {LogOutButtonComponent} from "../log-out-button/log-out-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavComponent,
    LogOutButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}


