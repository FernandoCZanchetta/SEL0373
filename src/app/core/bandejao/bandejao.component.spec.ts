import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BandejaoComponent } from './bandejao.component'

describe('BandejaoComponent', () => {
  let component: BandejaoComponent
  let fixture: ComponentFixture<BandejaoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BandejaoComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
