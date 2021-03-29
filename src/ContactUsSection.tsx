import { BaseSectionProps } from "./BaseSectionProps"
import InfoBlocksSection, { InfoBlock } from "./InfoBlocksSection"
import { BrainIcon, MagnifyingGlassAndPaperIcon } from "./Icons"
import { Anchor, Text } from "grommet"

const blocks: Array<InfoBlock> = [
  {
    body:
      <Text>
        We are a nonprofit organization based in India. If you want to support our work or collaborate, please write to
        us - <Anchor href={"mailto:hi@chaleesmin.school"} label={"hi@chaleesmin.school"} />
      </Text>,
    icon: <BrainIcon />,
  },
  {
    body:
      <Text>
        To watch more videos of student questions and teacher training, visit our <Anchor
          href='https://www.youtube.com/channel/UCjQUNUa1BYtOTP7F9r1tkKw/videos'
          label="Youtube channel"
      />.
      </Text>,
    icon: <MagnifyingGlassAndPaperIcon />,
  }
]

const ContactUsSection = (props: BaseSectionProps) => (
  <InfoBlocksSection
    title="Contact Us"
    isMobileLayout={props.isMobileLayout}
    blocks={blocks}
  />
)

export default ContactUsSection
