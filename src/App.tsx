import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { base, Box, Grommet, Heading, Image, ResponsiveContext, ThemeType } from "grommet"
import { deepMerge } from "grommet/utils"
import React, { useState } from "react"
import { BaseSectionProps } from "./BaseSectionProps"
import ChaleesHeartIcon from "./ChaleesHeartIcon"
import { almostWhite, heroBannerBackground, red, white } from "./colors"
import ExploreQuestionsSection from "./ExploreQuestionsSection"
import SectionContainer from "./SectionContainer"
import SelectedQuestionsSection from "./StudentQuestionsSection"

const defaultTransitionDuration = "0.3s"

const theme = deepMerge<ThemeType, ThemeType>(base, {
  global: {
    colors: {
      background: almostWhite,
      brand: red,
      accent: red,
    },
    font: {
      family:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, ' +
        'Ubuntu, Cantarell,"Helvetica Neue",sans-serif;',
      size: "18px",
    },
    breakpoints: {
      mediumSmall: {
        value: 1200,
      },
    },
  },
  heading: {
    extend: {
      margin: 0,
    },
  },
})

const headerHeight = 60

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
            opacity: !props.isMobileLayout && isAtPageTop ? "0" : "1",
          }}
          background={heroBannerBackground}
        />
      </Box>
      <Box style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <Box
          tag="header"
          direction="row"
          align="center"
          justify={props.isMobileLayout ? "center" : "start"}
          pad={{ left: "medium", right: "small", vertical: "small" }}
          elevation={!props.isMobileLayout && isAtPageTop ? "none" : "large"}
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

const HeroBanner = () => (
  <Box
    direction="row"
    flex
    overflow={{ horizontal: "hidden" }}
    background={heroBannerBackground}
    style={{ minHeight: "100vh", height: "100vh" }}
  >
    <Box
      fill
      direction={"row"}
      align="center"
      justify="center"
      gap="medium"
      pad={{ horizontal: "20px" }}
    >
      <Box align="end" pad={{ right: "40px" }} data-dev="text">
        <Box align={"start"} justify="start" direction="column" fill="horizontal">
          <Box fill="horizontal" align="center">
            <Heading
              level={1}
              margin="0"
              style={{ lineHeight: "1.25em" }}
              textAlign="start"
              color="white"
            >
              <Box style={{ lineHeight: "normal", fontSize: 25, fontWeight: 400 }}>
                We train teachers to promote student
              </Box>
              <Box height="10px" />

              <Box style={{ fontSize: 60 }}>
                <span>
                  Critical Thinking, <br />
                  Curiosity, <span style={{ fontWeight: 300 }}>and</span> <br />
                  Communication
                </span>
              </Box>
              <Box
                pad={{ top: "5px" }}
                style={{
                  fontSize: 25,
                  lineHeight: "normal",
                  fontWeight: "normal",
                }}
              >
                —Skills listed emphatically in the National Education Policy 2020.
              </Box>
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box
        elevation="medium"
        style={{
          position: "relative",
          width: "calc((100vh - 40px) * 9/16)",
          height: "calc(100vh - 40px)",
        }}
      >
        <iframe
          title="Student Driven Learning"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={`https://www.youtube.com/embed/3LHpE-rEZjM`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Box>
  </Box>
)

const MobileHeroBanner = () => (
  <Box
    direction="row"
    flex
    overflow={{ horizontal: "hidden" }}
    background={heroBannerBackground}
    style={{ height: "100vh" }}
  >
    <Box
      fill
      direction="column"
      align="center"
      justify="center"
      gap="large"
      pad={{ vertical: `${headerHeight + 60}px` }}
    >
      <Box align="end" pad={{ right: "40px" }} data-dev="text">
        <Box align={"center"} justify="start" direction="column" fill="horizontal">
          <Box fill="horizontal" align="center">
            <Heading level={2} margin="0" textAlign="center" color="white">
              <Box style={{ lineHeight: "normal", fontSize: "0.5em", fontWeight: 400 }}>
                We train teachers to promote student
              </Box>
              <Box height="10px" />
              <Box style={{ fontSize: 32 }}>Critical Thinking, Curiosity, and Communication</Box>
              <Box
                style={{
                  fontSize: 20,
                  fontWeight: "normal",
                  lineHeight: "1.2em",
                  fontStyle: "italic",
                }}
              >
                Skills listed emphatically in the National Education Policy 2020.
              </Box>
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box
        elevation="medium"
        style={{
          position: "relative",
          width: "calc((100vh - 40px) * 9/16)",
          height: "calc(100vh - 40px)",
        }}
      >
        <iframe
          title="Student Driven Learning"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={`https://www.youtube.com/embed/3LHpE-rEZjM`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Box>
  </Box>
)

type CardProps = {
  title: string
  text: string
  pictureSource: string
}

const howWeWorkCardPictureSize = 100
const HowWeWorkCard = (props: CardProps) => (
  <Box direction="row" fill="horizontal">
    <Box direction="row" align="start" flex="grow" pad={{ right: "20px" }}>
      <Image
        height={howWeWorkCardPictureSize}
        width={howWeWorkCardPictureSize}
        src={props.pictureSource}
      />
    </Box>
    <Box direction="column" fill="horizontal">
      <Heading level="3" margin="0">
        {props.title}
      </Heading>
      <Box>{props.text}</Box>
    </Box>
  </Box>
)

const HowWeWorkSection = (props: BaseSectionProps) => (
  <SectionContainer flex="grow">
    <Box pad={{ horizontal: "40px" }}>
      <Box direction="column" fill="horizontal" align="start">
        <Heading level={2} margin="0">
          How we work
        </Heading>
        <Box fill>After our teachers have taught a chapter from the textbook, our...</Box>
      </Box>
      <Box height="20px" />
      <Box direction="column" gap="40px" pad={{ vertical: "medium" }} align="start">
        <Box fill="horizontal">
          <HowWeWorkCard
            title="Students ask questions"
            text="on a topic they just finished reading from the book; a question that is interesting to them."
            pictureSource="https://placekitten.com/50/50"
          />
        </Box>
        <Box fill="horizontal">
          <HowWeWorkCard
            title="Students conduct research"
            text="by asking an older sibling, or by reading a book from the library, or by searching the Internet."
            pictureSource="https://placekitten.com/50/50"
          />
        </Box>
        <Box fill="horizontal">
          <HowWeWorkCard
            title="Students present answers"
            text="by coming in front of class and teaching their peers, or by making short videos."
            pictureSource="https://placekitten.com/50/50"
          />
        </Box>
      </Box>
    </Box>
  </SectionContainer>
)

const App = () => {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobileLayout = size === "mediumSmall" || size === "small"

          return (
            <Box fill>
              {/* Header */}
              <Box
                fill="horizontal"
                direction="column"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: headerHeight,
                  zIndex: 1,
                }}
              >
                <Header isMobileLayout={isMobileLayout} />
              </Box>

              {/* Hero section */}
              {isMobileLayout ? <MobileHeroBanner /> : <HeroBanner />}

              <HowWeWorkSection isMobileLayout={isMobileLayout} />

              <SelectedQuestionsSection isMobileLayout={isMobileLayout} />

              <ExploreQuestionsSection size={size} />

              <Box pad="xlarge">some other content</Box>
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
      )
    </Grommet>
  )
}

export default App
