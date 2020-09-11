import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
//這裡是使用者自己的資料//
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{ state }, dispatch] = useStateValue();
  //dispatch 就像一把槍可以射擊,拍攝很多動作,記錄登入使用者的過程

  const signIn = () => {
    //sing in ...

    //先在firebase.js  先定義auth //
    //建立登入認證//
    auth
      //Popup 彈出視窗
      .signInWithPopup(provider)
      .then((result) => {
        //注意物件裡面要用逗號分開
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

        //實際上這些數據在登入google 認證後會映射到 app.js

        // console.log(result.user);
      })

      //當登入的時候

      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />

        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In 登入
      </Button>
    </div>
  );
}

export default Login;
