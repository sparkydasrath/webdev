import { TestBed } from '@angular/core/testing';

import { MessageService } from './messages.service';

describe('MessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });
});
