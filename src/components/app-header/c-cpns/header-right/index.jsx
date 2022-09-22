import React, { memo } from 'react'
import AvatarSvg from '../../../../assets/svg/avatar-svg'
import GolbalSvg from '../../../../assets/svg/global-svg'
import MenuSvg from '../../../../assets/svg/menu-svg'
import { RightWrapper } from './style'
import { Box, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material"
import { useState } from 'react'
import { useEffect } from 'react'

const HeaderRight = memo(() => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    window.addEventListener("click", () => {
      setIsShow(false)
    }, true)
  })

  return (
    <RightWrapper>
      <div className="login">登录</div>
      <div className="register">注册</div>
      <div className="global">
        <GolbalSvg />
      </div>
      <div className="profile">
        <div onClick={() => setIsShow(true)}>
          <MenuSvg />
        </div>
        <AvatarSvg/>
      </div>
      {
        isShow && <Box sx={{ position: "absolute", top: "52px", right: 0, width: '240px', borderRadius: "16px", boxShadow: "0 2px 2px 2px #48484888", fontSize: "14px", bgcolor: 'background.paper' }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="注册" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="登录" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="出租房源" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="开展体验" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="帮助" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      }
    </RightWrapper>
  )
})

export default HeaderRight