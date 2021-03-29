import { Box, Heading } from "grommet"
import { lighten } from "polished"
import { ReactNode } from "react"
import { BaseSectionProps } from "./BaseSectionProps"
import { purple } from "./colors"
import SectionContainer from "./SectionContainer"

export type InfoBlock = {
  title?: string
  body: ReactNode
  icon: ReactNode
}

type BlockProps = InfoBlock & {
  isMobileLayout: boolean
  alignIconHorizontallyOnNarrowWidth?: boolean
}

const Block = (props: BlockProps) => (
  <Box
    direction={props.isMobileLayout && props.alignIconHorizontallyOnNarrowWidth ? "row" : "column"}
    gap={props.isMobileLayout ? "small" : "medium"}
    fill="horizontal"
  >
    <Box direction="row" align="start" flex="grow">
      <Box
        flex="shrink"
        pad="small"
        style={{
          borderRadius: "50%",
          border: `1px solid ${lighten(0.3, purple)}`,
          background: "white",
        }}
      >
        {props.icon}
      </Box>
    </Box>
    <Box direction="column" fill="horizontal">
      <Heading level="3" margin="0">
        {props.title}
      </Heading>
      <Box>{props.body}</Box>
    </Box>
  </Box>
)

type InfoBlocksSectionProps = {
  title: string
  subtitle?: string
  blocks: Array<InfoBlock>
  alignIconsHorizontallyOnNarrowWidth?: boolean
} & BaseSectionProps

const InfoBlocksSection = (props: InfoBlocksSectionProps) => (
  <SectionContainer flex="grow">
    <Box pad={{ horizontal: "large" }} style={{ maxWidth: 1600 }} alignSelf="center">
      <Box direction="column" fill="horizontal" align="start">
        <Heading level={2} margin="0">
          {props.title}
        </Heading>
        {props.subtitle ? <Box fill="horizontal">{props.subtitle}</Box> : null}
      </Box>
      <Box height="20px" />
      <Box
        direction={props.isMobileLayout ? "column" : "row"}
        gap="40px"
        pad={{ vertical: "medium" }}
        align="start"
      >
        {props.blocks.map((block) => (
          <Box fill="horizontal">
            <Block
              {...block}
              isMobileLayout={props.isMobileLayout}
              alignIconHorizontallyOnNarrowWidth={props.alignIconsHorizontallyOnNarrowWidth}
            />
          </Box>
        ))}
      </Box>
    </Box>
  </SectionContainer>
)

export default InfoBlocksSection
