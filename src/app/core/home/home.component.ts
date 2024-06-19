import { Component } from '@angular/core'
import { AlternatingLayoutModel,ImageGridItemModel } from '@models'
import { SidebarService } from '@services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  altura: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/pato.gif',
        alt: 'Altura',
        caption: 'Altura',
      },
      modal: {
        image: {
          src: '/assets/images/home/legal.png',
          alt: 'Altura',
        },
        text: '1203012321390129321930',
        title: 'Altitude da sonda',
      },
    }
  ]
  
  temperatura: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/girando.gif',
        alt: 'Temperatura',
        caption: 'Temperatura em ºC',
      },
      modal: {
        image: {
          src: '/assets/images/home/legal.png',
          alt: 'Altura',
        },
        text: '1203012321390129321930',
        title: 'Histórico da Temperatura',
      },
    }
  ]
  
  umidade: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/macaco.gif',
        alt: 'Altura',
        caption: 'Altura',
      },
      modal: {
        image: {
          src: '/assets/images/home/legal.png',
          alt: 'Altura',
        },
        text: '1203012321390129321930',
        title: 'Altitude da sonda',
      },
    }
  ]  
}
