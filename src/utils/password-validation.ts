

export const isStrongPassword = (password:string) => {
  // password length must be more than 6 
  if(password.length <6){
    return false;
  }

  // password must contain a lower case letter
  if(!/[a-z]/.test(password)){
    return false;
  }
  // password must contain upper case letter
  if(!/[A-Z]/.test(password)){
    return false
  }

  // password must contain atleast one digit
  if(!/\d/.test(password)){
    return false
  }

  // password must contain special character
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    return false;
  }

  // if all checks pass, password is valid
  return true;
}
