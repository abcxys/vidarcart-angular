import {Component, OnInit} from '@angular/core';
import { PlankSize} from "../../core/plank-size";
import { PlankSizeService} from "../../service/plank-size.service";

@Component({
  selector: 'app-plank-size-list',
  standalone: true,
  imports: [],
  templateUrl: './plank-size-list.component.html',
  styleUrl: './plank-size-list.component.scss'
})
export class PlankSizeListComponent implements OnInit{

  plankSizes: PlankSize[];

  constructor(private plankSizeService: PlankSizeService){

  }
  ngOnInit(){
    this.plankSizeService.findAll().subscribe(data => {
      this.plankSizes = data;
    });
  }

}
