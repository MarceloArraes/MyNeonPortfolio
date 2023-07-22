export const VideoForBgBlend = () => {
  return (
    <div className="container" id="video-bg">
      <video
        id="effet"
        width="320"
        height="240"
        loop
        autoPlay
        playsInline={false}
        muted={true}
      >
        <source src="/tactus-waves-hero.mp4" type="video/mp4" />
        <source src="/tactus-waves-hero.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
