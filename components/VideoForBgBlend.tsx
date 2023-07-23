export const VideoForBgBlend = () => {
  return (
    <div className="container" id="video-bg">
      <div className="bg-syth1 relative left-20 top-28 h-32 w-32 -scale-x-100 transform bg-contain bg-no-repeat" />
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
