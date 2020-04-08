import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-lte-angular';
  sideBarOpened: boolean = false;



  toggleSideBar() {
    this.sideBarOpened = !this.sideBarOpened;
  }

}
