import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote []=[
    new Quote("Life",'Thomas Edison','James Musembi', 'Many of life failures are people who did not realize how close they were to success when they gave up',new Date('2015,05,05'),0,0),
    new Quote("Lesson",'Hellen Keller','James Musembi', 'Life is a succession of lessons which must be lived to be understood',new Date('2015,05,05'),0,0),
    new Quote("Joy",'Kwame Albert','James Musembi', 'The healthiest response to life is joy', new Date('2015,05,05'),0,0),
    new Quote("Spending",'Dickson Kibe','James Musembi', 'Life is like a coin. You can spend it any way you wish, but you only spend it once', new Date('2015,05,05'),0,0)
  ]

  upvote(ind:number){
    this.quotes[ind].upVote+=1;
  };
  downvote(ind:number){
    this.quotes[ind].downVote+=1;
  }
addQoute(item:Quote){
  this.quotes.push(item)

}

quoteDelete(ind:number){
  if(confirm(`are you sure you want to delete the quote ${this.quotes[ind].title}`)){
    this.quotes.splice(ind,1)
  }


}

  constructor() { }

  ngOnInit(): void {
  }


}