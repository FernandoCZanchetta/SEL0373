import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MoradiasComponent } from './moradias.component'

describe('MoradiasComponent', () => {
  let component: MoradiasComponent
  let fixture: ComponentFixture<MoradiasComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoradiasComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradiasComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
