import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

// import MessageSender from './MessageSender';

function App() {
  //將state 的數據層導入成user
  //const [state,dispatch ] = useStatValue()
  //此時將會成功跳出google 登入認證頁面

  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM naming conveting
    //透過login 會將資料推送到 資料（data layer )
    //每個組件都是一個datalayer
    // Data Layer -----------------------
    //這邊開始是 redux 可以響應/
    //react-content-api //
    //創建登入頁面： !user? 這個是一個條件問題 XXX
    //    XXX ?（ture）：（false）

    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          {/* //插入將要登入後出現的頁面 // */}
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            {/* <Feed /> */}
            {/* Headers */}
            {/* Sidebar */}
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );

  // 登入後的首頁
  // <Header />
  //   <div className="app_body">
  //     <Sidebar />
  //     <Feed />
  //     {/* <Feed /> */}
  //     {/* Headers */}
  //     {/* Sidebar */}
  //     <Widgets />
  //   </div>
}

export default App;
