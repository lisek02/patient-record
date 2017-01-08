interface Patient {
  first_name: string,
  last_name: string,
  email: string,
  last_login: string,
  profile: {
    birth_date: string,
    gender: string,
    address: string,
    city: string,
    zip_code: string,
    pesel: string,
    avatar: string
  }
}

export default Patient;