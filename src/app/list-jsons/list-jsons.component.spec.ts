import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJsonsComponent } from './list-jsons.component';

describe('ListJsonsComponent', () => {
  let component: ListJsonsComponent;
  let fixture: ComponentFixture<ListJsonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJsonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
