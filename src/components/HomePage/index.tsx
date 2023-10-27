import { useState } from "react";
import Button from "../ui/Button";
import styles from "./HomePahe.module.scss";
import { faker } from '@faker-js/faker';
import Image from "next/image";
import HistoryIcon from '@mui/icons-material/History';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';

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
  
  return (
    <>
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
            <Button className={[styles.contact__btn, styles.contact__btn__call].join(" ")}>
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