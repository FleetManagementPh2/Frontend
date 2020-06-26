import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    $(document).ready(function() {
        $('#togglebtn').on("click", function() {
            $("#mainNav").toggleClass("navtoggle");
            $(".copyright").toggleClass("copyright-small");
        });
    });

  }

}
