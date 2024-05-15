import { Component } from '@angular/core'
import { SocialMedia, SocialMediaModel } from '@models'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialMedia: SocialMediaModel[] = [
    { name: SocialMedia.Facebook, url: 'https://www.facebook.com/sasel.usp' },
    { name: SocialMedia.Instagram, url: 'https://www.instagram.com/sasel.usp/' },
    { name: SocialMedia.WhatsApp, url: '+55 (16) 99619-0880' },
    {
      name: SocialMedia.LinkedIn,
      url: 'https://www.linkedin.com/company/sasel-eesc-usp',
    },
    { name: SocialMedia.Email, url: 'sasel.usp@gmail.com' },
    {
      name: SocialMedia.YouTube,
      url: 'https://www.youtube.com/channel/UCCIw2l3rNCepuZsugA4BC7w',
    },
    { name: SocialMedia.GitHub, url: 'https://github.com/sa-sel' },
  ]
}
