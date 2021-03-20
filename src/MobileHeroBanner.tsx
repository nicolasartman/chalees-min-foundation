import { Box, Heading } from "grommet"
import { heroBannerBackground } from "./colors"
import { headerHeight } from "./constants"
import ResponsiveYouTubeEmbed from "./ResponsiveYouTubeEmbed"

const MobileHeroBanner = () => (
  <Box
    direction="row"
    flex
    overflow={{ horizontal: "hidden" }}
    background={heroBannerBackground}
    style={{ minHeight: "100vh" }}
  >
    <Box
      fill
      direction="column"
      align="center"
      justify="start"
      pad={{ top: `${headerHeight}px`, bottom: "large" }}
    >
      <Box align="center" justify="start" direction="column" fill="horizontal">
        <Box fill="horizontal" align="center">
          <Heading level={2} textAlign="center" color="white">
            <Box style={{ lineHeight: "normal", fontSize: 16, fontWeight: 400 }}>
              We train teachers to promote student
            </Box>
            <Box style={{ fontSize: 24, lineHeight: "normal" }}>
              Critical Thinking, Curiosity, and Communication
            </Box>
            <Box
              style={{
                lineHeight: "normal",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              — skills listed emphatically in the National Education Policy 2020.
            </Box>
          </Heading>
        </Box>
      </Box>
      <Box height="20px" />
      <Box width="70%" flex="grow">
        <ResponsiveYouTubeEmbed title="splash" ratio={16 / 9} videoId="3LHpE-rEZjM" />
      </Box>
    </Box>
  </Box>
)

export default MobileHeroBanner
