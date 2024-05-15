import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ServicosAcademicosComponent } from './servicos-academicos.component'

describe('ServicosAcademicosComponent', () => {
  let component: ServicosAcademicosComponent
  let fixture: ComponentFixture<ServicosAcademicosComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicosAcademicosComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosAcademicosComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
