import Image from "next/image"
import * as React from "react"

interface Props {
  siteTitle: string
}

const Header = React.memo(({ siteTitle }: Props) => (
  <header
    style={{
      alignItems: "center",
      display: "flex",
      height: "124px",
      width: "100%",
    }}
    title={siteTitle}
  >
    <Image
      alt="Dovetail"
      height={32}
      src="/logo.svg"
      style={{ marginLeft: "32px", filter: "brightness(0) invert(1)" }}
      width={29}
    />
  </header>
))

export default Header
