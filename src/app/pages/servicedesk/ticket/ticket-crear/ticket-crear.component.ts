import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ListasService } from 'src/app/services/listas.service';

declare var $: any;


@Component({
  selector: 'app-ticket-crear',
  templateUrl: './ticket-crear.component.html',
  styleUrls: ['./ticket-crear.component.css']
})
export class TicketCrearComponent implements OnInit {
  keyword = 'nombre';
  data = [ ];
  constructor(private ngxLoader: NgxUiLoaderService,
              private listas: ListasService) { }

  ngOnInit() {
    $('.smncm').summernote({
      height: 250
    });

  }

  generarTicket() {
    this.ngxLoader.startLoader('loader-01');
    setTimeout(() => {
      this.ngxLoader.stopLoader('loader-01');
    }, 25000);
  }
  selectEvent(item) {
    // do something with selected item
    console.log(item);
  }

  onChangeSearch(val: string) {
    this.listas.consultarSigla(val)
    .subscribe((res: any) => {
      this.data = res.UserTumbnail;
      console.log(res);
      $('.autocomplete-container').prop('', '');
    });
  }
  
  onFocused(e){
    // do something when input is focused
  }
}
