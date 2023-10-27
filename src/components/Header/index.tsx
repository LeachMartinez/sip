import Image from "next/image";
import styles from "./Header.module.scss";
import { Avatar, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
import ContactsIcon from '@mui/icons-material/Contacts';
import HistoryIcon from '@mui/icons-material/History';
import { useAppSelector } from "@/redux/hooks";

const Header: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const user = useAppSelector((state) => state.user);

  let avatarType = "isNotAuth";
  if (user.isAuth && user.avatar) avatarType = "isAuthWithAvatar";
  if (user.isAuth && !user.avatar) avatarType = "isAuthWitoutAvatr";

  const avtarVariants: any = {
    isAuthWithAvatar: <HeaderImage src={user.avatar!}/>,
    isAuthWitoutAvatr: <Avatar>{user.username[0]}</Avatar>,
    isNotAuth: <Avatar>G</Avatar>
  }

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.header__avatar}>
          {avtarVariants[avatarType]}
        </div>
        <div className={styles.header__name}>
          { user.isAuth ? user.username : "Hello, Guest!" }
        </div>
        <div className={styles.header__menu} onClick={() => setOpenDrawer(true)}>
          <MenuIcon />
        </div>
      </div>

      <SwipeableDrawer
        className={styles.header__menuList__drawer}
        anchor={"bottom"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={
          {
            '& .MuiPaper-root ': {
              borderRadius: '50px 50px 0 0',
            }
          }
        }
      >
        <ul className={styles.header__menuList}>
          <li className={styles.header__menuItem}> <HouseIcon/> Home</li>
          <li className={styles.header__menuItem}> <SearchIcon/> Search</li>
          <li className={styles.header__menuItem}> <HistoryIcon/> Histroy</li>
          <li className={styles.header__menuItem}> <ContactsIcon/> Contacts</li>
        </ul>
      </SwipeableDrawer>
    </header>
  )
}

const HeaderImage: React.FC<{src: string}> = ({src}) => {
  return (
    <Image
      className={styles.header__avatar__image} 
      src={src} 
      alt="avatar"
      width={50}
      height={50}
    />
  )
}

export default Header;