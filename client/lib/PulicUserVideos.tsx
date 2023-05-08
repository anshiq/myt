const PulicUserVideos = async(UserID: string)=>{
  const userData = JSON.stringify({"user": UserID})
  const response = await fetch("http://127.0.0.1:8080/api/oneTaskUser",{
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
