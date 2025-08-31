
import { Role, UserProfile, InfoWindow } from './types';

export const USERS: UserProfile[] = [
  {
    id: 1,
    name: 'Carlos Santana',
    email: 'carlos.s@gympro.com',
    role: Role.TEACHER,
    avatar: 'https://picsum.photos/seed/carlos/200',
    details: { 'Especialidad': 'Entrenamiento de fuerza', 'Experiencia': '10 años', 'Certificación': 'NSCA-CPT' }
  },
  {
    id: 2,
    name: 'Ana Rodriguez',
    email: 'ana.r@gympro.com',
    role: Role.TEACHER,
    avatar: 'https://picsum.photos/seed/ana/200',
    details: { 'Especialidad': 'Yoga y Pilates', 'Experiencia': '8 años', 'Certificación': 'RYT 500' }
  },
  {
    id: 3,
    name: 'Maria Garcia',
    email: 'maria.g@email.com',
    role: Role.STUDENT,
    avatar: 'https://picsum.photos/seed/maria/200',
    details: { 'Miembro desde': '2022', 'Objetivo': 'Pérdida de peso', 'Plan Activo': 'Plan Premium' }
  },
  {
    id: 4,
    name: 'Juan Perez',
    email: 'juan.p@email.com',
    role: Role.STUDENT,
    avatar: 'https://picsum.photos/seed/juan/200',
    details: { 'Miembro desde': '2023', 'Objetivo': 'Ganancia muscular', 'Plan Activo': 'Plan Básico' }
  },
   {
    id: 5,
    name: 'Luis Hernandez',
    email: 'luis.h@email.com',
    role: Role.STUDENT,
    avatar: 'https://picsum.photos/seed/luis/200',
    details: { 'Miembro desde': '2021', 'Objetivo': 'Resistencia', 'Plan Activo': 'Plan Premium' }
  },
  {
    id: 6,
    name: 'Javier Martinez',
    email: 'javier.m@gympro.com',
    role: Role.STAFF,
    avatar: 'https://picsum.photos/seed/javier/200',
    details: { 'Posición': 'Gerente de Gimnasio', 'Antigüedad': '5 años', 'Turno': 'Diurno' }
  },
  {
    id: 7,
    name: 'Sofia Lopez',
    email: 'sofia.l@gympro.com',
    role: Role.STAFF,
    avatar: 'https://picsum.photos/seed/sofia/200',
    details: { 'Posición': 'Recepcionista', 'Antigüedad': '2 años', 'Turno': 'Vespertino' }
  },
  {
    id: 8,
    name: 'Alex Dev',
    email: 'alex.dev@gympro.com',
    role: Role.DEVELOPER,
    avatar: 'https://picsum.photos/seed/alex/200',
    details: { 'Título': 'Ingeniero de Software Senior', 'Stack': 'React, TypeScript, Node.js', 'Proyecto': 'GymPro App' }
  }
];

export const INITIAL_INFO_WINDOWS: InfoWindow[] = [
    {
        id: 'nutrition-plans',
        title: 'Planes de Nutrición',
        iconName: 'ClipboardDocumentList',
        content: 'Aquí se detallan los planes de nutrición personalizados para los miembros del gimnasio. Incluye dietas para pérdida de peso, ganancia muscular y mantenimiento.'
    },
    {
        id: 'class-schedule',
        title: 'Horario de Clases',
        iconName: 'CalendarDays',
        content: 'Consulta el horario actualizado de todas las clases grupales: Yoga, Spinning, CrossFit, Zumba y más. ¡Reserva tu lugar con anticipación!'
    }
];
