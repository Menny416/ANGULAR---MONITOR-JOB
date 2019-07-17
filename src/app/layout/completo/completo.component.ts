import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare function init_plugins();
declare function fixWrapperHeight();
declare function setBodySmall();
declare var $: any;

@Component({
  selector: 'app-completo',
  templateUrl: './completo.component.html',
  styleUrls: ['./completo.component.css']
})
export class CompletoComponent implements OnInit {

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activarFullScreenPanel();
        this.activarShowHidePanel();
        this.activarAnimaciones();
      }
    });
  }

  ngOnInit() {
    init_plugins();
    fixWrapperHeight();
    setBodySmall();
  }

  activarFullScreenPanel() {
    // Fullscreen for fullscreen hpanel
    $('.fullscreen').off('click');
    $('.fullscreen').on('click', function() {
      var hpanel = $(this).closest('div.hpanel');
      var icon = $(this).find('i:first');
      $('body').toggleClass('fullscreen-panel-mode');
      icon.toggleClass('fa-expand').toggleClass('fa-compress');
      hpanel.toggleClass('fullscreen');
      setTimeout(function() {
          $(window).trigger('resize');
      }, 100);
    });
    $('body').addClass('hide-sidebar');
  }

  activarShowHidePanel() {
     // Function for collapse hpanel
     $('.showhide').off('click');
     $('.showhide').on('click', function(event) {
      event.preventDefault();
      var hpanel = $(this).closest('div.hpanel');
      var icon = $(this).find('i:first');
      var body = hpanel.find('div.panel-body');
      var footer = hpanel.find('div.panel-footer');
      body.slideToggle(300);
      footer.slideToggle(200);
      // Toggle icon from up to down
      icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
      hpanel.toggleClass('').toggleClass('panel-collapse');
      setTimeout(() => {
          hpanel.resize();
          hpanel.find('[id^=map-]').resize();
      }, 50);
    });

  }

  activarAnimaciones() {
    // Initialize animate panel function
    $('.animate-panel').animatePanel();
  }

}
