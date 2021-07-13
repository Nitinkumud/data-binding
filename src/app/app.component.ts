import { Component, ViewChild } from '@angular/core';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-range-picker';
  imgUrl = "https://goodmorning-images.org/wp-content/uploads/2021/06/good-morning.jpg.webp";
  fullName: string = "Nitin";

  @ViewChild(DaterangepickerDirective, {static: true}) picker: DaterangepickerDirective;
  selected: {startDate: moment.Moment, endDate: moment.Moment};
  name = 'Angular';

  // open date range picker
  open() {
    this.picker.open();
  }

// add alert on button click
  onSave() {
    alert('Event binding using button click')
  }
}
