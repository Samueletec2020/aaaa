import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrsinhosPage } from './ursinhos.page';

describe('UrsinhosPage', () => {
  let component: UrsinhosPage;
  let fixture: ComponentFixture<UrsinhosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrsinhosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrsinhosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
