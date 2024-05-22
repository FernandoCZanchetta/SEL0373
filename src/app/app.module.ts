import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  BandejaoComponent,
  BannerRouterComponent,
  BibliotecasComponent,
  CampusComponent,
  CervejadaPanelComponent,
  FooterComponent,
  GroupsPanelComponent,
  HomeComponent,
  IcExtraComponent,
  KitBixoComponent,
  MatriculaComponent,
  MoradiasComponent,
  NavbarComponent,
  OuvidoriaComponent,
  PageTitleComponent,
  PreparacaoEstudosComponent,
  ProjetoAmpereComponent,
  SemanaDeRecepcaoComponent,
  ServicosAcademicosComponent,
  SidebarComponent,
  SobreCursoComponent,
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
    BandejaoComponent,
    BannerComponent,
    BannerRouterComponent,
    BibliotecasComponent,
    CampusComponent,
    CervejadaPanelComponent,
    FigureComponent,
    FooterComponent,
    GroupsPanelComponent,
    HomeComponent,
    IcExtraComponent,
    KitBixoComponent,
    ImageGridComponent,
    LogoComponent,
    MatriculaComponent,
    ModalComponent,
    MoradiasComponent,
    NavbarComponent,
    OuvidoriaComponent,
    PageTitleComponent,
    PreparacaoEstudosComponent,
    ProjetoAmpereComponent,
    SanitizeHtmlPipe,
    SemanaDeRecepcaoComponent,
    ServicosAcademicosComponent,
    SidebarComponent,
    SobreCursoComponent,
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
