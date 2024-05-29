import { Component } from '@angular/core'
import { AlternatingLayoutModel, ImageGridItemModel, ImageModel } from '@models'
import { SidebarService } from '@services'

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      title: 'Montanha',
      subtitle: true,
      image: {
        alt: 'Montanha',
        src: '/assets/images/home/montanha.jpg',
        caption: 'Olha só esses relevos',
      },
    },
  ]

  exemplosPhotos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/quadrado.jpg',
        alt: 'quadrado',
        caption: 'quadrado',
      },
    },
    {
      image: {
        src: '/assets/images/home/pilares.jpg',
        alt: 'pilares',
        caption: 'pilares',
      },
    },
    {
      image: {
        src: '/assets/images/logo/main.png',
        alt: 'querer',
        caption: 'querer',
      },
    },      
  ]

  modalExemplo: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/amigo.png',
        alt: 'Amigo',
        caption: 'Fiel',
      },
      modal: {
        image: {
          src: '/assets/images/home/legal.png',
          alt: 'Combatente',
        },
        text: 'Gu gu da da',
        title: 'Olha só essa guitarra',
        url: 'https://br.yamaha.com/pt/products/musical_instruments/guitars_basses/el_guitars/rs_2022/index.html',
      },
    },
  ]
}