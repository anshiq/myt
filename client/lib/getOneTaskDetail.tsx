async function getOneTaskDetails(id: string) {
  const bodyData = JSON.stringify({"id":id})
  const  response = await fetch('http:127.0.0.1:8080/api/one',{
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
