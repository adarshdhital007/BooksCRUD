import { Component } from '@angular/core';
import { Books } from '../models/book.model';
import { BooksService } from '../books.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css'],
})
export class BookslistComponent implements OnInit {
  books?: Books[];
  currentBook: Books = {};
  currentIndex = -1;
  title = '';

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.retrieveBooks();
  }

  retrieveBooks(): void {
    this.booksService.getAll().subscribe({
      next: (data) => {
        this.books = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList():void{
    this.retrieveBooks();
    this.currentBook={};
    this.currentIndex=-1;
  }

  setActiveBook(book:Books,index:number):void{
    this.currentBook=book;
    this.currentIndex=index;
  }

  removeAllBooks():void{
    this.booksService.deleteAll().subscribe({
      next:(res)=>{
        console.log(res);
        this.refreshList();
      },error:(e)=>console.error(e)
    });
  }



}
