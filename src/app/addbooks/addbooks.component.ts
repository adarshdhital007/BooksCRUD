import { Component } from '@angular/core';
import { Books } from '../models/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css'],
})
export class AddbooksComponent {
  constructor(private booksService: BooksService) {}

  books: Books = {
    title: '',
    description: '',
    published: false,
  };
  submitted = false;

  saveBook(): void {
    const data = {
      title: this.books.title,
      description: this.books.description,
    };

    this.booksService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newBook(): void {
    this.submitted = false;
    this.books.title = '';
    this.books.description = '';
  }
}
