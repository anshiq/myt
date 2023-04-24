async function SignUp(name: string, email: string , password: string) {
 const creds = {
      email: email,
      password: password,
      name: name,
    };
    const createAcc = await fetch("http://127.0.0.1:8080/api/signup", {
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



