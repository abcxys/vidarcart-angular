// homepage.component.ts

import {Component} from "@angular/core";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  standalone: true,
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  title = 'Vidar Design Flooring';
  subtitle = 'Which one do you want?';
}
