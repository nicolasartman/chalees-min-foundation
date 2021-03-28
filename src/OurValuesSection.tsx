import { BaseSectionProps } from "./BaseSectionProps"
import InfoBlocksSection, { InfoBlock } from "./InfoBlocksSection"
import { BooksIcon, MoleculeIcon } from "./Icons"

const blocks: Array<InfoBlock> = [
  {
    title: "Powerful Pedagogy",
    body: `
      We believe that students learn best when they connect topics from the textbook to their lived experience. 
      When students ask questions, they create inquiry-based and discussion-based classrooms — two critical components 
      advocated by the National Education Policy 2020.
    `,
    icon: <BooksIcon />,
  },
  {
    title: "Preferential Option for the Poor",
    body: `
      Money helps buy great pedagogy for students. Thus, students with economic means progress further. If we are to 
      close the educational gap between the rich and the poor, we must create a preferential option for the poor. For 
      us, this means working with government schools and schools that cater to those with fewer economic means.
    `,
    icon: <MoleculeIcon />,
  }
]

const OurValuesSection = (props: BaseSectionProps) => (
  <InfoBlocksSection
    title="Our Values"
    isMobileLayout={props.isMobileLayout}
    blocks={blocks}
  />
)

export default OurValuesSection
