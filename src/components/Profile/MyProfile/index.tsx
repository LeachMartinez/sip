import { TypeUser } from "@/types/UserType";
import { Avatar } from "@mui/material";
import styles from "./Profile.module.scss";
import Button, { ButtonLabel } from "@/components/ui/Button";

type TypePropsMyProfile = {
  user: TypeUser;
}

const MyProfile: React.FC<TypePropsMyProfile> = ({ user }) => {
  const avatarVariant = user.avatar ? "isAuthWithAvatar" : "isAuthWitoutAvatr";

  const avtarVariants: any = {
    isAuthWithAvatar: <Avatar src={user.avatar!}/>,
    isAuthWitoutAvatr: <Avatar>{user.username[0]}</Avatar>,
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profile__avatar__wrapper}>
        { avtarVariants[avatarVariant] }
      </div>

      <div className={styles.profile__info__wrapper}>
        <span className={styles.profile__info__name}>
          {user.firstName} {user.lastName}
        </span>
        <span className={styles.profile__info__email}>
          {user.email}
        </span>
      </div>

      <div className={styles.profile__social}>
        <span>Contacts: 30</span>
        <span>Photos: 30</span>
      </div>

      <div className={styles.profile__buttons}>
        <ButtonLabel>
          <Button>Contacts</Button>
        </ButtonLabel>
        <ButtonLabel>
          <Button>Edit profile</Button>
        </ButtonLabel>
      </div>
    </div>
  )
}

export default MyProfile;