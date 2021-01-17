type ResponsiveYouTubeEmbedProps = {
  videoId: string
  title: string
  /**
   * Width / height (pass in a float)
   */
  ratio?: number
}

const ResponsiveYouTubeEmbed: React.FC<ResponsiveYouTubeEmbedProps> = (props) => {
  const ratio = props.ratio ?? 9 / 16
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: `${ratio * 100}%`,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        title={props.title}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${props.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default ResponsiveYouTubeEmbed
