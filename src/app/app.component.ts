import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { ValidationService } from './services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [ DataService, ValidationService ]
})
export class AppComponent {
  public posts=[];
  
  constructor(
    private dataService: DataService,
    private validationService: ValidationService
  ) {
    this.dataService.getData().subscribe(
      (result: any) => this.posts = result.posts,
      (error: any) => { alert('An error has occurred when loading the posts'); }
    )
  }

  validateForm(frm) {
    let valid = true;
    for (let item of frm.elements) {
      if (item.type == "text" || item.type == "email") {
        if (item.value.trim()=='') {
          alert('All the fields are required. Please review the information submitted.');
          return false;
        }
      }
    }
    this.validationService.validateEmail(frm.elements[2].value).subscribe(
      (response: any) => {
        if (response.status=='valid') {
          alert('The email address is valid');
        }
      },
      (error:any) => {
        alert('An error has occurred when validating the email address');
      }
    )
  }
}
