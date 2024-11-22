export interface AppointmentDto {
  id: number;
  title: string;
  date: Date;
  time: string;
  durationHours: number;
  durationMinutes: number;
  notes?: string;
}
