import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  BannerRouterComponent,
  FooterComponent,
  GroupsPanelComponent,
  HomeComponent,
  NavbarComponent,
  PageTitleComponent,
  SidebarComponent,
} from '@core'
import { SanitizeHtmlPipe } from '@pipes'
import {
  AlternatingLayoutComponent,
  BannerComponent,
  FigureComponent,
  ImageGridComponent,
  LogoComponent,
  ModalComponent,
  SocialMediaIconComponent,
  TitleComponent,
} from '@shared'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AlternatingLayoutComponent,
    AppComponent,
    BannerComponent,
    BannerRouterComponent,
    FigureComponent,
    FooterComponent,
    GroupsPanelComponent,
    HomeComponent,
    ImageGridComponent,
    LogoComponent,
    ModalComponent,
    NavbarComponent,
    PageTitleComponent,
    SanitizeHtmlPipe,
    SidebarComponent,
    SocialMediaIconComponent,
    TitleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
