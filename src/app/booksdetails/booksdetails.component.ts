import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../models/book.model';

@Component({
  selector: 'app-booksdetails',
  templateUrl: './booksdetails.component.html',
  styleUrls: ['./booksdetails.component.css'],
})
export class BooksdetailsComponent {
  @Input() viewMode = false;

  @Input() currentBook: Books = {
    title: '',
    description: '',
    published: false,
  };

  message = '';

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.route.paramMap.subscribe((params) => {
        const bookId = params.get('id');
        if (bookId) {
          this.getBook(bookId);
        }
      });
    }
  }

  getBook(id: string): void {
    this.booksService.get(id).subscribe({
      next: (data) => {
        this.currentBook = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentBook.title,
      description: this.currentBook.description,
      published: status,
    };
    this.message = '';

    this.booksService.update(this.currentBook.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentBook.published = status;
        this.message = res.message ? res.message : 'The status was updated';
      },
      error: (e) => console.error(e),
    });
  }

  updateBook(): void {
    this.message = '';

    this.booksService.update(this.currentBook.id, this.currentBook).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message : 'The book was updated';
      },
      error: (e) => console.error(e),
    });
  }

  deleteBook(): void {
    this.message = '';

    this.booksService.delete(this.currentBook.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['./books']);
      },
      error: (e) => console.error(e),
    });
  }
}
