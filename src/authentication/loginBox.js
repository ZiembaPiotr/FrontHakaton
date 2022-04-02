import React, {useState} from "react";
import {logIn} from "../services/logIn";
import {getToken} from "../services/getToken";
import {useHistory} from "react-router-dom";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (sessionStorage.getItem(email)) {
      alert("User already logged!");
      return;
    }
    const userData = await logIn(email, password);
    if (!userData) return;
    //setPlayerData([userData, true]);
    const token = await getToken(email, password);
    if (!token.jwtToken) {
      //setPlayerData({}, false);
      alert("Failed to authenticate user!");
      return;
    }
    history.push("/add_announcement");
    //sessionStorage.setItem(email, token.jwtToken);
  }

  function handleLogOut(e) {
    e.preventDefault();
    //sessionStorage.removeItem(playerData[0].email);
    setEmail("");
    setPassword("");
    //setPlayerData([{}, false]);
  }

  return (
    <form id="loginForm">
        <>
          <input
            type="text"
            id="email"
            className="fadeIn second"
            name="email"
            placeholder="email"
            value={email}
            onChange={onEmailChange}
          />{" "}
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            value={password}
            onChange={onPasswordChange}
          />
          <input
            type="button"
            className="fadeIn fourth"
            value="Log In"
            onClick={handleLogin}
          />
        </>
    </form>
  );
};

export default LoginBox;