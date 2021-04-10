import { Anchor, Box, ResponsiveContext, Text } from "grommet"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { BaseSectionProps } from "./BaseSectionProps"
import { BooksIcon, CertificateIcon } from "./Icons"
import teacherPerformanceGraphicUrl from "./images/teacher-performance.png"
import InfoBlocksSection, { InfoBlock } from "./InfoBlocksSection"

const blocks: Array<InfoBlock> = [
  {
    title: "Training",
    body: (
      <Text>
        Through our training, we aim to promote an inquiry-based, discussion-based classroom. Here
        are some questions we discuss in our training. For more details,{" "}
        <Anchor
          href="https://drive.google.com/file/d/17ZgyfKS4YMrttEGevfqdZtSjE15Waybb/view?usp=sharing"
          rel="noopener noreferrer"
          label="click here"
          target="_blank"
        />
        .
        <ul>
          <li>How do you encourage students to ask questions that are relevant to their lives?</li>
          <li>
            How can you help students research an answer by searching the Internet; by asking the
            people around them; by browsing library books?
          </li>
          <li>How can you work with students to find trustworthy sources for their answers?</li>
          <li>How do you help students be more confident while presenting their answers?</li>
          <li>How can students use pictures to answer tough questions?</li>
          <li>How can teachers provide low-stakes, formative feedback to students?</li>
        </ul>
      </Text>
    ),
    icon: <BooksIcon />,
  },
  {
    title: "Assessment",
    body: (
      <>
        <Box style={{ paddingBottom: "20px" }}>
          <Text>
            <em>Assessing Students</em> — Each time a student submits a question, we use{" "}
            <Anchor
              href="https://drive.google.com/file/d/1QWDSUlIu4krg_pYpGPG_USpwOZ24zym0/view?usp=sharing"
              rel="noopener noreferrer"
              label="this rubric"
              target="_blank"
            />{" "}
            to assess what the learner did well and how they can improve. Our teachers use this
            assessment tool to provide low-stakes, formative feedback to the student.
          </Text>
        </Box>
        <Box>
          <Text>
            <em>Assessing Teachers</em> — We use{" "}
            <Anchor
              href="https://drive.google.com/file/d/19dcCJVdaInZGFWxzfffOjAjPH1-aelQ1/view?usp=sharing"
              rel="noopener noreferrer"
              label="another rubric"
              target="_blank"
            />{" "}
            to assess teacher performance as they learn to promote student curiosity through our
            training. Here is a sample assessment result from our collaboration with the Government
            of Punjab:
          </Text>
          <Box pad={{ top: "medium" }}>
            <ResponsiveContext.Consumer>
              {(size) => (
                <Box
                  background="rgba(0, 0, 0, 0.05)"
                  round="24px"
                  pad={{ horizontal: "small" }}
                  style={{ maxWidth: ["medium", "large"].includes(size) ? 500 : "100%" }}
                >
                  <LazyLoadImage
                    src={teacherPerformanceGraphicUrl}
                    alt={
                      "Teacher performance graph showing that teachers " +
                      "improved their assessement scores from 2.54 to 3.41 " +
                      "through the training."
                    }
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              )}
            </ResponsiveContext.Consumer>
          </Box>
        </Box>
      </>
    ),
    icon: <CertificateIcon />,
  },
]

const OurTrainingAndAssessmentSection = (props: BaseSectionProps) => (
  <InfoBlocksSection
    title="Our Training & Assessment"
    isMobileLayout={props.isMobileLayout}
    blocks={blocks}
  />
)

export default OurTrainingAndAssessmentSection
