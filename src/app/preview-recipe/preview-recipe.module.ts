import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreviewRecipeComponent } from './preview-recipe.component';


@NgModule({
  declarations: [
    PreviewRecipeComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: [PreviewRecipeComponent],
  exports : [ PreviewRecipeComponent ]
})
export class PreviewRecipeModule { }
