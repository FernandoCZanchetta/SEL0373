import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {
  @Input() subtitle = false
  @Input() minimal = false

  path = '/assets/images/logo/main.png'

  ngOnInit(): void {
    if (this.subtitle) {
      this.path = this.path.replace('main', 'subtitle')
    } else if (this.minimal) {
      this.path = this.path.replace('main', 'minimal')
    }
  }
}
