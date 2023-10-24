
import { PropsWithChildren } from 'react';

// export const getServerSideProps = withSession(
//   async (req, res) => {
//     const user = req.session.get('user');

//     if (!user) {
//       return {
//         redirect: {
//           destination: '/login',
//           permanent: false,
//         },
//       };
//     }

//     return {
//       props: {
//         user,
//       },
//     };
//   }
// );

const AuthLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
    </>
  )
}
export default AuthLayout;