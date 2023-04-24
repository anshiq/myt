async function Login(email:string, password :string) {
  const bodyContent = {
    "email": email,
    "password" : password
  }
  const response = await fetch('http://127.0.0.1:8080/api/login',{
    body:JSON.stringify( bodyContent),

    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const token = await response.json()
  return  token


}

export default Login
