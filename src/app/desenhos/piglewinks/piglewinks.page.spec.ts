import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiglewinksPage } from './piglewinks.page';

describe('PiglewinksPage', () => {
  let component: PiglewinksPage;
  let fixture: ComponentFixture<PiglewinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiglewinksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiglewinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
