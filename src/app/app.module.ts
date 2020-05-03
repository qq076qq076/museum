import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './component/button/button.component';
import { CardComponent } from './component/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleUnderlineComponent } from './component/title-underline/title-underline.component';
import { ImageSelectComponent } from './component/image-select/image-select.component';
import { TextSelectComponent } from './component/text-select/text-select.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    CardComponent,
    TitleUnderlineComponent,
    ImageSelectComponent,
    TextSelectComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
