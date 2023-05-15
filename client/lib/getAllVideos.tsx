async function getAllVideos() {

const backend_url = process.env.backend_url
  const  response = await fetch(`${backend_url}/api/all`,{cache: 'no-store'})
  if(response.ok){
   // const data = await response.json()
   // //console.log(data)
   // return   data
    return response.json()
  }
  else return "no data"
}

export default getAllVideos
