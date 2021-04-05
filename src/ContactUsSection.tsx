import { Anchor, Box, Text } from "grommet"
import { Mail as MailIcon, Youtube as YoutubeIcon } from "grommet-icons"
import { BaseSectionProps } from "./BaseSectionProps"
import { purple } from "./colors"
import InfoBlocksSection, { InfoBlock } from "./InfoBlocksSection"

const blocks: Array<InfoBlock> = [
  {
    body: (
      <Text>
        We are a nonprofit organization based in India. If you want to support our work or
        collaborate, please write to us -{" "}
        <Anchor
          href={"mailto:hi@chaleesmin.school"}
          label={"hi@chaleesmin.school"}
          target="_blank"
        />
      </Text>
    ),
    icon: (
      <Box pad="2px">
        <MailIcon color={purple} size="46px" />
      </Box>
    ),
  },
  {
    body: (
      <Text>
        To watch more videos of student questions and teacher training, visit our{" "}
        <Anchor
          href="https://www.youtube.com/channel/UCjQUNUa1BYtOTP7F9r1tkKw/videos"
          label="Youtube channel"
          target="_blank"
        />
        .
      </Text>
    ),
    icon: (
      <Box pad="2px">
        <YoutubeIcon color="red" size="46px" />
      </Box>
    ),
  },
]

const ContactUsSection = (props: BaseSectionProps) => (
  <InfoBlocksSection title="Contact Us" isMobileLayout={props.isMobileLayout} blocks={blocks} />
)

export default ContactUsSection
