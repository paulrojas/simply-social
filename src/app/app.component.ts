import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [ DataService ]
})
export class AppComponent {
  public posts=[];
  
  constructor(
    private dataService: DataService,
  ) {
    this.dataService.getData().subscribe(
      (result: any) => this.posts = result.posts,
      (error: any) => { alert('An error has occurred when loading the posts'); }
    )
  }

  validateForm(frm) {
    for (let item of frm.elements) {
      if (item.type == "text") {
        
      }
    }
  }
}
