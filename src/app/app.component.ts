import { Component, OnDestroy, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router, RoutesRecognized } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(route => {
      if (route instanceof RoutesRecognized) {
        // eslint-disable-next-line
        const title = route.state.root.firstChild?.data['title']
        if (title) {
          this.titleService.setTitle('Bixos Elétrica 2024 - ' + title)
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
