import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HomepageComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Vidar Design Flooring';
  subtitle = 'Which on do you want?';
}
