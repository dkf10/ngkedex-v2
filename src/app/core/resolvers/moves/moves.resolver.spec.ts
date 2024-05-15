import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { movesResolver } from './moves.resolver';

describe('movesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => movesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
