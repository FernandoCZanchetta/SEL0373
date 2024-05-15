import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AlternatingLayoutComponent } from './alternating-layout.component'

describe('AlternatingLayoutComponent', () => {
  let component: AlternatingLayoutComponent
  let fixture: ComponentFixture<AlternatingLayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlternatingLayoutComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternatingLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
