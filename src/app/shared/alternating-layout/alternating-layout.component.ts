import { Component, Input, OnInit } from '@angular/core'
import { AlternatingLayoutModel } from '@models'

@Component({
  selector: 'app-alternating-layout',
  templateUrl: './alternating-layout.component.html',
})
export class AlternatingLayoutComponent implements OnInit {
  @Input() contents!: AlternatingLayoutModel[]

  isImageLeft = true

  ngOnInit(): void {
    this.contents = this.contents.map(item => {
      if (item.image && item.text) {
        this.isImageLeft = !this.isImageLeft
        return { ...item, imageOnLeft: this.isImageLeft }
      }

      return item
    })
  }
}
