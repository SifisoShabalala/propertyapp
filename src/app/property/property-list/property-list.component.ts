import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
    "Id": 1,
    "Name": "Bria House",
    "Type": "House",
    "Price": 12000
  },
  {
    "Id": 2,
    "Name": "Erose Villa",
    "Type": "Villa",
    "Price": 12500
  },
  {
    "Id": 3,
    "Name": "Macro Home",
    "Type": "House",
    "Price": 5000
  },
  {
    "Id": 4,
    "Name": "Sifiso's House",
    "Type": "Town House",
    "Price": 16000
  },
  {
    "Id": 5,
    "Name": "Pearl White House",
    "Type": "House",
    "Price": 20000
  },
  {
    "Id": 6,
    "Name": "Sanele",
    "Type": "House",
    "Price": 15000
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
