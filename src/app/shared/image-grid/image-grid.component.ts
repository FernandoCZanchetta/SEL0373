import { Component, Input } from '@angular/core'
import { ImageGridItemModel, ModalModel } from '@models'

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
})
export class ImageGridComponent {
  @Input() gridItems!: ImageGridItemModel[]
  @Input() large = false

  openModal = false
  modal: ModalModel = {
    image: { src: '', alt: '' },
    text: '',
    url: '',
    title: '',
  }

  createModal(modal: ModalModel) {
    this.modal = modal
    this.openModal = true
  }
}
