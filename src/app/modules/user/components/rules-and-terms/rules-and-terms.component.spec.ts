import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAndTermsComponent } from './rules-and-terms.component';

describe('RulesAndTermsComponent', () => {
  let component: RulesAndTermsComponent;
  let fixture: ComponentFixture<RulesAndTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RulesAndTermsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RulesAndTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
