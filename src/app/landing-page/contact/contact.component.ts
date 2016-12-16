import { Component, OnInit } from '@angular/core';
import { MailchimpService } from "../../services/mailchimp.service";
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private mailChimpService: MailchimpService) { }

  contact = {}

  ngOnInit() {
  }

  submitContact() {
    this.mailChimpService.sendEmail(this.contact);
    console.log(this.contact);
  }

}
