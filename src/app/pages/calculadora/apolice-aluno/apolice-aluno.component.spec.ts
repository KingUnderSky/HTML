import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceAlunoComponent } from './apolice-aluno.component';

describe('ApoliceAlunoComponent', () => {
  let component: ApoliceAlunoComponent;
  let fixture: ComponentFixture<ApoliceAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoliceAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoliceAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
