import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {
  age:any;
  showAge:any;
  name:any;
  names:any;
  constructor() { }

  ngOnInit(): void {

  }



  ageCalculator(){

    if(this.name,this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      this.names= this.name
    }


  }
}
