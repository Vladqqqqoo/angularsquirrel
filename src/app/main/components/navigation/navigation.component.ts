import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatMenuTrigger} from "@angular/material";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss',
    '../../../grid.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  @ViewChildren(MatMenuTrigger) private triggers: QueryList<MatMenuTrigger>;


  ngOnInit() {
  }

}
