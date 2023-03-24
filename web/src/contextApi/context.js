import React, { createContext } from "react";
const Jwt = createContext();
const CredContext = createContext();
const VideoContext = createContext();
const UserContext = ({ children }) => {
  // this function can never be async ...... but its children can ....
  const signup = async (email, password, name) => {
    const creds = {
      email: email,
      password: password,
      name: name,
    };
    const createAcc = await fetch("http://127.0.0.1/api/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    return createAcc;
  };
  const login = async (email, password) => {
    const creds = {
      email: email,
      password: password,
    };
    const loginAcc = await fetch("http://127.0.0.1/api/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    const { token, login } = loginAcc;
    if (login) {
      localStorage.setItem("jwt_verify_token", token);
      return login;
    }
  };
  return (
    <CredContext.Provider value={{ signup, login }}>
      {children}
    </CredContext.Provider>
  );
};

const VidContext = ({ children }) => {
  const UploadVid = async (vidData) => {
    try {
      const response = await fetch("http://localhost/upload", {
        method: "POST",
        body: vidData,
      });

      if (response.ok) {
        alert("Files uploaded successfully!");
      } else {
        alert("Failed to upload files");
      }
    } catch (error) {
      alert(`Error uploading files: ${error}`);
    }
  };
  const getAllVideos = async () => {
    try {
      const videosData = await fetch("http://127.0.0.1/api/all", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      const {} = videosData;
    } catch (error) {}
  };
  return (
    <VideoContext.Provider value={{ UploadVid, getAllVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

const Jwt_context = ({ children }) => {
  const details = async () => {
    const Jwt_token = localStorage.getItem("jwt_verify_token");
    const user = await fetch("http://127.0.0.1/auth/getDetails", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: Jwt_token }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    return user;
  };

  return <Jwt.Provider value={{ details }}>{children}</Jwt.Provider>;
};
export { UserContext, VidContext, VideoContext, CredContext, Jwt, Jwt_context };
