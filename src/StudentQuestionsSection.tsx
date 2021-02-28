import { Box, Button, Heading } from "grommet"
import { CSSProperties, useState } from "react"
import { BaseSectionProps } from "./BaseSectionProps"
import { purple } from "./colors"
import ResponsiveYouTubeEmbed from "./ResponsiveYouTubeEmbed"
import SectionContainer from "./SectionContainer"

type StudentQuestionCardProps = {
  subject: string
  chapterTopic: string
  studentAgeText: string
  question: string
  videoId: string
}

const studentQuestionCards: StudentQuestionCardProps[] = [
  {
    subject: "Science",
    chapterTopic: "Nutrition",
    studentAgeText: "an 11 year-old",
    question: "Why do we feel hungry after physical activity?",
    videoId: "xdC-9-XpEto",
  },
  {
    subject: "Math",
    chapterTopic: "Polynomials",
    studentAgeText: "a 15 year-old",
    question: "How will we use polynomials in a supermarket?",
    videoId: "m4XX4HNec34",
  },
  {
    subject: "English",
    chapterTopic: "Adjectives",
    studentAgeText: "a 12 year-old",
    question: "How can we arrange multiple adjectives in a sentence?",
    videoId: "Tc3uoxKw6d4",
  },
]

const navigationButtonStyle: CSSProperties = {
  fontSize: 24,
}

type AnimatedTextProps = {
  previousItemIndex: number
  currentItemIndex: number
  nextItemIndex: number
  horizontalAlignment?: "left" | "right"
  items: string[]
}

const AnimatedText: React.FC<AnimatedTextProps> = (props: AnimatedTextProps) => (
  <span style={{ position: "relative" }}>
    {props.items.map((text, cardIndex) => (
      <span
        style={{
          transition: "opacity 0.5s ease, transform 0.25s ease",
          opacity: 0,
          pointerEvents: "none",
          ...(props.currentItemIndex === cardIndex
            ? {
                opacity: 1,
                pointerEvents: "auto",
              }
            : {}),
          ...(cardIndex === 0
            ? { position: "relative" }
            : {
                display: "block",
                position: "absolute",
                top: 0,
                ...(props.horizontalAlignment === "right" ? { right: 0 } : { left: 0 }),
              }),
          ...(props.previousItemIndex === cardIndex
            ? {
                transform: "translateX(-50px)",
              }
            : props.nextItemIndex === cardIndex
            ? {
                transform: "translateX(50px)",
              }
            : {}),
        }}
      >
        {text}
      </span>
    ))}
  </span>
)

const SelectedQuestionsSection = (props: BaseSectionProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const previousCardIndex =
    (currentCardIndex - 1 + studentQuestionCards.length) % studentQuestionCards.length
  const nextCardIndex = (currentCardIndex + 1) % studentQuestionCards.length

  const currentCard = studentQuestionCards[currentCardIndex]

  const nextButtonIndexes = {
    currentItemIndex: nextCardIndex,
    previousItemIndex: currentCardIndex,
    nextItemIndex: previousCardIndex,
  }

  const previousButtonIndexes = {
    currentItemIndex: previousCardIndex,
    previousItemIndex: nextCardIndex,
    nextItemIndex: currentCardIndex,
  }

  // Note: all components in this need to be in this component's render function or the
  // animations will be slightly misalisnged
  return (
    <SectionContainer flex="grow" background={purple}>
      <Box fill pad={{ horizontal: "40px" }}>
        <Box direction="column" fill="horizontal" align="center" pad={{ bottom: "40px" }}>
          <Heading level="2">Selected Student Questions </Heading>
        </Box>
        <Box align="center" fill="horizontal" direction="row">
          {!props.isMobileLayout ? (
            <Box align="center" justify="center" flex="grow" width="80px" pad="20px">
              <Button
                plain
                style={navigationButtonStyle}
                onClick={() => setCurrentCardIndex(previousCardIndex)}
              >
                <AnimatedText
                  {...previousButtonIndexes}
                  items={studentQuestionCards.map((card) => card.subject)}
                />
              </Button>
            </Box>
          ) : null}
          <Box fill>
            <Box>
              <Box direction="row" justify="center" gap="40px" data-dev="StudentQuestionCard">
                <Box direction="column" width={props.isMobileLayout ? "auto" : "400px"}>
                  <Heading level="2">
                    <AnimatedText
                      currentItemIndex={currentCardIndex}
                      previousItemIndex={previousCardIndex}
                      nextItemIndex={nextCardIndex}
                      items={studentQuestionCards.map((card) => card.subject)}
                    />
                  </Heading>
                  <Box>
                    <span>
                      After reading a chapter on
                      <Box style={{ fontWeight: "bold", fontSize: 24 }} pad={{ vertical: "10px" }}>
                        <AnimatedText
                          currentItemIndex={currentCardIndex}
                          previousItemIndex={previousCardIndex}
                          nextItemIndex={nextCardIndex}
                          items={studentQuestionCards.map((card) => card.chapterTopic)}
                        />
                      </Box>
                    </span>
                  </Box>
                  <Box>a student asked</Box>
                  <Box height="20px" />
                  <Box style={{ fontStyle: "italic", fontWeight: "bold", fontSize: 20 }}>
                    <AnimatedText
                      currentItemIndex={currentCardIndex}
                      previousItemIndex={previousCardIndex}
                      nextItemIndex={nextCardIndex}
                      items={studentQuestionCards.map((card) => card.question)}
                    />
                  </Box>
                </Box>

                <Box width={props.isMobileLayout ? "80%" : "250px"}>
                  <ResponsiveYouTubeEmbed
                    ratio={16 / 9}
                    title={currentCard.question}
                    videoId={currentCard.videoId}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {!props.isMobileLayout ? (
            <Box align="center" justify="center" flex="grow" width="80px" pad="20px">
              <Button
                plain
                style={navigationButtonStyle}
                onClick={() => setCurrentCardIndex(nextCardIndex)}
              >
                <AnimatedText
                  {...nextButtonIndexes}
                  horizontalAlignment="right"
                  items={studentQuestionCards.map((card) => card.subject)}
                />
              </Button>
            </Box>
          ) : null}
        </Box>
        {props.isMobileLayout ? (
          <Box justify="between" direction="row" pad={{ top: "40px" }}>
            <Button
              plain
              style={navigationButtonStyle}
              onClick={() => setCurrentCardIndex(previousCardIndex)}
            >
              <AnimatedText
                {...previousButtonIndexes}
                items={studentQuestionCards.map((card) => card.subject)}
              />
            </Button>
            <Button
              plain
              style={navigationButtonStyle}
              onClick={() => setCurrentCardIndex(nextCardIndex)}
            >
              <AnimatedText
                {...nextButtonIndexes}
                horizontalAlignment="right"
                items={studentQuestionCards.map((card) => card.subject)}
              />
            </Button>
          </Box>
        ) : null}
      </Box>
    </SectionContainer>
  )
}

export default SelectedQuestionsSection
