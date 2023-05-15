async function UserVideos(token: string) {

const backend_url = process.env.backend_url
const  response =await fetch(`${backend_url}/auth/uservideos`,{
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
