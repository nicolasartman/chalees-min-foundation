import { Box, Heading, Image } from "grommet"
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

type QuestionCardProps = {
  priority: number
  question: string
  studentName: string
  grade: number
  image: string
}
const QuestionCard = (props: QuestionCardProps) => {
  return (
    <Box
      style={{
        position: "relative",
        height: "512px",
      }}
    >
      <Image fit="cover" src={props.image} fill={false} />
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        fill
      >
        <Box direction="column" align="center" justify="center" fill>
          <Box
            background={{
              color: "light-1",
              opacity: 0.8,
            }}
            align={"center"}
            justify="center"
            elevation={"medium"}
            width={"80%"}
            pad={"40px"}
            round
          >
            <Box>
              <span style={{ textAlign: "center", textShadow: "0 2px 0 4px rgba(0,0,0,0.1)" }}>
                <strong>{props.question}</strong>
              </span>
            </Box>
            <Box>
              <span style={{ textAlign: "center", textShadow: "0 2px 0 4px rgba(0,0,0,0.1)" }}>
                {props.studentName}, Grade {props.grade}
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const ExploreQuestionsSection = () => {
  return (
    <Box direction="column">
      <Box direction="column" align="center">
        <Heading level="2">Explore Student Questions</Heading>
      </Box>
      <Carousel heightMode="current" slidesToShow={4} wrapAround renderBottomCenterControls={null}>
        <QuestionCard
          priority={1}
          question="Why don't satellites fall out of the sky?"
          studentName="Aditya"
          grade={8}
          image={image1}
        />
        <QuestionCard
          priority={1}
          question="Why do fruits change their color?"
          studentName="Nigaaz Nashreen"
          grade={6}
          image={image2}
        />
        <QuestionCard
          priority={1}
          question="Which country first gave women the right to vote?"
          studentName="Nandini Vashisht"
          grade={10}
          image={image3}
        />
        <QuestionCard
          priority={1}
          question="What is the reason behind an earthquake?"
          studentName="Akash"
          grade={7}
          image={image4}
        />
        <QuestionCard
          priority={1}
          question="Why does an air conditioner drip water?"
          studentName="Malek Abrar Ishakbhai"
          grade={7}
          image={image5}
        />
        <QuestionCard
          priority={2}
          question={"Why does an eagle stop flapping its wings after reaching some height?"}
          studentName={"Arti"}
          grade={7}
          image={eagleFlyingPatterns}
        />
        <QuestionCard
          priority={2}
          question={"Who was Napoleon and what did he do?"}
          studentName={"Altaf"}
          grade={10}
          image={napoleon}
        />
        <QuestionCard
          priority={2}
          question={"What is global warming?"}
          studentName={"Hetal Girishbhai"}
          grade={8}
          image={globalWarming}
        />
        <QuestionCard
          priority={2}
          question={"What are the uses of a cylinder?"}
          studentName={"Aman"}
          grade={8}
          image={cylinder}
        />
        <QuestionCard
          priority={2}
          question={"Snakes don't have any ears. How are they able to hear?"}
          studentName={"Anjuman Banu"}
          grade={7}
          image={snakesHearing}
        />
        <QuestionCard
          priority={2}
          question={"Why does the moon look half?"}
          studentName={"Saiba"}
          grade={7}
          image={moonHalf}
        />
        <QuestionCard
          priority={2}
          question={"Why is mango called the king of fruits?"}
          studentName={"Jatin"}
          grade={5}
          image={mango}
        />
      </Carousel>
    </Box>
  )
}

export default ExploreQuestionsSection
