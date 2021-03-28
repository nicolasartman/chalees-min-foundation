import { BaseSectionProps } from "./BaseSectionProps"
import { BrainIcon, MagnifyingGlassAndPaperIcon, PodiumIcon } from "./Icons"
import InfoBlocksSection, { InfoBlock } from "./InfoBlocksSection"

const blocks: Array<InfoBlock> = [
  {
    title: "Students ask questions",
    body:
      "on a topic they just finished reading from the book; a question that is interesting to them.",
    icon: <BrainIcon />,
  },
  {
    title: "Students conduct research",
    body:
      "by asking an older sibling, or by reading a book from the library, or by searching the Internet.",
    icon: <MagnifyingGlassAndPaperIcon />,
  },
  {
    title: "Students present answers",
    body: "by coming in front of class and teaching their peers, or by making short videos.",
    icon: <PodiumIcon />,
  },
]

const HowWeWorkSection = (props: BaseSectionProps) => (
  <InfoBlocksSection
    title="How we work"
    subtitle="After our teachers have taught a chapter from the textbook, our..."
    isMobileLayout={props.isMobileLayout}
    blocks={blocks}
  />
)

export default HowWeWorkSection
