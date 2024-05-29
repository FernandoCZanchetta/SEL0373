import { Component } from '@angular/core'
import { AlternatingLayoutModel,ImageGridItemModel } from '@models'
import { SidebarService } from '@services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      title: 'Entrada da USP',
      subtitle: true,
      image: {
        alt: 'mapa do campus I',
        src: '/assets/images/home/montanha.jpg',
        caption: 'Logo',
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
}
