async function SignUp(name: string, email: string , password: string) {

  alert(process.env.backend_url)
const backend_url = process.env.backend_url
  alert(backend_url)
 const creds = {
      email: email,
      password: password,
      name: name,
    };
    const createAcc = await fetch(`${backend_url}/api/signup`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    return createAcc;
}

export default SignUp



