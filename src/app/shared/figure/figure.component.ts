import { Component, Input, OnChanges } from '@angular/core'
import { ImageModel, ModalModel } from '@models'

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
})
export class FigureComponent implements OnChanges {
  @Input() image!: ImageModel
  @Input() modal?: ModalModel
  @Input() url?: string
  @Input() small = false
  @Input() extraSmall = false
  @Input() fullWidth = false
  @Input() margin = true
  @Input() marginTop = true
  @Input() marginBottom = true

  largeClasses = 'w-lg-80'
  smallClasses = 'w-md-70 w-lg-50'

  ngOnChanges(): void {
    if (this.fullWidth) {
      this.largeClasses = ''
    }

    if (this.extraSmall) {
      this.small = true
      this.smallClasses = 'w-50 w-md-40 w-lg-30'
    }

    if (!this.margin) {
      this.marginTop = false
      this.marginBottom = false
    }
  }
}
