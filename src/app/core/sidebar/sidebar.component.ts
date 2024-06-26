import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router, Scroll } from '@angular/router'
import { SidebarItemModel } from '@models'
import { SidebarService } from '@services'
import * as bootstrap from 'bootstrap'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  route = ''
  fragment = ''
  startsOpen = this.sidebarService.isOpen()
  subscriptions: Subscription[] = []
  sidebar!: bootstrap.Offcanvas

  private changedRoutes = true

  items: SidebarItemModel[] = [
    {
      title: 'Página Inicial',
      icon: 'fas fa-home',
      route: '',
      collapsed: false,
      subitems: [
        {
          title: 'Home',
          id: 'Home',
        },
      ],
    },
  ]

  private expanded?: SidebarItemModel

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit(): void {
    const sidebarElement = document.querySelector('#sidebar')

    if (sidebarElement) {
      this.sidebar = new bootstrap.Offcanvas(sidebarElement)

      // when the sidebar is hidden through Bootstrap scripts
      // (e.g.: by clicking in the backdrop or pressing <ESC>)
      // set the `isOpen` attribute to false
      sidebarElement.addEventListener('hidden.bs.offcanvas', () => {
        this.sidebarService.close()

        if (this.expanded) {
          this.expanded.collapsed = true
        }
      })
    }

    this.subscriptions.push(
      this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          const regexp = /\/(?<route>[^#]*)(?<fragment>#.+)?/
          const groups = regexp.exec(e.urlAfterRedirects)?.groups ?? {}

          /* eslint-disable dot-notation */
          this.changedRoutes = this.route !== groups['route']
          this.route = groups['route']
          this.fragment = groups['fragment']?.replace('#', '') ?? ''
          /* eslint-enable dot-notation */

          this.sidebar.hide()
        }
      })
    )

    this.subscriptions.push(
      this.router.events.subscribe(e => {
        if (e instanceof Scroll) {
          if (e.anchor) {
            setTimeout(
              () => {
                document.querySelector(`#${e.anchor}`)?.scrollIntoView()
              },
              this.changedRoutes ? 350 : 0
            )
          }
        }
      })
    )

    this.subscriptions.push(
      this.sidebarService.visibility$.subscribe(isOpen => {
        isOpen ? this.sidebar.show() : this.sidebar.hide()
      })
    )

    this.expanded = this.items.find(item => !item.collapsed)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe()
    })
  }

  toggleCollapsed(item: SidebarItemModel): void {
    if (item.collapsed) {
      if (this.expanded) {
        this.expanded.collapsed = true
      }

      this.expanded = item
      item.collapsed = false
    } else {
      this.expanded = undefined
      item.collapsed = true
    }
  }
}
