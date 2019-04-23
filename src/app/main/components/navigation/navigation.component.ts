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

  showMenu(trigger) {
      if(this.triggers)
        this.triggers.forEach(element => {
          if (element != trigger)
            element.closeMenu();
        });
      console.log(trigger);
      trigger.openMenu();
  }

  clearAll(){
    this.triggers.forEach(elem => elem.closeMenu());
  }

  closeMenu(trigger) {
    console.log(trigger);
    trigger.closeMenu();
  }

  ngOnInit() {
  }

}
