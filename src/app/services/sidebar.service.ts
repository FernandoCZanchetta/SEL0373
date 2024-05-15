import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private visibilityEmitter = new EventEmitter<boolean>()
  private show = false

  visibility$ = this.visibilityEmitter.asObservable()

  isOpen(): boolean {
    return this.show
  }

  open(): void {
    this.show = true
    this.visibilityEmitter.emit(this.show)
  }

  close(): void {
    this.show = false
    this.visibilityEmitter.emit(this.show)
  }

  toggle(): void {
    this.show = !this.show
    this.visibilityEmitter.emit(this.show)
  }
}
