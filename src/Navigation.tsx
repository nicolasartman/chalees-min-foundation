import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { Box, Button, Drop, Heading } from "grommet"
import { Menu } from "grommet-icons"
import { useRef, useState } from "react"
import { BaseSectionProps } from "./BaseSectionProps"
import ChaleesHeartIcon from "./ChaleesHeartIcon"
import { heroBannerBackground, white } from "./colors"
import { defaultTransitionDuration, headerHeight } from "./constants"

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

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)

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
          }}
          background={heroBannerBackground}
        />
      </Box>
      <Box style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <Box
          tag="header"
          direction="row"
          align="center"
          justify="between"
          fill
          pad={{ horizontal: "medium", vertical: "small" }}
          elevation={isAtPageTop ? "none" : "large"}
          style={{ transition: `box-shadow ${defaultTransitionDuration} ease` }}
          ref={menuRef}
        >
          {/* Main branding */}
          <Box fill direction="row" align="center" flex="grow">
            <Box style={{ color: "white" }}>
              <ChaleesHeartIcon />
            </Box>
            <Box width="10px" />
            <Heading level="3" margin="none" color={white} style={{ fontWeight: 400 }}>
              Chalees Minute Foundation
            </Heading>
          </Box>

          {/* Additional navigation links (menu or items depending on size) */}
          <Box direction="row" justify="end">
            {props.isMobileLayout ? (
              <Button plain onClick={toggleMenu}>
                <Menu color={white} />
              </Button>
            ) : (
              <Box direction="row" gap="medium" fill="horizontal" justify="end">
                <Button
                  plain
                  color={white}
                  style={{ textAlign: "right" }}
                  onClick={() => window.location.assign("https://chaleesmin.school")}
                >
                  Library
                </Button>
              </Box>
            )}
          </Box>
          {menuIsOpen && menuRef.current ? (
            <Drop
              align={{ top: "bottom", right: "right" }}
              target={menuRef.current}
              elevation="large"
              overflow="hidden"
            >
              <Box pad={{ top: "small", bottom: "large", horizontal: "medium" }} direction="column">
                <Box
                  style={{
                    position: "absolute",
                    top: -headerHeight,
                    left: 0,
                    right: 0,
                    height: "100vh",
                    zIndex: -1,
                  }}
                  background={heroBannerBackground}
                />
                <Box direction="column" gap="medium">
                  <Button
                    plain
                    fill
                    color={white}
                    style={{ textAlign: "right" }}
                    onClick={() => window.open("https://chaleesmin.school", "_blank")}
                  >
                    Library
                  </Button>
                </Box>
              </Box>
            </Drop>
          ) : null}
        </Box>
      </Box>
    </Box>
  )
}

export default Header
