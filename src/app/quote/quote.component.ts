import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote []=[
    new Quote(1,'Thomas Edison','James Musembi', 'Many of life failures are people who did not realize how close they were to success when they gave up'),
    new Quote(2,'Hellen Keller','James Musembi', 'Life is a succession of lessons which must be lived to be understood'),
    new Quote(3,'Kwame Albert','James Musembi', 'The healthiest response to life is joy.'),
    new Quote(4,'Dickson Kibe','James Musembi', 'Life is like a coin. You can spend it any way you wish, but you only spend it once.')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
