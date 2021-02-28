import { Box, Heading, Image, Button } from "grommet"
import { desaturate, transparentize } from "polished"
import Carousel from "nuka-carousel"
import image1 from "./images/satellites.png"
import image2 from "./images/fruits.jpeg"
import image3 from "./images/womensVotingRights.png"
import image4 from "./images/earthquake.png"
import image5 from "./images/airConditioner.jpeg"
import eagleFlyingPatterns from "./images/eagleFlyingPatterns.png"
import napoleon from "./images/napoleon.png"
import globalWarming from "./images/globalWarming.jpeg"
import cylinder from "./images/cylinder.png"
import snakesHearing from "./images/snakesHearing.jpeg"
import moonHalf from "./images/moonHalf.png"
import mango from "./images/mango.png"
import { almostWhite, purple, red, darkRed, lavender, goldenrod, powderBlue } from "./colors"
import SectionContainer from "./SectionContainer"

type QuestionCardProps = {
  priority: number
  question: string
  studentName: string
  grade: number
  image: string
  backgroundColor: string
}
const QuestionCard = (props: QuestionCardProps) => {
  const ratio = 12 / 9

  return (
    <Box
      style={{
        position: "relative",
        paddingBottom: `${ratio * 100}%`,
        paddingTop: 25,
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
            align={"center"}
            justify="center"
            width={"100%"}
            height={"100%"}
            pad={"60px"}
          >
            <Box
              style={{
                fontWeight: 500,
                textAlign: "center",
                textShadow: "0 2px 0 4px rgba(0,0,0,0.1)",
                fontSize: "32px",
                lineHeight: "normal",
              }}
            >
              {props.question}
            </Box>
            <Box height={"25px"} />
            <Box
              style={{
                textAlign: "center",
                textShadow: "0 2px 0 4px rgba(0,0,0,0.1)",
                fontSize: "24px",
              }}
            >
              {props.studentName}, Grade {props.grade}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

type ExploreQuestionsSectionProps = {
  size: string
}

const colors = [red, purple, almostWhite, goldenrod, darkRed, lavender, powderBlue]

const cards = [
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

const ExploreQuestionsSection = (props: ExploreQuestionsSectionProps) => {
  const slidesToShow = props.size === "small" ? 1 : props.size === "mediumSmall" ? 2 : 3

  return (
    <SectionContainer>
      <Box direction="column" align="center" pad={{ bottom: "20px" }}>
        <Heading level="2">Explore Student Questions</Heading>
      </Box>
      <Carousel
        heightMode="current"
        slidesToShow={slidesToShow}
        wrapAround
        renderBottomCenterControls={null}
        speed={1000}
        renderCenterLeftControls={({ previousSlide }) => (
          <Button style={{ height: "100px" }} onClick={previousSlide}>
            <Box style={{ fontSize: "72px", paddingLeft: "10px" }}>&#9668;</Box>️
          </Button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Button style={{ height: "100px" }} onClick={nextSlide}>
            <Box style={{ fontSize: "48px", paddingRight: "10px" }}>&#9658;</Box>️
          </Button>
        )}
      >
        {cards.map((props, index) => (
          <QuestionCard {...props} backgroundColor={colors[index % colors.length]} />
        ))}
      </Carousel>
    </SectionContainer>
  )
}

export default ExploreQuestionsSection
