import * as React from "react"
import Header from "./header"

interface Props {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <>
      <Header siteTitle={pageTitle ?? `Page Title`} />
      <main>{children}</main>
      {/* Page footer goes here - not included in challenge*/}
    </>
  )
}

export default Layout
