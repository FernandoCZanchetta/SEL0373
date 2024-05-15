import { Component } from '@angular/core'
import { ImageGridItemModel } from '@models'
import { SidebarService } from '@services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sponsorsImages: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/ca-and-ma.svg',
        alt: 'Ca and Ma',
        caption: 'Ca and Ma',
      },
      url: 'http://caandma.com.br/',
    },
    {
      image: {
        src: '/assets/images/home/cicbeu.svg',
        alt: 'CICBEU',
        caption: 'CICBEU',
      },
      url: 'http://www.cicbeu.com.br/',
    },
    {
      image: {
        src: '/assets/images/home/roca.svg',
        alt: 'roca',
        caption: 'Roca Imóveis',
      },
      url: 'https://roca.com.br/',
    },
  ]
  constructor(public sidebarService: SidebarService) {}
}
