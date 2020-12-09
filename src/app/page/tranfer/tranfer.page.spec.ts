import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranferPage } from './tranfer.page';

describe('TranferPage', () => {
  let component: TranferPage;
  let fixture: ComponentFixture<TranferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
