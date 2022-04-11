import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() quoteSubmitEvent=new EventEmitter<Quote>();
  quoteSubmit(form:NgForm){
   let formData=form.value;
   let newDate= new Date(formData.date);
   formData.date=newDate;
   formData.downVote=0;
   formData.upVote=0;
   this.quoteSubmitEvent.emit(formData)
   console.log(formData)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
