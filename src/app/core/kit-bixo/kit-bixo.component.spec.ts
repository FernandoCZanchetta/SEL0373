import { ComponentFixture, TestBed } from '@angular/core/testing'

import { KitBixoComponent } from './kit-bixo.component'

describe('KitBixoComponent', () => {
  let component: KitBixoComponent
  let fixture: ComponentFixture<KitBixoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitBixoComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(KitBixoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
