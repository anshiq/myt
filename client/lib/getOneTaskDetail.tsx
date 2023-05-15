async function getOneTaskDetails(id: string) {

const backend_url = process.env.backend_url
  const bodyData = JSON.stringify({"id":id})
  const  response = await fetch(`${backend_url}/api/one`,{
    mode: 'cors',
    method: 'POST',
    body: bodyData,
    headers: {
      "Content-Type": "application/json",
    },
  }) 
  return response.json()
}

export default  getOneTaskDetails
