// src/app/appwrite.service.ts
import { Injectable } from '@angular/core';
import { Client, Account } from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  private client: Client;
  private account: Account;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint('http://localhost/v1') // Your Appwrite server endpoint
      .setProject('66a8cce0001b0e73a474'); // Your project ID

    this.account = new Account(this.client);
  }

  // Example function to create a new account
  async createAccount(email: string, password: string, name: string) {
    try {
      return await this.account.create('unique()', email, password, name);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Example function to log in
  async login(email: string, password: string) {
    try {
    //   return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Additional Appwrite functions as needed
}
