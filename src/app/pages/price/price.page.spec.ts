import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricePage } from './price.page';

describe('PricePage', () => {
  let component: PricePage;
  let fixture: ComponentFixture<PricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
