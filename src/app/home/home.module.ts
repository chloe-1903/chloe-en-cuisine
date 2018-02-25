import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PreviewRecipeModule } from '../preview-recipe/preview-recipe.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    PreviewRecipeModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  exports : [ HomeComponent ]
})
export class HomeModule { }
