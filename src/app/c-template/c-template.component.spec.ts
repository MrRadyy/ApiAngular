import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTemplateComponent } from './c-template.component';

describe('CTemplateComponent', () => {
  let component: CTemplateComponent;
  let fixture: ComponentFixture<CTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
