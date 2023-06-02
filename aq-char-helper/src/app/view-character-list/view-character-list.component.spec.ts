import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterListComponent } from './view-character-list.component';

describe('ViewCharacterListComponent', () => {
  let component: ViewCharacterListComponent;
  let fixture: ComponentFixture<ViewCharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCharacterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
