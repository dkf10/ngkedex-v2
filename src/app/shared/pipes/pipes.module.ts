import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize/capitalize.pipe';
import { TextHighlightPipe } from './text-highlight/text-highlight.pipe';



@NgModule({
  declarations: [
    CapitalizePipe,
    TextHighlightPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe
  ],
  providers: [
    CapitalizePipe
  ]
})
export class PipesModule { }
