import { Box, Image, Stack } from "grommet"
import { PlayFill } from "grommet-icons"
import { useState } from "react"
import YouTubeVideo, { YouTubeProps } from "react-youtube"
import style from "styled-components"
import { white } from "./colors"
import splashVideoThumbnail from "./images/splashVideoThumbnail.jpg"

const YouTubeVideoContainer = style(Box)({
  // Fixes the dimensions on the extra wrapper div that the react-youtube library creates
  "> div": {
    height: "100%",
    width: "100%",
  },
})

const HeroBannerVideo: React.FC<YouTubeProps> = (props) => {
  const [isAtStart, setIsAtStart] = useState(true)
  console.log({ isAtStart })

  return (
    <Box fill style={{ position: "relative" }}>
      <YouTubeVideoContainer
        fill
        style={{ opacity: isAtStart ? 0 : 1, transition: "opacity 1s ease" }}
      >
        <YouTubeVideo
          id="splash-video"
          className="test"
          opts={{
            height: "100%",
            width: "100%",
            playerVars: {
              modestbranding: 1,
            },
          }}
          videoId="3LHpE-rEZjM"
          onPlay={() => setIsAtStart(false)}
          onEnd={({ target: youTubeVideoApi }) => {
            youTubeVideoApi.pauseVideo()
            setIsAtStart(true)

            // Reset the video to the start after a little time so the outro animation
            // has time to play without the video visually 'jumping' as it fades in.
            window.setTimeout(() => {
              youTubeVideoApi.seekTo(0)
            }, 1000)
          }}
        />
      </YouTubeVideoContainer>
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: isAtStart ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        <Stack fill>
          <Image src={splashVideoThumbnail} width="100%" height="100%" />
          <Box fill align="center" justify="center">
            <Box background="rgba(0, 0, 0, 0.5)" round="50%" pad="large">
              <PlayFill color={white} size="large" />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default HeroBannerVideo
