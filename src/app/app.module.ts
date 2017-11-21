import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductFilter } from './shared/product-filter.pipe';
import { StarRatingComponent } from './shared/star-rating.component';
import { ProductService } from './products/product.service';


@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpClientModule ],
  declarations: [ AppComponent,ProductListComponent, ConvertToSpacesPipe, ProductFilter,StarRatingComponent],
  bootstrap:    [ AppComponent ],
providers:[ProductService]
})
export class AppModule { }
