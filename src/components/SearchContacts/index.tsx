import styles from "./SearchContacts.module.scss";
import Loader from "@/components/Loader";
import { authAxios } from "@/service/Api";
import { TypeUser } from "@/types/UserType";
import { useQuery } from "react-query";
import Input, { InputLabel } from "../ui/form/Input";
import { Avatar } from "@mui/material";

const SearchContacts: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery("contacts", async () => {
    return await authAxios.get(`/contacts`);
  });
  
  if (isLoading) return <Loader/>;

  const contacts = data?.data as TypeUser[];
 
  return (
    <div className={styles.searchContacts}>
      <h2 className={styles.title}>Contacts</h2>
      <div className={styles.search}>
        <InputLabel>
          Search
          <Input/>
        </InputLabel>
      </div>
      <div className={styles.contacts}>
        {
          contacts.map(contact => {
            return (
              <div key={contact.id} className={styles.contact}>
                <Avatar src={contact.avatar}/>
                <div className={[styles.contact__info, styles.contact__name].join(" ")}>
                    <span className={styles.contact__username}>
                      @{contact.username}
                    </span>
                    {contact.firstName} {contact.lastName}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchContacts;