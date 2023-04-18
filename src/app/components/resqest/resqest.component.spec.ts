import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResqestComponent } from './resqest.component';

describe('ResqestComponent', () => {
  let component: ResqestComponent;
  let fixture: ComponentFixture<ResqestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResqestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResqestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
