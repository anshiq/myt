async function Login(email:string, password :string) {

const backend_url = process.env.backend_url
  const bodyContent = {
    "email": email,
    "password" : password
  }
  const response = await fetch(`${backend_url}/api/login`,{
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
