import { Component, OnInit } from '@angular/core';

import{ViewChild} from'@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('myCarousel', { static: false })
  myCarousel!: any;

  title = 'Single Page Portfolio';
  slides:number;
  slideSize:number = 375;

  constructor(){
    //the slider library isn't natively responsive
    //So this code is fixes that
    this.slides = (window.innerWidth > 1024)? 3 : 1;
    this.slideSize = (window.innerWidth > 1024)? 275 : 375;
  }
  ngOnInit(): void {
      
  }

  next(){
    this.myCarousel.next();
  }

  prev(){
    this.myCarousel.prev();
  }
}
