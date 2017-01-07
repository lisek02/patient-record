import Doctor from '../shared/doctor.model';

interface Examination {
  name: string,
  time: string,
  doctor: Doctor,
  test_images: [
    {
      description: string,
      image: string,
      summary: string
    }
  ],
  test_entries: [
    {
      name: string,
      unit: string,
      value: string
    }
  ]
}

export default Examination;
