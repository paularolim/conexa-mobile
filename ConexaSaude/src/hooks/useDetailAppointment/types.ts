export interface Appointment {
  id: number;
  patient: string;
  date: string;
  observation: string;
}

export interface AppointmentResponse {
  data: {
    id: number;
    medico: {
      id: number;
      nome: string;
      email: string | null;
    };
    paciente: string;
    dataConsulta: string;
    observacao: string;
  };
}
