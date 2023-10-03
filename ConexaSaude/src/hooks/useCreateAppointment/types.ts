export interface CreateAppointment {
  patient: string;
  date: string;
  observation: string;
}

export interface CreateAppointmentResponse {
  data: {
    id: number;
    medico: {
      id: number;
      nome: string;
      email: string;
    };
    paciente: string;
    dataConsulta: string;
    observacao: string;
  };
}
