/* eslint-disable class-methods-use-this */

import { Injectable } from '@angular/core'
import { SocialMedia, SocialMediaIconMap, SocialMediaModel } from '@models'

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  private getWhatsAppURL(phoneNumber: string, message: string): string {
    const apiURL = 'https://api.whatsapp.com/send?phone=$PHONE&text=$MESSAGE'

    return apiURL
      .replace('$PHONE', phoneNumber.replace(/[()\s-+]/g, ''))
      .replace('$MESSAGE', message.replace('\n', ' '))
  }

  private getLink(network: SocialMediaModel, message = ''): string {
    const { name, url } = network
    return name === SocialMedia.WhatsApp
      ? this.getWhatsAppURL(url, message)
      : url.replace(/\s/g, '')
  }

  getTooltipText(): string {
    // eslint-disable-next-line
    return navigator.clipboard ? 'Copiar Email' : 'Enviar Email'
  }

  copyEmailToClipboard(email: string): void {
    email = email.replace(/\s/g, '')

    /* eslint-disable no-undef */
    navigator.clipboard
      ? navigator.clipboard.writeText(email)
      : window.open(`mailto:${email}`, '_self')
    /* eslint-enable no-undef */
  }

  format(network: SocialMediaModel): SocialMediaModel {
    return {
      name: network.name,
      url: this.getLink(network, 'Olá, SA-SEL! Tudo bem?'),
      icon: SocialMediaIconMap[network.name],
    }
  }
}
