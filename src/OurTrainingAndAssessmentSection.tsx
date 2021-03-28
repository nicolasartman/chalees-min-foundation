import { BaseSectionProps } from "./BaseSectionProps"
import { BrainIcon, CertificateIcon } from "./Icons"
import InfoBlocksSection, { InfoBlock } from "./InfoBlocksSection"
import { Anchor, Box } from "grommet"

const blocks: Array<InfoBlock> = [
  {
    title: "Training",
    body: <>
        Through our training, we aim to promote an inquiry-based, discussion-based classroom. Here are some questions we
        discuss in our training. For more details,
        <Anchor href="https://drive.google.com/file/d/17ZgyfKS4YMrttEGevfqdZtSjE15Waybb/view?usp=sharing" label="click here" />.
        <ul>
          <li>How do you encourage students to ask questions that are relevant to their lives?</li>
          <li>How can you help students research an answer by searching the Internet; by asking the people around them; by browsing library books?</li>
          <li>How can you work with students to find trustworthy sources for their answers?</li>
          <li>How do you help students be more confident while presenting their answers?</li>
          <li>How can students use pictures to answer tough questions?</li>
          <li>How can teachers provide low-stakes, formative feedback to students?</li>
        </ul>
    </>,
    icon: <BrainIcon />,
  },
  {
    title: "Assessment",
    body: <>
      <Box style={{ paddingBottom: "20px" }}>
        <em>Assessing Students</em> — Each time a student submits a question, we use <Anchor
        href="https://drive.google.com/file/d/1QWDSUlIu4krg_pYpGPG_USpwOZ24zym0/view?usp=sharing"
        label="this rubric"
      /> to assess what the learner did well and how they can improve. Our teachers use this assessment tool to
        provide low-stakes, formative feedback to the student.
      </Box>
      <Box>
        <em>Assessing Teachers</em> — We use <Anchor
        href="https://drive.google.com/file/d/19dcCJVdaInZGFWxzfffOjAjPH1-aelQ1/view?usp=sharing"
        label="another rubric"
        /> to assess teacher performance as they learn to promote student curiosity through our training.
        Here is a <Anchor
        href="https://drive.google.com/file/d/1lIwxF04XxbVOtZlRDvawHhEsWLIS8KK6/view?usp=sharing"
        label="sample assessment result"
        /> from our collaboration with the Government of Punjab.
      </Box>
    </>,
    icon: <CertificateIcon />,
  },
]

const OurTrainingAndAssessmentSection = (props: BaseSectionProps) => (
  <InfoBlocksSection
    title="Our Training and Assessment"
    isMobileLayout={props.isMobileLayout}
    blocks={blocks}
  />
)

export default OurTrainingAndAssessmentSection
