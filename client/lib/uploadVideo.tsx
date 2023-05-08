async function uploadVideo( formdata: FormData,token: string) {
  try {
  const response =await fetch("http://127.0.0.1:8080/upload",{
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
