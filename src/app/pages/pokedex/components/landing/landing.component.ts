import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngkdx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public searchTerm: string;

  constructor() { }

  ngOnInit(): void {
  }

}
