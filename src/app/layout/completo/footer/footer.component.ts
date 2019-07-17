import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  sigla: any;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sigla = JSON.parse( localStorage.getItem('mtxuser'));
    }, 1000);
  }

}
