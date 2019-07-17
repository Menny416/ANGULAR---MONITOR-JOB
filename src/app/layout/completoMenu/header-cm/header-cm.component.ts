import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-cm',
  templateUrl: './header-cm.component.html',
  styleUrls: ['./header-cm.component.css']
})
export class HeaderCMComponent implements OnInit {
  sigla: any;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sigla = JSON.parse( localStorage.getItem('mtxuser'));
    }, 1000);
  }


}
