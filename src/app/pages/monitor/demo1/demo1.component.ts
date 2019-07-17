import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.owl-carousel').owlCarousel({
      nav: false,
      items: 3,
      loop: true,
      // margin: 15,
      dots: false,
      // autoWidth: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true
    });
  }

}
