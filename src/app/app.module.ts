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
  TestPageComponent,
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
import { MqttModule, IMqttServiceOptions } from "ngx-mqtt";
import { environment } from '../environments/environment'
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: environment.MQTT_SERVICE_OPTIONS.hostname,
  port: environment.MQTT_SERVICE_OPTIONS.port,
  path: environment.MQTT_SERVICE_OPTIONS.path,
  username: environment.MQTT_SERVICE_OPTIONS.user,
  password: environment.MQTT_SERVICE_OPTIONS.password,
}

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
    TestPageComponent,
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
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
