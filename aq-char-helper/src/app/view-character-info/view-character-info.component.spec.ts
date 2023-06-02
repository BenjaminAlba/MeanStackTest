import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterInfoComponent } from './view-character-info.component';

describe('ViewCharacterInfoComponent', () => {
  let component: ViewCharacterInfoComponent;
  let fixture: ComponentFixture<ViewCharacterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCharacterInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
