/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MailchimpService } from './mailchimp.service';

describe('MailchimpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailchimpService]
    });
  });

  it('should ...', inject([MailchimpService], (service: MailchimpService) => {
    expect(service).toBeTruthy();
  }));
});
