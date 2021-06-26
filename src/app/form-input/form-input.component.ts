import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  searchTerm!: string;
  @Output() searchMovie = new EventEmitter<any>();

  search() {
    this.searchMovie.emit(this.searchTerm)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
