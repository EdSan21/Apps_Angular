import { TestBed } from '@angular/core/testing';

import { SpotifyNextService } from './spotify-next.service';

describe('SpotifyNextService', () => {
  let service: SpotifyNextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyNextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
