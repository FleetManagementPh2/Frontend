import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

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
