import { Box, Heading } from "grommet"
import { heroBannerBackground } from "./colors"
import { headerHeight } from "./constants"
import HeroBannerVideo from "./HeroBannerVideo"

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
        <Box fill="horizontal" align="center" pad={{ top: "medium", bottom: "medium" }}>
          <Heading level={2} textAlign="center" color="white">
            <Box style={{ lineHeight: "normal", fontSize: 16, fontWeight: 400 }}>
              We train teachers to promote student
            </Box>
            <Box style={{ fontSize: 24, lineHeight: "normal" }} pad={{ vertical: "small" }}>
              Critical Thinking, Curiosity,{" "}
              <span style={{ display: "inline-block" }}>and Communication</span>
            </Box>
            <Box
              style={{
                lineHeight: "normal",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              — skills listed emphatically in the{" "}
              <span style={{ display: "inline-block" }}>National Education Policy 2020.</span>
            </Box>
          </Heading>
        </Box>
      </Box>
      <Box height="20px" />
      <Box width="70%" flex="grow">
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: `${(16 / 9) * 100}%`,
            paddingTop: 25,
            height: 0,
          }}
        >
          <Box
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <HeroBannerVideo />
          </Box>
        </div>
      </Box>
    </Box>
  </Box>
)

export default MobileHeroBanner
