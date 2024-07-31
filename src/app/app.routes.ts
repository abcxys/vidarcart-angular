import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PlankSizeListComponent} from "./plankSizeList/plank-size-list/plank-size-list.component";

export const routes: Routes = [
  {path: "plankSizes", component: PlankSizeListComponent},
  {path: "**", component: AppComponent}
];
