import { Box, Button, Heading, Image, Layer, ResponsiveContext, Text } from "grommet"
import { Close as CloseIcon } from "grommet-icons"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { desaturate, transparentize } from "polished"
import { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { BaseSectionProps } from "./BaseSectionProps"
import {
  almostWhite,
  cyan,
  darkGreen,
  darkPurple,
  darkRed,
  darkYellow,
  purple,
  red,
  white,
} from "./colors"
import { questions } from "./images"
import SectionContainer from "./SectionContainer"

type QuestionCardData = {
  priority: number
  question: string
  studentName: string
  grade?: number
  imageUrl: string
}

type QuestionCardProps = QuestionCardData & {
  backgroundColor: string
  onClick: React.PointerEventHandler
}

const colors = [red, purple, darkYellow, darkPurple, darkRed, cyan, darkGreen]

const cards: Array<QuestionCardData> = [
  {
    priority: 1,
    question: "Why don't satellites fall out of the sky?",
    studentName: "Aditya",
    grade: 8,
    imageUrl: questions.satellites,
  },
  {
    priority: 1,
    question: "Why do fruits change their color?",
    studentName: "Nigaaz Nashreen",
    grade: 6,
    imageUrl: questions.fruits,
  },
  {
    priority: 1,
    question: "Which country first gave women the right to vote?",
    studentName: "Nandini Vashisht",
    grade: 10,
    imageUrl: questions.womensVotingRights,
  },
  {
    priority: 1,
    question: "What is the reason behind an earthquake?",
    studentName: "Akash",
    grade: 7,
    imageUrl: questions.earthquake,
  },
  {
    priority: 1,
    question: "Why does an air conditioner drip water?",
    studentName: "Malek Abrar Ishakbhai",
    grade: 7,
    imageUrl: questions.airConditioner,
  },
  {
    priority: 2,
    question: "How can I differentiate between an adjective and an adverb?",
    studentName: "Kirti",
    imageUrl: questions.adjectiveVsAdverb,
  },
  {
    priority: 2,
    question: "Why does an eagle stop flapping its wings after reaching some height?",
    studentName: "Arti",
    grade: 7,
    imageUrl: questions.eagleFlyingPatterns,
  },
  {
    priority: 2,
    question: "Who was Napoleon and what did he do?",
    studentName: "Altaf",
    grade: 10,
    imageUrl: questions.napoleon,
  },
  {
    priority: 2,
    question: "What is global warming?",
    studentName: "Hetal Girishbhai",
    grade: 8,
    imageUrl: questions.globalWarming,
  },
  {
    priority: 2,
    question: "What are the uses of a cylinder?",
    studentName: "Aman",
    grade: 8,
    imageUrl: questions.cylinder,
  },
  {
    priority: 2,
    question: "Snakes don't have any ears. How are they able to hear?",
    studentName: "Anjuman Banu",
    grade: 7,
    imageUrl: questions.snakesHearing,
  },
  {
    priority: 2,
    question: "Why does the moon look half?",
    studentName: "Saiba",
    grade: 7,
    imageUrl: questions.moonHalf,
  },
  {
    priority: 2,
    question: "Why is mango called the king of fruits?",
    studentName: "Jatin",
    grade: 5,
    imageUrl: questions.mango,
  },
  {
    priority: 2,
    question: "Why do they paint a giant X behind trains?",
    studentName: "Sadiya Pramod",
    grade: 9,
    imageUrl: questions.trainX,
  },
  {
    priority: 2,
    question: "Why is the value of pi 22 by 7?",
    studentName: "Vishal",
    grade: 8,
    imageUrl: questions.pi,
  },
  {
    priority: 2,
    question: 'Why is "an" used before the word "hour"?',
    studentName: "Dhoni",
    grade: 7,
    imageUrl: questions.articleForTheWordHour,
  },
  {
    priority: 2,
    question: "How did dinosaurs become extinct?",
    studentName: "Bhumika",
    imageUrl: questions.dinosaurs,
  },
  {
    priority: 2,
    question: "Why does owl appear at night and not in day?",
    studentName: "Shekh Alafina",
    grade: 5,
    imageUrl: questions.owl,
  },
  {
    priority: 2,
    question: "What is happiness?",
    studentName: "Anurag",
    grade: 9,
    imageUrl: questions.happiness,
  },
  {
    priority: 2,
    question: "What would happen if there were no moon?",
    studentName: "Kavita Sahni Sheikh",
    grade: 8,
    imageUrl: questions.noMoon,
  },
  {
    priority: 2,
    question: "Why doesn't the moon fall to the earth?",
    studentName: "Pooja Chaurasiya",
    imageUrl: questions.moonFallingToTheEarth,
  },
  {
    priority: 3,
    question: "Why do some people have six fingers?",
    studentName: "Sadiya Khan",
    grade: 10,
    imageUrl: questions.sixFingers,
  },
  {
    priority: 3,
    question: "Why do I feel scared in the dark?",
    studentName: "Siddiki Farhan",
    grade: 9,
    imageUrl: questions.scaredInTheDark,
  },
  {
    priority: 3,
    question: "How is washing detergent made?",
    studentName: "Simran",
    grade: 8,
    imageUrl: questions.washingDetergent,
  },
  {
    priority: 3,
    question: "How does a chameleon change its color?",
    studentName: "Solanki",
    grade: 10,
    imageUrl: questions.chameleon,
  },
  {
    priority: 3,
    question: "What would happen if there were no snakes in the food chain?",
    studentName: "Sarla Saket",
    grade: 5,
    imageUrl: questions.snakesInTheFoodChain,
  },
  {
    priority: 3,
    question: "How does water disappear?",
    studentName: "Hiren Muchadia",
    grade: 9,
    imageUrl: questions.waterDisappear,
  },
  {
    priority: 3,
    question: "Why does the sky look red in the morning and evening?",
    studentName: "Pallavi Muchadia",
    imageUrl: questions.redSky,
  },
  // {
  //   priority: 3,
  //   question: "Why is peacock our national bird?",
  //   studentName: "Shekh Nigaz",
  //   grade: 6,
  //   image: questions.peacock
  // },
  // {
  //   priority: 3,
  //   question: "Why is the sea water salty?",
  //   studentName: "Makwana Krish Harashbhai",
  //   grade: 8,
  //   image: questions.seaWater
  // }
]

const QuestionCard = (props: QuestionCardProps) => {
  const ratio = 16 / 9

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          style={{ position: "relative", paddingBottom: `${ratio * 100}%`, height: 0 }}
          role="button"
          onClick={props.onClick}
        >
          <Box style={{ position: "absolute", height: "100%", width: "100%" }}>
            <LazyLoadImage style={{ objectFit: "contain" }} src={props.imageUrl} />
          </Box>
          <Box style={{ position: "absolute", top: 0, left: 0 }} fill>
            <Box direction="column" align="center" justify="center" fill>
              <Box
                background={{
                  color: transparentize(0.5, desaturate(0.1, props.backgroundColor)),
                  opacity: 0.9,
                }}
                align="center"
                justify="center"
                width="100%"
                height="100%"
                pad={size === "small" ? "30px" : "60px"}
              >
                <Box
                  style={{
                    fontWeight: 400,
                    textAlign: "center",
                    textShadow: "0 2px 0 4px rgba(0,0,0,0.1)",
                    fontSize: size === "small" ? "24px" : "32px",
                    lineHeight: "normal",
                    color: "white",
                  }}
                >
                  {props.question}
                </Box>
                <Box height={"25px"} />
                <Box
                  style={{
                    textAlign: "center",
                    textShadow: "0 2px 0 4px rgba(0,0,0,0.1)",
                    fontSize: size === "small" ? "16px" : "24px",
                    color: "white",
                  }}
                >
                  {props.studentName}
                  {props.grade && `, Grade ${props.grade}`}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

type ExploreQuestionsSectionProps = BaseSectionProps & {
  size: string
}

const ExploreQuestionsSection = (props: ExploreQuestionsSectionProps) => {
  const slidesToShow = props.size === "small" ? 1.5 : props.size === "mediumSmall" ? 2.2 : 3.5
  const [openedCard, setOpenedCard] = useState<QuestionCardData | null>(null)
  const [ref] = useKeenSlider<HTMLDivElement>({
    slidesPerView: slidesToShow,
    mode: "free-snap",
    loop: true,
    centered: true,
  })

  return (
    // This section has a custom colored background effect that should occupy the whole section,
    // so it doesn't need any padding on the container
    <SectionContainer pad={{ vertical: "none" }}>
      <Box fill style={{ position: "relative" }}>
        <div ref={ref} className="keen-slider">
          {cards.map((card, index) => (
            <div className="keen-slider__slide" key={card.question}>
              <QuestionCard
                {...card}
                backgroundColor={colors[index % colors.length]}
                onClick={() => setOpenedCard(card)}
              />
            </div>
          ))}
        </div>
        <Box
          direction="row"
          justify="center"
          fill="horizontal"
          pad={{ top: "40px" }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          <Heading level="2" color={white}>
            Explore Student Questions
          </Heading>
        </Box>
      </Box>
      {openedCard ? (
        <Layer
          onEsc={() => setOpenedCard(null)}
          onClickOutside={() => setOpenedCard(null)}
          animation="fadeIn"
          background="rgba(0, 0, 0, 0.75)"
          responsive
          full
        >
          <Box fill style={{ position: "relative" }}>
            {/* Background image */}
            <Image fit="contain" src={openedCard.imageUrl} />

            {/* Details */}
            <Box
              pad="medium"
              background="rgba(0, 0, 0, 0.5)"
              style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
            >
              <Box>
                <Heading fill level="2" textAlign="center" color={almostWhite}>
                  {openedCard.question}
                </Heading>
                <Text textAlign="center">
                  {openedCard.studentName}, Grade {openedCard.grade}
                </Text>
              </Box>
            </Box>

            {/* Close button */}
            <Box
              style={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
            >
              <Button
                plain
                style={{
                  background: "black",
                  border: "2px solid white",
                  borderRadius: "50%",
                  padding: "20px",
                  boxShadow: "none",
                  opacity: 0.5,
                }}
                onClick={() => setOpenedCard(null)}
              >
                <CloseIcon color="white" size="medium" style={{ display: "block" }} />
              </Button>
            </Box>
          </Box>
        </Layer>
      ) : null}
    </SectionContainer>
  )
}

export default ExploreQuestionsSection
