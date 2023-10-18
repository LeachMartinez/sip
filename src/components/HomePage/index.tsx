import { useState } from "react";
import Button, { ButtonLabel } from "../ui/Button";
import Input, { InputLabel } from "../ui/form/Input";
import styles from "./HomePahe.module.scss";
import { faker } from '@faker-js/faker';
type typeSipAccount = {
  username: string,
  password: string
}


const testArray: typeSipAccount[] = [];

for(let i=0;i< 100; i++) {
  testArray.push({username: faker.internet.userName(), password: faker.internet.password()});
}

const HomePage: React.FC = () => {
  const [sipAccounts, setSipAccounts] = useState<typeSipAccount[]>([{
    username: "test",
    password: "pwd"
  }, ...testArray]);

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
      <div className={styles.content}>
        <h2>Hello, {sipAccounts[0].username}!</h2>

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
        </div>
        <Button onClick={() => setModalOpen(true)}>Create account</Button>
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