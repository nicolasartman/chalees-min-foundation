import { Box, Button, Heading, ResponsiveContext, Text } from "grommet"
import { Next as NextIcon, Previous as PreviousIcon } from "grommet-icons"
import { useKeenSlider } from "keen-slider/react"
import { ReactNode, useContext } from "react"
import { BaseSectionProps } from "./BaseSectionProps"
import { purple, white } from "./colors"
import { Person1Icon } from "./Icons"
import SectionContainer from "./SectionContainer"

type Testimonial = {
  name: string
  location: string
  icon: ReactNode
  body: string
}

const testimonials: Array<Testimonial> = [
  {
    name: "Zakira Tebassum",
    location: "Delhi",
    icon: <Person1Icon />,
    body:
      "The training taught me and my students to relate our learning with real life experiences. We learnt to collect information from authentic sources, use pictures to explain concepts clearly, and to imagine more to learn more. The training has made me and my students more curious.",
  },
  {
    name: "Sandeep Rana",
    location: "Ludhiana, Punjab",
    icon: <Person1Icon />,
    body:
      "The distance between teacher and student will decrease through this training. I learnt how to create a discussion-based classroom, and how to create a friendly atmosphere in the classroom. Both these things will encourage my students to ask more questions.",
  },
  {
    name: "Harjit Kaur",
    location: "Mohali, Punjab",
    icon: <Person1Icon />,
    body:
      "On day 1 of training, I was skeptical. I did not think my students could ask questions. Maybe they would in higher classes. I had my doubts if young students would be able to ask questions. But working through this training, I am convinced that if we give responsibility to young students they can also begin to ask and answer questions.",
  },
  {
    name: "Munish Kumar",
    location: "Jalandhar, Punjab",
    icon: <Person1Icon />,
    body:
      "Through this training I have learnt how to motivate students to ask questions. I have also learnt a framework that students can use to find the answers to their questions.",
  },
  {
    name: "Pinky",
    location: "Delhi",
    icon: <Person1Icon />,
    body:
      "Now my students don’t depend only on the concepts given in the book. But they relate those topics to their day to day experiences. I got positive results by using this training in my teaching process.",
  },
  {
    name: "Daljit Singh",
    location: "Bathinda, Punjab",
    icon: <Person1Icon />,
    body:
      "The more our students explore the answers to their own questions, the more they will learn. I learnt how to bring this new teaching and learning methodology inside the classroom through the Chalees training.",
  },
  {
    name: "Bihari Lal",
    location: "Faridkot, Punjab",
    icon: <Person1Icon />,
    body:
      "This training is going to compel me to make certain changes in my behaviour and teaching process. Interaction with other intellectuals also gave me a chance for introspection. This training is going to help many students with whom I am going to interact in future.",
  },
]

const TeacherTestimonial: React.FC<Testimonial> = (testimonial) => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Box fill direction="row" align="center" pad={size === "small" ? "large" : "medium"}>
        <Box direction="row" gap="medium">
          <Box flex="grow">{testimonial.icon}</Box>
          <Box direction="column" gap="small">
            <Text>{testimonial.body}</Text>
            <Text>
              <strong>
                {testimonial.name}, {testimonial.location}
              </strong>
            </Text>
          </Box>
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

const TeacherTestimonialsSection = (props: BaseSectionProps) => {
  const size = useContext(ResponsiveContext)
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slidesPerView: ["small", "mediumSmall"].includes(size) ? 1 : size === "large" ? 3 : 2,
    loop: true,
    vertical: false,
    controls: true,
  })

  return (
    <SectionContainer flex="grow" background={purple}>
      <Box fill style={{ maxWidth: 1600 }} alignSelf="center">
        <Box pad={{ horizontal: "large" }}>
          <Heading level="2" color={white}>
            Teacher Testimonials
          </Heading>
        </Box>
        <Box fill style={{ position: "relative", height: 300, minHeight: 300 }}>
          <Box fill pad={{ horizontal: "large" }}>
            <div ref={ref} className="keen-slider" style={{ height: "100%" }}>
              {testimonials.map((testimonial) => (
                <div className="keen-slider__slide" key={testimonial.name}>
                  <TeacherTestimonial {...testimonial} />
                </div>
              ))}
            </div>
          </Box>

          {/* navigation */}
          <Button
            style={{ position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)" }}
            onClick={() => slider.prev()}
          >
            <PreviousIcon size={props.isMobileLayout ? "medium" : "large"} />
          </Button>
          <Button
            style={{ position: "absolute", top: "50%", right: 10, transform: "translateY(-50%)" }}
            onClick={() => slider.next()}
          >
            <NextIcon size={props.isMobileLayout ? "medium" : "large"} />
          </Button>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default TeacherTestimonialsSection
