import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DatepickerViewsSelectionExample } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DatepickerViewsSelectionExample
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MatDatepickerModule,
	MatNativeDateModule,
	FormsModule,
	ReactiveFormsModule,
	MatFormFieldModule,
	MatInputModule
  ],
  providers: [],
  bootstrap: [DatepickerViewsSelectionExample]
})
export class AppModule { }
