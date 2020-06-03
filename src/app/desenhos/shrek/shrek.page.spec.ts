import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShrekPage } from './shrek.page';

describe('ShrekPage', () => {
  let component: ShrekPage;
  let fixture: ComponentFixture<ShrekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShrekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
