import React from 'react'
import "./Widgets.css"
function Widgets() {
  return (
    <div className="widgets">

      {/* 
      直接到臉書的粉絲專頁外掛程式下載程式編碼ㄑ */}
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%E6%B8%B8%E6%9D%B1%E6%89%BF-682028838843621%2F&tabs=timeline&width=340&height=1000&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        //----手動輸入要更改遷入網頁的參數----
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        //透明
        allowTransparency="true"
        //插入影片允許如何播放？ 
        //encrypted-media 加密播放
        allow="encrypted-media"
        //---------------------------------
        //關閉編筐
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Widgets;


{/* //iframe 是將其他一部分的網頁嵌入

//我們的網頁,, 這是他的本質. abs

//寬度340 高度100% */}

