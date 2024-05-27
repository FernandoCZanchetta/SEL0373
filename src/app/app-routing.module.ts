import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@core'
import { RouteModel } from '@models'

const routes: RouteModel[] = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'SHARP_PROBE',
      background: [
        {
          src: '/assets/images/home/noite.jpg',
          alt: 'Bonito',
        },
        {
          src: '/assets/images/home/wheatley.jpg',
          alt: 'Wheatley',
        },
        {
          src: '/assets/images/home/montanha.jpg',
          alt: 'Montanha',
        },
        {
          src: '/assets/images/home/quadrado.jpg',
          alt: 'Quadrados',
        },
        {
          src: '/assets/images/home/pilares.jpg',
          alt: 'pilares da criação',
        },
      ],
    },
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes as Routes, {
      anchorScrolling: 'disabled',
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
