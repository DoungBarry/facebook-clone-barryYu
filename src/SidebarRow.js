//  插入 sidbar 欄位的icon component 
import React from 'react'
import './SidebarRow.css'
import { Avatar } from '@material-ui/core'
// import { Icon, Avatar, title } from '@material-ui/core'


//在sidebarRow 的函數內設置引數 
function SidebarRow({ src, Icon, title }) {
  return (
    <div className='sidebarRow'>

      {/* 設定Ａvatar , Icon 物件 置入sidebar  */}

      {src && <Avatar src={src} />}

      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
