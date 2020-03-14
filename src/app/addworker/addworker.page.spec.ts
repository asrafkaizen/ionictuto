import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddworkerPage } from './addworker.page';

describe('AddworkerPage', () => {
  let component: AddworkerPage;
  let fixture: ComponentFixture<AddworkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddworkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddworkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
