import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatDatepickerModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { DatepickerViewsSelectionExample } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DatepickerViewsSelectionExample
  ],
  imports: [
    BrowserModule,
	MatDatepickerModule,
	MatNativeDateModule,
	FormsModule,
	ReactiveFormsModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatRippleModule,
	BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [DatepickerViewsSelectionExample]
})
export class AppModule { }
