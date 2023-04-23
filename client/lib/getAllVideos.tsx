async function getAllVideos() {
  const  response = await fetch('http:127.0.0.1:8080/api/all')
  if(response.ok){
   // const data = await response.json()
   // console.log(data)
   // return   data
    return response.json()
  }
  else return "no data"
}

export default getAllVideos
