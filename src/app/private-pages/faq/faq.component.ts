import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  @Output() headingName = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
    this.headingName.emit('FAQs');
  }

}
