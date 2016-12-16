import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {xhrHeaders} from "./xhr-headers";
// import {Observable} from "rxjs/Observable";

@Injectable()
export class MailchimpService {

  constructor(private http: Http) { }


  sendEmail(contactInformation) {

    console.log(contactInformation);
    const network$ = this.http.post('/contact/email',
      JSON.stringify({contactInformation}),
      xhrHeaders());

    network$.subscribe(
      () => console.log('HTTP post successful !'),
      err => console.error(err),
      () => console.log('monitoring completed ...')

    );

    return network$;

  }
}
