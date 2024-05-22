import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CervejadaPanelComponent } from './cervejada-panel.component'

describe('CervejadaPanelComponent', () => {
  let component: CervejadaPanelComponent
  let fixture: ComponentFixture<CervejadaPanelComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CervejadaPanelComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejadaPanelComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
