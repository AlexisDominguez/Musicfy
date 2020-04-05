import React, { useState } from "react";
import firebase from "./utils/Firebase";
import "firebase/auth";
import Auth from "./pages/Auth";

function App() {
  const [user, setUser] = useState(null); // Controla el logeo de usuarois
  const [isloading, setIsLoading] = useState(true); // Controla si la página está cargando o no

  firebase.auth().onAuthStateChanged(currentUser => {
    if (!currentUser) {
      setUser(null);
    } else {
      setUser(currentUser);
    }

    setIsLoading(false);
  });

  if (isloading) {
    return null;
  }

  return !user ? <Auth /> : <UserLogged />;
}

function UserLogged() {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      <h1>Usuario Logeado</h1>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
}

export default App;
