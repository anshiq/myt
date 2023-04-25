async function UserVideos(token: string) {
const  response =await fetch('http://127.0.0.1:8080/auth/uservideos',{
  headers: {
    token: token
  }
    ,
    mode: 'cors',
    method: 'POST'
})
  return response.json()
}

export default UserVideos
