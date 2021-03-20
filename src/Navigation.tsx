import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { Box, Heading } from "grommet"
import { useState } from "react"
import { BaseSectionProps } from "./BaseSectionProps"
import ChaleesHeartIcon from "./ChaleesHeartIcon"
import { heroBannerBackground, white } from "./colors"
import { defaultTransitionDuration } from "./constants"

const Header = (props: BaseSectionProps) => {
  // const isAtPageTop = false
  const [isAtPageTop, setIsAtPageTop] = useState(true)
  useScrollPosition((scroll) => {
    if (scroll.currPos.y === 0 && !isAtPageTop) {
      setIsAtPageTop(true)
    } else if (isAtPageTop) {
      setIsAtPageTop(false)
    }
  })

  return (
    <Box fill style={{ position: "relative" }}>
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100vh",
            transition: `opacity ${defaultTransitionDuration} ease`,
            opacity: isAtPageTop ? "0" : "1",
          }}
          background={heroBannerBackground}
        />
      </Box>
      <Box style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <Box
          tag="header"
          direction="row"
          align="center"
          justify="start"
          pad={{ left: "medium", right: "small", vertical: "small" }}
          elevation={isAtPageTop ? "none" : "large"}
          style={{ transition: `box-shadow ${defaultTransitionDuration} ease` }}
        >
          <Box style={{ color: "white" }}>
            <ChaleesHeartIcon />
          </Box>
          <Box width="10px" />
          <Heading level="3" margin="none" color={white} style={{ fontWeight: 400 }}>
            Chalees Minute Foundation
          </Heading>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
