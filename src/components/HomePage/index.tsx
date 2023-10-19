import { useState } from "react";
import Button, { ButtonLabel } from "../ui/Button";
import Input, { InputLabel } from "../ui/form/Input";
import styles from "./HomePahe.module.scss";
import { faker } from '@faker-js/faker';
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import ContactsIcon from '@mui/icons-material/Contacts';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import { SwipeableDrawer } from "@mui/material";

type typeSipAccount = {
  name?: string,
  username: string,
  password: string,
  avatar?: string
}

const HomePage: React.FC = () => {
  const testArray: typeSipAccount[] = [];

  for(let i=0;i< 100; i++) {
    testArray.push({avatar: faker.internet.avatar(), name: faker.person.fullName(), username: faker.internet.userName(), password: faker.internet.password()});
  }

  const [sipAccounts, setSipAccounts] = useState<typeSipAccount[]>([{
    name: "leach",
    username: "test",
    password: "pwd",
    avatar: faker.internet.avatar()
  }, ...testArray]);
  
  
  const [openDrawer, setOpenDrawer] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username: string = event.currentTarget.sipUsername.value;
    const password: string = event.currentTarget.sipPassword.value;

    if (username.trim().length === 0 || password.trim().length === 0) {
      return console.log("Поля не заполнены!");
    }

    if (username.includes("@") || username.includes(".")) {
      return console.log("Недопустимое имя для сип аккаунта!");
    }

    setSipAccounts(accounts => [...accounts, { username, password} ]);
    event.currentTarget.reset();
    setModalOpen(false);
  }

  return (
    <>
      <>
        <div className={styles.header}>
          <div className={styles.header__avatar}>
            <Image 
              className={styles.header__avatar__image} 
              src={sipAccounts[0].avatar!} 
              alt="avatar"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.header__name}>
            { sipAccounts[0].name }
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
      </>

      <div className={styles.content}>    
        <div className={styles.contact}>
          <div className={styles.contact__text}>
            <span className={styles.contact__name}>{ sipAccounts[1].name }</span>
            <span className={styles.contact__username}>@{ sipAccounts[1].username }</span>
          </div>
          <div className={styles.contact__avatar}>
            <Image 
              className={styles.contact__avatar__image} 
              src={sipAccounts[1].avatar!} 
              alt="avatar"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.contact__btns}>
            <Button className={styles.contact__btn}>
              <CallIcon/>
            </Button>
            <Button className={styles.contact__btn}>
              <VideocamIcon/>
            </Button>
            <Button className={styles.contact__btn}>
              <HistoryIcon/>
            </Button>
          </div>
        </div>
      </div>


      <div className={[styles.modal, modalOpen ? styles.modal__active : null].join(" ")} >
        <form className={styles.sipform} onSubmit={handleSubmitForm}>
          <h2>Registration sip profile</h2>
          <div className={styles.formWrapper}>
            <InputLabel text="Login*">
              <Input type="text" name="sipUsername" placeholder="login"/>
            </InputLabel>
            <InputLabel text="Password*">
              <Input type="password" name="sipPassword" placeholder="password"/>
            </InputLabel>
          </div>
          <ButtonLabel>
            <Button>Create account</Button>
          </ButtonLabel>
        </form>
      </div>
    </>
  )
}

export default HomePage;


 {/* <h2>Hello, {sipAccounts[0].username}!</h2>
  <div>
    <span>Search</span>
    <Input type="password" name="sipPassword" placeholder="password"/>
  </div>
  <div className={styles.users}>
    <h2>Users:</h2>
    <div className={styles.users__list}>
    {
      sipAccounts.map(account => <div className={styles.users__list__item} key={account.username}>{account.username}</div>)
    }
  </div>
</div> */}
{/* <Button onClick={() => setModalOpen(true)}>Create account</Button> */}