import { useState, useEffect } from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
//hooks
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useAuth } from '@/hooks/auth'

const StyledAppBar = styled(AppBar)`
  padding: 1rem;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  height: 90px;
  position: fixed;
  top: 0;
  background-color: #fff;
`
const LoginButton = styled(Button)`
  color: gray;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const HeaderGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledMenuIcon = styled(MenuIcon)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
  color: black;
`
const SpMenuTop = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledListItem = styled(ListItem)`
  border-bottom: 2px solid #dbdbdc;
  padding: 1rem 0.5rem;
`
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const router = useRouter()
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const { user } = useAuth({ middleware: 'guest' })
  const { logout } = useAuth()
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const list = anchor => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}>
      <List className="mt5">
        <ListItem
          className="p1 wi100 p-fixed bg-white z999"
          style={{
            borderBottom: '2px solid #dbdbdc',
            top: 0,
          }}>
          <SpMenuTop className="wi100">
            <CloseIcon
              onClick={toggleDrawer(anchor, false)}
              style={{ color: '#1e64c8' }}
            />
          </SpMenuTop>
        </ListItem>
        <StyledListItem>
          <Grid className="wi100" />
        </StyledListItem>
        <StyledListItem>
          <Grid style={{ width: '100%' }}>
            <Typography variant="h5" className="mb1">
              <span
                style={{
                  borderRight: '4px solid red',
                  marginRight: '1rem',
                  borderColor: 'red',
                }}
              />
              絞り込み条件
            </Typography>
          </Grid>
        </StyledListItem>
      </List>
      <Divider />
    </Box>
  )
  const login = () => {
    router.push('/login')
  }
  return (
    <StyledAppBar>
      <HeaderGrid>
        <div className="p-relative header-logo-area">
          <Link href="/">
            <img
              src="/images/admaster_logo.png"
              alt="ロゴ画像"
              className="p-relative"
              sizes="(min-width: 1024px) 211px"
              width="100%"
              height="80%"
            />
          </Link>
        </div>
        <StyledMenuIcon onClick={toggleDrawer('right', true)} />
        <div className={`fixed top-0 right-0 px-6 py-4 sm:block`}>
          {user ? (
            <>
              <LoginButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                {user.name}様
              </LoginButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}>
                {user.role === 2 && (
                  <MenuItem onClick={adminRoute}>管理画面</MenuItem>
                )}
                <MenuItem onClick={logout}>ログアウト</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <LoginButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                ゲストユーザー様
              </LoginButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={login}>ログイン</MenuItem>
              </Menu>
            </>
          )}
        </div>
      </HeaderGrid>
      <div>
        <Drawer
          transitionDuration={500}
          anchor="right"
          open={state['right']}
          onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </div>
    </StyledAppBar>
  )
}
export default Header
