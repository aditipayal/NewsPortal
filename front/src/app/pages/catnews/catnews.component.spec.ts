import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatnewsComponent } from './catnews.component';

describe('CatnewsComponent', () => {
  let component: CatnewsComponent;
  let fixture: ComponentFixture<CatnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
