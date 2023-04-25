async function DeleteVideo(id: string, token: string) {

    const response = await fetch("http://127.0.0.1:8080/auth/change",{
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
