async function DeleteVideo(id: string, token: string) {
const backend_url = process.env.backend_url
    const response = await fetch(`${backend_url}/auth/change`,{
      method: "DELETE",
      mode: 'cors',
      headers: {
        'token':token,
      'id': id
      },
    })
    return response.json()
}

export default DeleteVideo
