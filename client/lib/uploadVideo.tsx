async function uploadVideo( formdata: FormData,token: string) {

const backend_url = process.env.backend_url
  try {
  const response =await fetch(`${backend_url}/upload`,{
    method: "POST",
    headers: {
      'token':token
    },
    body: formdata
  })
  if (response.ok){
    alert("files uploaded successfully")
   window.location.replace('/user')
  }
    else{
      alert("server side problem")
    }
  } catch (error) {
   alert("problem while uploading file")  
  }

}

export default uploadVideo
