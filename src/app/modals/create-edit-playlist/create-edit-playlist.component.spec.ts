import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditPlaylistComponent } from './create-edit-playlist.component';

describe('CreateEditPlaylistComponent', () => {
  let component: CreateEditPlaylistComponent;
  let fixture: ComponentFixture<CreateEditPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditPlaylistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEditPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
