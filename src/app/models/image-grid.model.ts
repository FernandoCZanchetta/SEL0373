import { ImageModel } from './image.model'
import { ModalModel } from './modal.model'

export interface ImageGridItemModel {
  image: ImageModel
  modal?: ModalModel
  url?: string
  fill?: boolean
}
