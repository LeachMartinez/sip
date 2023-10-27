import { TypeUser } from "@/types/UserType";
import { Avatar } from "@mui/material";
import styles from "./AnyProfile.module.scss";
import Button, { ButtonLabel } from "@/components/ui/Button";
import { useQuery } from "react-query";
import { authAxios } from "@/service/Api";
import Loader from "@/components/Loader";

type TypePropsMyProfile = {
  userId: number;
}

const AnyProfile: React.FC<TypePropsMyProfile> = ({ userId }) => {
  const { isLoading, isError, data, error } = useQuery('user', async () => {
    return await authAxios.get(`/user/${userId}`);
  });

  if (isLoading) return <Loader/>;  

  const user: TypeUser = data?.data;
  const avatarVariant = user.avatar ? "withAvatar" : "witoutAvatar";

  const avtarVariants: any = {
    withAvatar: <Avatar src={user.avatar!}/>,
    witoutAvatar: <Avatar>{user.username[0]}</Avatar>,
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
          <Button>Call</Button>
        </ButtonLabel>
        <ButtonLabel>
          <Button>Add to contact</Button>
        </ButtonLabel>
      </div>
    </div>
  )
}

export default AnyProfile;