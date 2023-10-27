import { PropsWithChildren } from "react"
import Header from "../Header";
import Meta from "./MetaLayout";
const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Meta>
        <Header/>
        {children}
      </Meta>
    </>
  )
}

export default Layout;