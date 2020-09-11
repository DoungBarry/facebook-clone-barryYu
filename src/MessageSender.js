//載入react hook : useState//
import React, { useState } from "react";
//--------------------------------------------------------
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";
// for  div.MessageSender_bottom （下方區域）
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

//載入外部使用者資料的武器工具
import { useStateValue } from "./StateProvider";

import firebase from "firebase";
import db from "./firebase";

//------------------------------hook : useState -------------------
//useStat 是 React hook 的 功能 ： funcation component 帶入 class component //

// const [ 變數名稱 , 變數名稱的函數 ] ＝ useState  (state 變數初始值)

// const [imageUrl, setImageUrl] = useState("")

//依然發生錯誤, 去確認react.js 版本是否有支援 npm info react :16.13 abs

// react Hook 在16.8 才有支援 , 所以要更新版本
//注意，若要啟動 Hook，所有 React package 需要升級到 16.8.0 或是更高的版本。例如你忘了升級 React DOM，Hook 將無法正常執行。

// React Native 0.59 以上的版本支援 Hooks。

//this is funcation component So you connot ,declar const funcation outside .//

//重要性較低的 component 中練習使用 Hook//

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");

  // const [ tate初始值, 可以更新state的函數值 ] = useState("這裡是初始值")

  const [imageUrl, setImageUrl] = useState("");

  //------------------------------------------------

  //刷新功能非常重要;可以測試有preventDefault的差異//
  const handleSubmit = (e) => {
    e.preventDefault();

    //插入firebase ,設定資料庫連結

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    //刷新的時候將會帶入原始值的值 ,聰明的資料庫//
    setInput("");
    setImageUrl("");
  };

  //----------------------------------------------------
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} title={user.displayName} />

        {/* <Avatar src="https://media.cakeresume.com/image/upload/s--TKyX9I7p--/c_fill,g_face,h_300,w_300/v1593495134/awkwdbvwempqs1aq9pfy.jpg" /> */}
        {/* inputMessage */}

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            //form 是React的表單處理 ：
            /*React 表單元件有一個重要的屬性 value 用來設定表單元件的值。
            
            React 還提供了 onChange 屬性用來設定 callback function 來監聽 (listen) 表單元件資料狀態的變化。
            
            當 <input />, <textarea /> value 被改變時、當 <input /> 被勾選/反勾選時、或當 <option /> 被選取時，React 會執行 onChange callback 傳入一個 event object 來通知你元件的資料狀態有被改變。
            
            */

            // type="text"
            className="messageSender_input"
            placeholder={"what is your mind "}
          />

          <input
            value={imageUrl}
            // type="text"
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (option)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="className messageSender_option">
          <VideoLibraryIcon style={{ color: "red" }} />
          <h3>Live video </h3>
        </div>

        <div className="className messageSender_option">
          {" "}
          <PhotoLibraryIcon style={{ color: "green " }} />
          <h3>green </h3>
        </div>

        <div className="className messageSender_option">
          {" "}
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>orange</h3>
        </div>

        {/* iconVideo */}
      </div>
    </div>
  );
}

export default MessageSender;
