import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router, RoutesRecognized } from '@angular/router'
import { ImageModel, RouteDataModel } from '@models'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-banner-router',
  templateUrl: './banner-router.component.html',
})
export class BannerRouterComponent implements OnInit, OnDestroy {
  currentDarkness: string | number = '10%'
  currentImages: ImageModel[] = []
  currentLogo?: ImageModel
  currentTitle = ''
  subscription!: Subscription

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(route => {
      if (route instanceof RoutesRecognized) {
        const data: RouteDataModel = (route.state.root.firstChild?.data ??
          {}) as RouteDataModel

        this.currentDarkness = data.bgDarkness ?? '10%'
        this.currentImages = data.background
        this.currentLogo = data.logo
        this.currentTitle = data.title
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
