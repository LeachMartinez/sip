import Button, { ButtonLabel } from "@/components/ui/Button";
import Input, { InputLabel } from "@/components/ui/form/Input";
import styles from "./SignIn.module.scss";
import Layout from "@/components/Layout";
import Autohrization from "@/service/Autohrization";

const SignIn: React.FC = () => {
  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username: string = event.currentTarget.username.value;
    const password: string = event.currentTarget.password.value;
    const auth = new Autohrization(username, password);
    const tokens = await auth.execute();
    auth.saveTokens(tokens);
  }

  return (
    <Layout>
      <form className={styles.signIn} onSubmit={handleSubmitForm}>
        <h2 className={styles.signIn__header}>Autohrization</h2>
        <div className={styles.signIn__inputs}>
          <InputLabel text="Username or email address">
            <Input type="text" name="username"/>
          </InputLabel>
          <InputLabel text="Password">
            <Input type="password" name="password"/>
          </InputLabel>
        </div>
        <ButtonLabel>
          <Button>Sign In</Button>
        </ButtonLabel>
      </form>
    </Layout>
  ) 
}

export default SignIn;