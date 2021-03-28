import { BaseSectionProps } from "./BaseSectionProps"
import InfoBlocksSection, { InfoBlock } from "./InfoBlocksSection"
import { BrainIcon, MagnifyingGlassAndPaperIcon } from "./Icons"

const blocks: Array<InfoBlock> = [
  {
    body:
      <>We are a nonprofit organization based in India. If you want to support our work or collaborate, please write to
        us - <a href={'mailto:hi@chaleesmin.school'}>hi@chaleesmin.school</a>
      </>,
    icon: <BrainIcon />,
  },
  {
    body:
      <>To watch more videos of student questions and teacher training, visit our
        <a href='https://www.youtube.com/channel/UCjQUNUa1BYtOTP7F9r1tkKw/videos' target={'_blank'}>YouTube channel</a>.
      </>,
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
