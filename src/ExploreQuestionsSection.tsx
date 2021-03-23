import { Box, Heading, Image, ResponsiveContext } from "grommet"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { desaturate, transparentize } from "polished"
import { BaseSectionProps } from "./BaseSectionProps"
import { cyan, darkGreen, darkPurple, darkRed, darkYellow, purple, red, white } from "./colors"
import image5 from "./images/airConditioner.jpeg"
import cylinder from "./images/cylinder.png"
import eagleFlyingPatterns from "./images/eagleFlyingPatterns.png"
import image4 from "./images/earthquake.png"
import image2 from "./images/fruits.jpeg"
import globalWarming from "./images/globalWarming.jpeg"
import mango from "./images/mango.png"
import moonHalf from "./images/moonHalf.png"
import napoleon from "./images/napoleon.png"
import image1 from "./images/satellites.png"
import snakesHearing from "./images/snakesHearing.jpeg"
import image3 from "./images/womensVotingRights.png"
import SectionContainer from "./SectionContainer"

type QuestionCardData = {
  priority: number
  question: string
  studentName: string
  grade: number
  image: string
}

type QuestionCardProps = QuestionCardData & {
  backgroundColor: string
}

const colors = [red, purple, darkYellow, darkPurple, darkRed, cyan, darkGreen]

const cards: Array<QuestionCardData> = [
  {
    priority: 1,
    question: "Why don't satellites fall out of the sky?",
    studentName: "Aditya",
    grade: 8,
    image: image1,
  },
  {
    priority: 1,
    question: "Why do fruits change their color?",
    studentName: "Nigaaz Nashreen",
    grade: 6,
    image: image2,
  },
  {
    priority: 1,
    question: "Which country first gave women the right to vote?",
    studentName: "Nandini Vashisht",
    grade: 10,
    image: image3,
  },
  {
    priority: 1,
    question: "What is the reason behind an earthquake?",
    studentName: "Akash",
    grade: 7,
    image: image4,
  },
  {
    priority: 1,
    question: "Why does an air conditioner drip water?",
    studentName: "Malek Abrar Ishakbhai",
    grade: 7,
    image: image5,
  },
  {
    priority: 2,
    question: "Why does an eagle stop flapping its wings after reaching some height?",
    studentName: "Arti",
    grade: 7,
    image: eagleFlyingPatterns,
  },
  {
    priority: 2,
    question: "Who was Napoleon and what did he do?",
    studentName: "Altaf",
    grade: 10,
    image: napoleon,
  },
  {
    priority: 2,
    question: "What is global warming?",
    studentName: "Hetal Girishbhai",
    grade: 8,
    image: globalWarming,
  },
  {
    priority: 2,
    question: "What are the uses of a cylinder?",
    studentName: "Aman",
    grade: 8,
    image: cylinder,
  },
  {
    priority: 2,
    question: "Snakes don't have any ears. How are they able to hear?",
    studentName: "Anjuman Banu",
    grade: 7,
    image: snakesHearing,
  },
  {
    priority: 2,
    question: "Why does the moon look half?",
    studentName: "Saiba",
    grade: 7,
    image: moonHalf,
  },
  {
    priority: 2,
    question: "Why is mango called the king of fruits?",
    studentName: "Jatin",
    grade: 5,
    image: mango,
  },
]

const QuestionCard = (props: QuestionCardProps) => {
  const ratio = 16 / 9

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          style={{
            position: "relative",
            paddingBottom: `${ratio * 100}%`,
            height: 0,
          }}
        >
          <Box style={{ position: "absolute", height: "100%", width: "100%" }}>
            <Image fit="cover" src={props.image} fill={false} />
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
                  {props.studentName}, Grade {props.grade}
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
  const [ref] = useKeenSlider<HTMLDivElement>({
    slidesPerView: slidesToShow,
    mode: "free-snap",
    loop: true,
    centered: true,
  })

  return (
    <SectionContainer>
      <Box fill style={{ position: "relative" }}>
        <div ref={ref} className="keen-slider">
          {cards.map((card, index) => (
            <div className="keen-slider__slide">
              <QuestionCard {...card} backgroundColor={colors[index % colors.length]} />
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
    </SectionContainer>
  )
}

export default ExploreQuestionsSection
