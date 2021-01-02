import { Box, Button, Grommet, Heading, ResponsiveContext } from "grommet"
import { Notification } from "grommet-icons"
import { deepMerge } from "grommet/utils"
import React from "react"
import { almostWhite, purpleRedGradient, red } from "./colors"
import ResponsiveYouTubeEmbed from "./ResponsiveYouTubeEmbed"

const theme = deepMerge({
  global: {
    colors: {
      background: almostWhite,
      brand: red,
      accent: red,
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
    breakpoints: {
      mediumSmall: {
        value: "1200",
      },
    },
  },
})

const AppBar: React.FC = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="white"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="large"
    style={{ zIndex: 1 }}
    {...props}
  />
)

const headerHeight = 60

const App = () => {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => {
          const shouldHeroCollapse = size === "mediumSmall" || size === "small"
          return (
            <Box fill>
              <Box
                fill="horizontal"
                direction="column"
                style={{ position: "absolute", top: 0, left: 0, height: headerHeight }}
              >
                <AppBar>
                  <Heading level="3" margin="none" color={red}>
                    Chalees Minute Foundation
                  </Heading>
                  <Button icon={<Notification />} />
                </AppBar>
              </Box>

              {/* Hero section */}
              <Box
                direction="row"
                flex
                overflow={{ horizontal: "hidden" }}
                pad={{ top: `${headerHeight}px` }}
                background={purpleRedGradient}
                style={{ minHeight: "100vh", height: "100vh", maxHeight: "800px", flexShrink: 0 }}
              >
                <Box
                  fill
                  direction={shouldHeroCollapse ? "column" : "row"}
                  align="center"
                  justify="center"
                  pad="xlarge"
                  gap="large"
                >
                  <Box fill="horizontal" align="end">
                    <Box
                      align={shouldHeroCollapse ? "center" : "start"}
                      justify="start"
                      direction="column"
                      fill="horizontal"
                    >
                      <Box fill="horizontal" align="center">
                        <Heading
                          level={shouldHeroCollapse ? 2 : 1}
                          margin="0"
                          style={{ lineHeight: "1.25em" }}
                          textAlign={shouldHeroCollapse ? "center" : "start"}
                          color="white"
                        >
                          <span style={{ fontSize: "0.5em", fontWeight: 400 }}>
                            We train teachers to promote student
                            <br />
                          </span>
                          {shouldHeroCollapse ? (
                            <span style={{ fontSize: 32 }}>
                              Critical Thinking, Curiosity, and Communication
                            </span>
                          ) : (
                            <span style={{ fontSize: 60 }}>
                              Critical Thinking, <br />
                              Curiosity, <span style={{ fontWeight: 300 }}>and</span> <br />
                              Communication
                            </span>
                          )}
                        </Heading>
                      </Box>
                    </Box>
                  </Box>
                  <Box fill="horizontal">
                    <Box elevation="medium">
                      <ResponsiveYouTubeEmbed
                        videoId="3LHpE-rEZjM"
                        title="Student Driven Learning"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box pad="xlarge">some other content</Box>
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App
