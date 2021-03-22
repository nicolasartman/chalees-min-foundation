import { Box, Heading } from "grommet"
import { ReactNode } from "react"
import { BaseSectionProps } from "./BaseSectionProps"
import { BrainIcon, MagnifyingGlassAndPaperIcon, PodiumIcon } from "./Icons"
import SectionContainer from "./SectionContainer"

type HowWeWorkCardProps = {
  title: string
  text: string
  pictureSource: string
  icon: ReactNode
  isMobileLayout: boolean
}

const HowWeWorkCard = (props: HowWeWorkCardProps) => (
  <Box
    direction={props.isMobileLayout ? "row" : "column"}
    gap={props.isMobileLayout ? "none" : "small"}
    fill="horizontal"
  >
    <Box direction="row" align="start" flex="grow" pad={{ right: "20px" }}>
      {props.icon}
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
    <Box pad={{ horizontal: "40px" }} style={{ maxWidth: 1600 }} alignSelf="center">
      <Box direction="column" fill="horizontal" align="start">
        <Heading level={2} margin="0">
          How we work
        </Heading>
        <Box fill>After our teachers have taught a chapter from the textbook, our...</Box>
      </Box>
      <Box height="20px" />
      <Box
        direction={props.isMobileLayout ? "column" : "row"}
        gap="40px"
        pad={{ vertical: "medium" }}
        align="start"
      >
        <Box fill="horizontal">
          <HowWeWorkCard
            title="Students ask questions"
            text="on a topic they just finished reading from the book; a question that is interesting to them."
            pictureSource="https://placekitten.com/50/50"
            icon={<BrainIcon />}
            isMobileLayout={props.isMobileLayout}
          />
        </Box>
        <Box fill="horizontal">
          <HowWeWorkCard
            title="Students conduct research"
            text="by asking an older sibling, or by reading a book from the library, or by searching the Internet."
            pictureSource="https://placekitten.com/50/50"
            icon={<MagnifyingGlassAndPaperIcon />}
            isMobileLayout={props.isMobileLayout}
          />
        </Box>
        <Box fill="horizontal">
          <HowWeWorkCard
            title="Students present answers"
            text="by coming in front of class and teaching their peers, or by making short videos."
            pictureSource="https://placekitten.com/50/50"
            icon={<PodiumIcon />}
            isMobileLayout={props.isMobileLayout}
          />
        </Box>
      </Box>
    </Box>
  </SectionContainer>
)

export default HowWeWorkSection
