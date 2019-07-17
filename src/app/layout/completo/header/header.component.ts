import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sigla: any;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sigla = JSON.parse( localStorage.getItem('mtxuser'));
    }, 1000);
  }

}
