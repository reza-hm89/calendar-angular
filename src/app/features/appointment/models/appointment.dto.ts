export interface AppointmentDto {
  id: number;
  title: string;
  date: Date;
  time: string;
  durationHours: number;
  start: number;
  end: number;
  notes?: string;
  active: boolean;
}
