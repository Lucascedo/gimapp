
export enum Role {
  STUDENT = 'Estudiante',
  TEACHER = 'Profesor',
  STAFF = 'Personal',
  DEVELOPER = 'Desarrollador'
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: Role;
  avatar: string;
  details: {
    [key: string]: string;
  };
}

export interface InfoWindow {
  id: string;
  title: string;
  iconName: 'DocumentChartBar' | 'ClipboardDocumentList' | 'CalendarDays';
  content: string;
}
