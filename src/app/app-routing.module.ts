import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksdetailsComponent } from './booksdetails/booksdetails.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { AddbooksComponent } from './addbooks/addbooks.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookslistComponent },
  { path: 'books/:id', component: BooksdetailsComponent },
  { path: 'add', component: AddbooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
