import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote []=[
    new Quote(1,'isaac kiptoo','James Musembi', 'I get a lot of letters from people. They say, \‘I want to be a writer. What should I do?\’ I tell them to stop writing to me and get on with it.'),
    new Quote(2,'isaac kiptoo','James Musembi', 'I get a lot of letters from people. They say, \‘I want to be a writer. What should I do?\’ I tell them to stop writing to me and get on with it.'),
    new Quote(3,'isaac kiptoo','James Musembi', 'I get a lot of letters from people. They say, \‘I want to be a writer. What should I do?\’ I tell them to stop writing to me and get on with it.'),
    new Quote(4,'isaac kiptoo','James Musembi', 'I get a lot of letters from people. They say, \‘I want to be a writer. What should I do?\’ I tell them to stop writing to me and get on with it.')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
