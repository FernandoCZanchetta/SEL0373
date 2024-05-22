import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BannerRouterComponent } from './banner-router.component'

describe('BannerRouterComponent', () => {
  let component: BannerRouterComponent
  let fixture: ComponentFixture<BannerRouterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerRouterComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerRouterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
