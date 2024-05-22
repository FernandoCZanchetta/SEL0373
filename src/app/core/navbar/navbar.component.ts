import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { SidebarService } from '@services'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() isBelowBanner = true

  @ViewChild('navbar') navbarRef!: ElementRef

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit(): void {
    if (this.isBelowBanner) {
      window.addEventListener('scroll', () => {
        // if a whole page was scrolled
        window.scrollY > window.innerHeight ? this.setSticky() : this.unsetSticky()
      })
    } else {
      this.setSticky()
    }
  }

  ngOnDestroy(): void {
    this.unsetSticky()
  }

  openSidebar() {
    this.sidebarService.open()
  }

  goToHomepage(): void {
    this.router.navigate(['/'])
  }

  private setSticky() {
    const navbar = this.navbarRef?.nativeElement as Element
    const { height } = navbar.getBoundingClientRect()

    navbar.classList.add('fixed-top')

    const main = document.querySelector('main') || document.querySelector('.main')
    if (main) {
      main.style.paddingTop = `${height + 16}px`
    }

    document.querySelectorAll('a[id]').forEach(anchor => {
      anchor.setAttribute('style', `scroll-margin-top: ${height}px`)
    })
  }

  private unsetSticky() {
    const navbar = this.navbarRef?.nativeElement
    navbar.classList.remove('fixed-top')

    const main = document.querySelector('main') || document.querySelector('.main')
    if (main) {
      main.style.paddingTop = '16px'
    }
  }
}
