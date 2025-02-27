import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser'
import { KatexService } from './ng-katex.service';
import { KatexDirective } from './ng-katex.directive';
import { KatexComponent } from './ng-katex.component';
import { KatexParagraphComponent } from './ng-katex-paragraph.component';
import { KatexHtmlComponent } from './ng-katex-html.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [
    KatexService,
  ],
  declarations: [
    KatexDirective,
    KatexComponent,
    KatexParagraphComponent,
    KatexHtmlComponent
  ],
  exports: [
    KatexComponent,
    KatexParagraphComponent,
    KatexHtmlComponent
  ],
})
export class KatexModule {}
