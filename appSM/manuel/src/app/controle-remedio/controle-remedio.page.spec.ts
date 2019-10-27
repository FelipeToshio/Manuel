import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleRemedioPage } from './controle-remedio.page';

describe('ControleRemedioPage', () => {
  let component: ControleRemedioPage;
  let fixture: ComponentFixture<ControleRemedioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleRemedioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleRemedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
