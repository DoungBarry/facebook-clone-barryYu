// 在app_body展示：中間的動態的區塊
import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReal from "./StoryReal";
import MessageSender from "./MessageSender";
import Post from "./Post";

//加入firebaseDB
import db from "./firebase";

// <Post
//       profilePic="https://zh.wikipedia.org/wiki/File:%E8%94%A1%E8%8B%B1%E6%96%87%E5%AE%98%E6%96%B9%E5%85%83%E9%A6%96%E8%82%96%E5%83%8F%E7%85%A7.png"
//       image="https://images.unsplash.com/photo-1477910191212-980963d84632?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=henry-co-PkusBfG84_c-unsplash.jpg&w=640"
//       username="BarryYu"
//       timestamp="2020/09/10"
//       message="wow this is work "
//     />

function Feed() {
  //連結fireBase 可以創建一個setPost 讓其可以有空組件使用 //
  const [posts, setPosts] = useState([]);

  //透過這裡去訪問數據庫收集 ///////// 很重要 ///////////
  useEffect(() => {
    //使用快照--備取
    db.collection("posts")
      //讓欄位按照時間排序
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  //設定快照的時間作為開始
  //snapshot.docs 將會獲得一系列文本,是從firebase那的數據庫快照後取得.
  // doc ,,data     doc.data 都是指全部資料
  //docs 在是全部資料   setPost的資料是透過快照數據庫.全部的資料.連結(當中doc是各別每個單一筆資料的id , 全部資料data.doc)

  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />
      {/* Feed 上面要有兩個元件製作*/}
      {/* 建立故事區 */}
      {/* 建立訊息傳送區 */}
      {/* profilePic, image, username, timestamp, message */}
      {/* Post 組件 是用來傳送messageSender的內容 */}
      {posts.map((post) => (
        <Post
          key={post.id}
          image={post.data.image}
          message={post.data.message}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          username={post.data.username}
        />
      ))}
    </div>
  );
}

export default Feed;
