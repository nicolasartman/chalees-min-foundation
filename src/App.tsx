import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { Box, Grommet, Heading, Image, Markdown, ResponsiveContext } from "grommet"
import { deepMerge } from "grommet/utils"
import React, { useState } from "react"
import { isModifier } from "typescript"
import { almostWhite, heroBannerBackground, purple, red, white } from "./colors"
import ResponsiveYouTubeEmbed from "./ResponsiveYouTubeEmbed"

type BaseSectionProps = {
  isMobileLayout: boolean
}

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

const headerHeight = 60

const Header = () => {
  const [isAtPageTop, setIsAtPageTop] = useState(true)
  useScrollPosition((scroll) => {
    if (scroll.currPos.y === 0 && !isAtPageTop) {
      setIsAtPageTop(true)
    } else if (isAtPageTop) {
      setIsAtPageTop(false)
    }
  })

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="center"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation={isAtPageTop ? "none" : "large"}
      style={{ transition: "box-shadow 0.3s ease" }}
    >
      <Heading level="3" margin="none" color={white} style={{ fontWeight: 400 }}>
        Chalees Minute Foundation
      </Heading>
    </Box>
  )
}

const HeroBanner = (props: BaseSectionProps) => (
  <Box
    direction="row"
    flex
    overflow={{ horizontal: "hidden" }}
    pad={{ top: `${headerHeight}px` }}
    background={heroBannerBackground}
    style={{ minHeight: "100vh", height: "100vh" }}
  >
    <Box
      fill
      direction={props.isMobileLayout ? "column" : "row"}
      align="center"
      justify="center"
      pad="xlarge"
      gap="large"
    >
      <Box fill="horizontal" align="end">
        <Box
          align={props.isMobileLayout ? "center" : "start"}
          justify="start"
          direction="column"
          fill="horizontal"
        >
          <Box fill="horizontal" align="center">
            <Heading
              level={props.isMobileLayout ? 2 : 1}
              margin="0"
              style={{ lineHeight: "1.25em" }}
              textAlign={props.isMobileLayout ? "center" : "start"}
              color="white"
            >
              <Box style={{ lineHeight: "normal", fontSize: "0.5em", fontWeight: 400 }}>
                We train teachers to promote student
              </Box>
              <Box height="10px" />
              {props.isMobileLayout ? (
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
          <ResponsiveYouTubeEmbed videoId="3LHpE-rEZjM" title="Student Driven Learning" />
        </Box>
      </Box>
    </Box>
  </Box>
)

type CardProps = {
  title: string
  text: string
  pictureSource: string
}

const cardPictureSize = 100
const HowWeWorkCard = (props: CardProps) => (
  <Box direction="row" fill="horizontal">
    <Box direction="row" align="center" flex="grow" pad={{ right: "20px" }}>
      <Image height={cardPictureSize} width={cardPictureSize} src={props.pictureSource} />
    </Box>
    <Box direction="column" fill="horizontal">
      <Heading level="5" margin="0">
        {props.title}
      </Heading>
      <Box>{props.text}</Box>
    </Box>
  </Box>
)

const HowWeWorkSection = (props: BaseSectionProps) => (
  <Box direction="column" pad="xlarge" fill="horizontal" flex="grow">
    <Box direction="column" fill="horizontal" align="center">
      <Heading level="2">How we work </Heading>
      <Heading level="4" fill>
        After our teachers have taught a chapter from the textbook, our...
      </Heading>
    </Box>
    <Box
      direction={props.isMobileLayout ? "column" : "row"}
      gap="20px"
      pad={{ vertical: "medium" }}
      align="center"
    >
      <HowWeWorkCard
        title="Students ask questions"
        text="on a topic they just finished reading from the book; a question that is interesting to them."
        pictureSource="https://placekitten.com/50/50"
      />
      <HowWeWorkCard
        title="Students conduct research"
        text="by asking an older sibling, or by reading a book from the library, or by searching the Internet."
        pictureSource="https://placekitten.com/50/50"
      />
      <HowWeWorkCard
        title="Students present answers"
        text="by coming in front of class and teaching their peers, or by making short videos."
        pictureSource="https://placekitten.com/50/50"
      />
    </Box>
  </Box>
)

type StudentQuestionCardProps = {
  subject: string
  text: string
  videoId: string
  videoTitle: string
}

const StudentQuestionCard = (props: StudentQuestionCardProps) => (
  <Box direction="row">
    <Box direction="column">
      <Heading level="4">{props.subject}</Heading>
      <Markdown>{props.text}</Markdown>
    </Box>
    <Box>
      <ResponsiveYouTubeEmbed title={props.videoTitle} videoId={props.videoId} />
    </Box>
  </Box>
)

const SelectedQuestionsSection = (props: BaseSectionProps) => (
  <Box direction="column" pad="xlarge" fill="horizontal" flex="grow" background={purple}>
    <Box direction="column" fill="horizontal" align="center">
      <Heading level="2">Selected Student Questions </Heading>
    </Box>
    <Box
      direction={props.isMobileLayout ? "column" : "row"}
      gap="20px"
      pad={{ vertical: "medium" }}
      align="center"
    >
      <StudentQuestionCard
        subject="Science"
        text={`
After reading a chapter on **Nutrition**, an 11-year old student asked:

Why do we feel hungry after physical activity?
        `}
        videoId="123"
        videoTitle="Why do we feel hungry?"
      />
      <StudentQuestionCard
        subject="Maths"
        text={`
After reading a chapter on **Nutrition**, an 11-year old student asked:

Why do we feel hungry after physical activity?
        `}
        videoId="123"
        videoTitle="Why do we feel hungry?"
      />
      <StudentQuestionCard
        subject="English"
        text={`
After reading a chapter on **Nutrition**, an 11-year old student asked:

Why do we feel hungry after physical activity?
        `}
        videoId="123"
        videoTitle="Why do we feel hungry?"
      />
    </Box>
  </Box>
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
                style={{ position: "fixed", top: 0, left: 0, height: headerHeight, zIndex: 1 }}
              >
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
                        backgroundAttachment: "",
                      }}
                      background={heroBannerBackground}
                    />
                  </Box>
                  <Box fill style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Header />
                  </Box>
                </Box>
              </Box>

              {/* Hero section */}
              <HeroBanner isMobileLayout={isMobileLayout} />

              <HowWeWorkSection isMobileLayout={isMobileLayout} />

              <SelectedQuestionsSection isMobileLayout={isMobileLayout} />

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
