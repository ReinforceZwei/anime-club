import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(e){
    alert("We have received your application.");
    return false;
  }
}
