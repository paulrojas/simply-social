import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
