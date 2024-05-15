import { ComponentFixture, TestBed } from '@angular/core/testing'

import { IcExtraComponent } from './ic-extra.component'

describe('IcExtraComponent', () => {
  let component: IcExtraComponent
  let fixture: ComponentFixture<IcExtraComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IcExtraComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(IcExtraComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
