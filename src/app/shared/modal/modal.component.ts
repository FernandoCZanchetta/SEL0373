import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { ImageModel } from '@models'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnChanges {
  @ViewChild('modal') modal!: TemplateRef<any>

  @Input() image?: ImageModel
  @Input() isOpen!: boolean
  @Input() text?: string
  @Input() title!: string
  @Input() url?: string

  // for two-way data binding
  @Output() isOpenChange = new EventEmitter<boolean>()

  modalRef?: BsModalRef
  paragraphs?: string[]

  constructor(private modalService: BsModalService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.paragraphs = this.text?.split('\n')

    // eslint-disable-next-line
    if (changes['isOpen'].currentValue) {
      this.modalRef?.onHide?.unsubscribe()
      this.modalRef = this.modalService.show(this.modal)

      this.modalRef.onHide?.subscribe(() => {
        this.isOpen = false
        this.isOpenChange.emit(this.isOpen)
      })
    }

    if (this.url && this.image) {
      const addition = `
        <a href="${this.url}" target="_blank" rel="noopener noreferrer" class="text-reset">
          <em>[link]</em>
        </a>
      `
      this.image.caption = this.image?.caption
        ? `${this.image.caption} ${addition}`
        : addition
      console.log(this.image.caption)
    }
  }
}
