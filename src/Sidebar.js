// 在app_body展示：左側欄位

import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

//先在Material-ui網站複製好要用的ＩＣＯＮ再貼上到筆記本,一次都全部複製上去
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Store";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutIcon from "@material-ui/icons/ExpandMoreOutlined";

//same 使用useSataeValue 將外部使用者資料帶入local 透過ＡＰＩ
import { useStateValue } from "./StateProvider";

function Sidebar() {
  //對應import useStataValue
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      {/* 特殊連結 SidebarRow.js ,確認SidebarRow.js有編寫內容*/}

      <SidebarRow src={user.photoURL} title={user.displayName} />

      {/* 範例暫時用直接連結圖片 */}
      {/* <SidebarRow
      src="https://media.cakeresume.com/image/upload/s--TKyX9I7p--/c_fill,g_face,h_300,w_300/v1593495134/awkwdbvwempqs1aq9pfy.jpg"
      title="我是東承"
      /> */}
      <SidebarRow Icon={LocalHospitalIcon} title="病毒中心HH" />
      <SidebarRow Icon={PeopleIcon} title="FakeBook" />
      <SidebarRow Icon={ChatIcon} title="FakeBook" />
      <SidebarRow Icon={StorefrontIcon} title="FakeBook" />
      <SidebarRow Icon={VideoLibraryIcon} title="FakeBook" />
      <SidebarRow Icon={ExpandMoreOutIcon} title="Fakebook" />
      <SidebarRow title="測試用的ＡＰＰ" />
    </div>
  );
}

export default Sidebar;
