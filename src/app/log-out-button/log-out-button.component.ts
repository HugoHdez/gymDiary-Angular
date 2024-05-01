import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-log-out-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './log-out-button.component.html',
  styleUrl: './log-out-button.component.css'
})
export class LogOutButtonComponent {

}
