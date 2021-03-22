import { Box, Heading } from "grommet"
import { heroBannerBackground } from "./colors"
import { headerHeight } from "./constants"

const HeroBanner = () => (
  <Box
    direction="row"
    flex
    overflow={{ horizontal: "hidden" }}
    background={heroBannerBackground}
    style={{ minHeight: "100vh", height: "100vh" }}
  >
    <Box
      fill
      direction={"row"}
      align="center"
      justify="center"
      gap="medium"
      pad={{ horizontal: "20px" }}
    >
      <Box align="end" pad={{ right: "40px" }} data-dev="text">
        <Box align={"start"} justify="start" direction="column" fill="horizontal">
          <Box fill="horizontal" align="center">
            <Heading
              level={1}
              margin="0"
              style={{ lineHeight: "1.25em" }}
              textAlign="start"
              color="white"
            >
              <Box style={{ lineHeight: "normal", fontSize: 25, fontWeight: 400 }}>
                We train teachers to promote student
              </Box>
              <Box height="10px" />

              <Box style={{ fontSize: 60 }}>
                <span>
                  Critical Thinking, <br />
                  Curiosity, <span style={{ fontWeight: 300 }}>and</span> <br />
                  Communication
                </span>
              </Box>
              <Box
                pad={{ top: "5px" }}
                style={{
                  fontSize: 25,
                  lineHeight: "normal",
                  fontWeight: "normal",
                }}
              >
                — skills listed emphatically in the National Education Policy 2020.
              </Box>
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box
        data-dev="video"
        elevation="medium"
        style={{
          position: "relative",
          width: `calc((100vh - ${headerHeight}px - 40px) * 9/16)`,
          minWidth: `calc((100vh - ${headerHeight}px - 40px) * 9/16)`,
          height: `calc(100vh - ${headerHeight}px - 40px)`,
          minHeight: `calc(100vh - ${headerHeight}px - 40px)`,
        }}
      >
        <iframe
          title="Student Driven Learning"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={`https://www.youtube.com/embed/3LHpE-rEZjM`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Box>
  </Box>
)

export default HeroBanner
