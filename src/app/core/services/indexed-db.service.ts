import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';
import { AppointmentDto } from '../../features/appointment/models/appointment.dto';

@Injectable({
  providedIn: 'root',
})
export class IndexedDbService {
  private db!: IDBPDatabase<any>;
  private dbName = 'AppointmentDB';
  private storeName = 'appointments';

  constructor() {
    this.initDb();
  }

  private async initDb() {
    this.db = await openDB(this.dbName, 1, {
      upgrade(db) {
        // Create the object store if it doesn't exist
        if (!db.objectStoreNames.contains('appointments')) {
          db.createObjectStore('appointments', {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
      },
    });
  }

  // Method to add an appointment
  async addAppointment(dto: AppointmentDto) {
    return await this.db.add(this.storeName, dto);
  }

  // Method to get all appointments
  async getAppointments() {
    if (!this.db) await this.initDb(); // Ensure db is initialized
    return await this.db.getAll(this.storeName);
  }

  // Method to delete an appointment by id
  async deleteAppointment(id: number) {
    return await this.db.delete(this.storeName, id);
  }
}
