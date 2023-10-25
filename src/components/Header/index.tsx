import Image from "next/image";
import styles from "./Header.module.scss";
import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
import ContactsIcon from '@mui/icons-material/Contacts';
import HistoryIcon from '@mui/icons-material/History';

const Header: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.header__avatar}>
          <Image
            className={styles.header__avatar__image} 
            src={""} 
            alt="avatar"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.header__name}>
          {/* { sipAccounts[0].name } */}
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

export default Header;