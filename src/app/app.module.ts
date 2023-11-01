import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { BooksdetailsComponent } from './booksdetails/booksdetails.component';
import { AddbooksComponent } from './addbooks/addbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    BookslistComponent,
    BooksdetailsComponent,
    AddbooksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
