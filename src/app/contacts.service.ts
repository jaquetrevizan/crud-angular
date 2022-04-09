import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  urlBase = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  listContacts() {
    return this.http.get<Contact[]>(`${this.urlBase}/contacts?_sort=name`)
  }

  retrieveContact(id: number) {
    return this.http.get<Contact>(`${this.urlBase}/contacts/${id}`)
  }

  createContact(contact: Contact) {
    return this.http.post<Contact>(`${this.urlBase}/contacts`, contact)
  }

  updateContact(contact: Contact) {
    return this.http.put<Contact>(`${this.urlBase}/contacts/${contact.id}`, contact)
  }

  deleteContact(id: number) {
    return this.http.delete(`${this.urlBase}/contacts/${id}`)
  }

}
