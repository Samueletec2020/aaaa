import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimpPage } from './simp.page';

describe('SimpPage', () => {
  let component: SimpPage;
  let fixture: ComponentFixture<SimpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
