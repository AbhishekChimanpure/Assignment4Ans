import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

GetBookDetails()
{
   return [
    {"name":"C Language", "author":"Ajay Mittal", "price":450},
    {"name":"C++ Language","author":"Denis Ritchie","price":600},
    {"name":"Java","author":"NageshRao","price":700},

  ];
}

}
