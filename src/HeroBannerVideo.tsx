import { Box, Image, Stack, Spinner } from "grommet"
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
  const [isVideoBufferingOrPlaying, setIsVideoBufferingOrPlaying] = useState(false)
  const [videoPlayer, setVideoPlayer] = useState<any>()

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
          onReady={({ target: youTubeVideoApi }) => setVideoPlayer(youTubeVideoApi)}
          onPlay={() => {
            setIsAtStart(false)
          }}
          onEnd={({ target: youTubeVideoApi }) => {
            youTubeVideoApi.pauseVideo()
            setIsVideoBufferingOrPlaying(false)
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
          pointerEvents: isAtStart ? "auto" : "none",
          cursor: isAtStart ? "pointer" : "auto",
          opacity: isAtStart ? 1 : 0,
          transition: "opacity 1s ease",
        }}
        role="button"
        onClick={() => {
          if (videoPlayer) {
            videoPlayer.playVideo()
            setIsVideoBufferingOrPlaying(true)
          }
        }}
      >
        <Stack fill>
          <Image src={splashVideoThumbnail} width="100%" height="100%" />
          <Box fill align="center" justify="center">
            <Box background="rgba(0, 0, 0, 0.5)" round="50%" pad="large">
              <Stack>
                <Box
                  style={{
                    opacity: isVideoBufferingOrPlaying ? 0 : 1,
                    transition: "opacity 0.25s ease",
                  }}
                >
                  <PlayFill color={white} size="large" style={{ display: "block" }} />
                </Box>
                {
                  <Box
                    fill
                    align="center"
                    justify="center"
                    style={{
                      opacity: isVideoBufferingOrPlaying ? 1 : 0,
                      transition: "opacity 0.25s ease",
                    }}
                  >
                    <Spinner size="medium" fill color={white} />
                  </Box>
                }
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default HeroBannerVideo
