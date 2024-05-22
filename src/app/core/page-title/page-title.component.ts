import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
})
export class PageTitleComponent implements OnInit {
  title = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // eslint-disable-next-line
    this.title = this.route.snapshot.data['title'] ?? ''
  }
}
