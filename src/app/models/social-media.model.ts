export enum SocialMedia {
  Discord = 'Discord',
  Email = 'Email',
  Facebook = 'Facebook',
  GitHub = 'GitHub',
  Instagram = 'Instagram',
  LinkedIn = 'LinkedIn',
  WhatsApp = 'WhatsApp',
  WhatsAppGroup = 'WhatsAppGroup',
  YouTube = 'YouTube',
}

export const enum SocialMediaIcons {
  Discord = 'fab fa-discord',
  Email = 'fas fa-envelope',
  Facebook = 'fab fa-facebook',
  GitHub = 'fab fa-github',
  Instagram = 'fab fa-instagram',
  LinkedIn = 'fab fa-linkedin',
  WhatsApp = 'fab fa-whatsapp',
  YouTube = 'fab fa-youtube',
}

export const SocialMediaIconMap: Record<SocialMedia, SocialMediaIcons> = {
  [SocialMedia.Discord]: SocialMediaIcons.Discord,
  [SocialMedia.Email]: SocialMediaIcons.Email,
  [SocialMedia.Facebook]: SocialMediaIcons.Facebook,
  [SocialMedia.GitHub]: SocialMediaIcons.GitHub,
  [SocialMedia.Instagram]: SocialMediaIcons.Instagram,
  [SocialMedia.LinkedIn]: SocialMediaIcons.LinkedIn,
  [SocialMedia.WhatsApp]: SocialMediaIcons.WhatsApp,
  [SocialMedia.WhatsAppGroup]: SocialMediaIcons.WhatsApp,
  [SocialMedia.YouTube]: SocialMediaIcons.YouTube,
}

export interface SocialMediaModel {
  name: SocialMedia
  url: string
  icon?: SocialMediaIcons
}
