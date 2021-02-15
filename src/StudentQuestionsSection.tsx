import { Box, Heading, Stack } from "grommet"
import { useState } from "react"
import { BaseSectionProps } from "./BaseSectionProps"
import { purple } from "./colors"
import ResponsiveYouTubeEmbed from "./ResponsiveYouTubeEmbed"

type StudentQuestionCardTransitionOrder = "current" | "previous" | "next"
type StudentQuestionCardProps = {
  subject: string
  chapterTopic: string
  studentAgeText: string
  question: string
  videoId: string
  transitionOrder: StudentQuestionCardTransitionOrder
}

const StudentQuestionCard = (props: StudentQuestionCardProps) => (
  <Box
    direction="row"
    justify="center"
    gap="40px"
    style={{
      opacity: props.transitionOrder === "current" ? 1 : 0,
      pointerEvents: props.transitionOrder === "current" ? "auto" : "none",
    }}
    data-dev="StudentQuestionCard"
  >
    <Box direction="column">
      <Heading level="2">{props.subject}</Heading>
      <Box>
        <span>
          After reading a chapter on{" "}
          <span>
            <strong>{props.chapterTopic}</strong>
          </span>
        </span>
      </Box>
      <Box>{props.studentAgeText} asked</Box>
      <Box height="20px" />
      <Box style={{ fontStyle: "italic" }}>"{props.question}"</Box>
    </Box>
    <Box width="150px">
      <ResponsiveYouTubeEmbed ratio={16 / 9} title={props.question} videoId={props.videoId} />
    </Box>
  </Box>
)

const SelectedQuestionsSection = (props: BaseSectionProps) => {
  const [selectedCardIndex] = useState(0)
  const getTransitionOrder = (
    cardIndex: number,
    selectedCardIndex: number,
  ): StudentQuestionCardTransitionOrder => {
    if (cardIndex < selectedCardIndex) {
      return "previous"
    } else if (cardIndex > selectedCardIndex) {
      return "next"
    } else {
      return "current"
    }
  }
  return (
    <Box direction="column" pad="xlarge" fill="horizontal" flex="grow" background={purple}>
      <Box direction="column" fill="horizontal" align="center">
        <Heading level="2" style={{ marginTop: "0" }}>
          Selected Student Questions{" "}
        </Heading>
      </Box>
      <Box align="center" fill="horizontal">
        <Stack fill>
          <StudentQuestionCard
            transitionOrder={getTransitionOrder(0, selectedCardIndex)}
            subject="Science"
            chapterTopic="Nutrition"
            studentAgeText="an 11 year-old"
            question="Why do we feel hungry after physical activity?"
            videoId="xdC-9-XpEto"
          />
          <StudentQuestionCard
            transitionOrder={getTransitionOrder(1, selectedCardIndex)}
            subject="Math"
            chapterTopic="Polynomials"
            studentAgeText="a 15 year-old"
            question="After reading a chapter on Polynomials, a 15-year old student asked, How will we use polynomials in a supermarket?"
            videoId="m4XX4HNec34"
          />
          <StudentQuestionCard
            transitionOrder={getTransitionOrder(2, selectedCardIndex)}
            subject="English"
            chapterTopic="Adjectives"
            studentAgeText="a 12 year-old"
            question="How can we arrange multiple adjectives in a sentence?"
            videoId="Tc3uoxKw6d4"
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default SelectedQuestionsSection
