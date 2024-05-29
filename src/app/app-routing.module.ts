import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@core'
import { TestPageComponent } from '@core'
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
      ],
    },
  },
    {
      path: 'test-page',
      component: TestPageComponent,
      data: {
        title: 'SHARP_PROBE',
        background: [
          {
            src: '/assets/images/home/wheatley.jpg',
            alt: 'SPaCE',
          },
        ],
      },
    }
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
