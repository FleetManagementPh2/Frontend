import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

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
