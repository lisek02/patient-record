import Doctor from '../shared/doctor.model';

interface Visit {
  description: string,
  time: string,
  doctor: Doctor
}

export default Visit;
