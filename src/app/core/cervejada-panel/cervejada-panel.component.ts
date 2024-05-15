import { Component, Input, OnInit } from '@angular/core'
import { SocialMedia, SocialMediaModel } from '@models'

@Component({
  selector: 'app-cervejada-panel',
  templateUrl: './cervejada-panel.component.html',
})
export class CervejadaPanelComponent implements OnInit {
  @Input() size = 23
  @Input() color = ''

  ngOnInit(): void {
    this.color = this.color ? `text-${this.color}` : ''
  }

  cervejadamedia: SocialMediaModel[] = [
    {
      name: SocialMedia.Instagram,
      url: 'https://instagram.com/cervejada.eletricomp/',
    },
  ]
}
