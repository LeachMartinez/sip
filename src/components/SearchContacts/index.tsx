import styles from "./SearchContacts.module.scss";
import Loader, { LoaderWrapper } from "@/components/Loader";
import { authAxios } from "@/service/Api";
import { TypeUser } from "@/types/UserType";
import { useQuery } from "react-query";
import Input, { InputLabel } from "../ui/form/Input";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchContacts: React.FC = () => {
  const [contacts, setContacts] = useState<TypeUser[]>([{
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    isAuth: false
  }]);

  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();

  const { isLoading, isError, data, error } = useQuery("contacts", async () => {
    return await authAxios.get(`/contacts`);
  });

  useEffect(() => {
    if (!data) return;
    
    setContacts(() => data.data);
  }, [data])

  const handleApplyFilter = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    setIsFetching(() => true);
    input.disabled = true;
    const result = await authAxios.get(`/contacts?searchParams=${event.currentTarget.value}`);
    setContacts(() => result.data);
    input.disabled = false;
    input.focus();
    setIsFetching(() => false);
  }
  
  if (isLoading) return <Loader/>;

  return (
    <>
      <div className={styles.searchContacts}>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.search}>
          <InputLabel>
            Search
            <Input onChange={event => handleApplyFilter(event)}/>
          </InputLabel>
        </div>
        <div className={styles.contacts}>
          {
            contacts.map(contact => {
              return (
                <div key={contact.id} className={styles.contact} onClick={() => { router.push(`/profile/${contact.id}`) }}>
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
    <LoaderWrapper isActive={isFetching}>
      <Loader/>
    </LoaderWrapper>
  </>
  )
}

export default SearchContacts;