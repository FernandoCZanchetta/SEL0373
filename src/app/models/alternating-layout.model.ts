import { ImageModel } from './image.model'

export interface AlternatingLayoutModel {
  image?: ImageModel
  text?: string
  imageOnLeft?: boolean
  title?: string
  anchor?: string
  subtitle?: boolean
}
