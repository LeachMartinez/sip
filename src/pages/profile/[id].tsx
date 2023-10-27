import AuthLayout from "@/components/Layout/AuthLayout";
import Loader from "@/components/Loader";
import AnyProfile from "@/components/Profile/AnyProfile";
import MyProfile from "@/components/Profile/MyProfile";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";

const Profile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const user = useAppSelector((state) => state.user);
 
  if (user.id === 0) return  <AuthLayout><Loader/></AuthLayout>;
  
  return (
    <AuthLayout>
      {
        user.id === +id! ? <MyProfile user={user}/> : <AnyProfile userId={+id!}/>
      }
    </AuthLayout>
  );
}

export default Profile;