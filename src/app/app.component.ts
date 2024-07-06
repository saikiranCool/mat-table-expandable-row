import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent {
  title = 'expandable-row';
  columnsToDisplay: string[] = ['name', 'age', 'class'];
  dataSource = new MatTableDataSource<studentData>(ELEMENT_DATA);
  expandedElement: studentData | null | undefined;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  ngOnInit() {

  }
}
//Columns data types
export interface studentData {
  name: string;
  age: number;
  class: string;
  description: string;
}
const ELEMENT_DATA: studentData[] = [
  {
    name: 'Sai',
    age: 15,
    class: '9th',
    description: `Sai, a diligent student currently in the 9th grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  }, {
    name: 'Kiran',
    age: 15,
    class: '8th',
    description: `Kiran, a diligent student currently in the 8th grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  }, {
    name: 'Sita',
    age: 14,
    class: '8th',
    description: `Sita, a diligent student currently in the 8th grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  }, {
    name: 'Berlin',
    age: 9,
    class: '4th',
    description: `Berlin, a diligent student currently in the 4th grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  }, {
    name: 'John',
    age: 10,
    class: '5th',
    description: `John, a diligent student currently in the 5th grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  }, {
    name: 'Kiran',
    age: 12,
    class: '6th',
    description: `Kiran, a diligent student currently in the 9th grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  }, {
    name: 'Sindhu',
    age: 12,
    class: '6th',
    description: `Sindhu, a diligent student currently in the 6th grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  }, {
    name: 'Revanth',
    age: 15,
    class: '9th',
    description: `Revanth, a diligent student currently in the 9th grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  }, {
    name: 'Fluora',
    age: 17,
    class: '10th',
    description: `Fluora, a diligent student currently in the 10th grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  }, {
    name: 'Nitya',
    age: 8,
    class: '3rd',
    description: `Nitya, a diligent student currently in the 3rd grade, is a curious soul with a passion 
    for learning that extends far beyond the confines of textbooks.`
  },
];  
