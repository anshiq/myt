const PulicUserVideos = async(UserID: string)=>{

const backend_url = process.env.backend_url
  const userData = JSON.stringify({"user": UserID})
  const response = await fetch(`${backend_url}/api/oneTaskUser`,{
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: userData,
    method: "POST"
  })
return response.json()
}
export default PulicUserVideos;
