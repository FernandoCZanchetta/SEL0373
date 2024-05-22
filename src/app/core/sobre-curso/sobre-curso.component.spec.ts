import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SobreCursoComponent } from './sobre-curso.component'

describe('SobreCursoComponent', () => {
  let component: SobreCursoComponent
  let fixture: ComponentFixture<SobreCursoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreCursoComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreCursoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
