export const VideoForBgBlend = () => {
  return (
    <div className="video-wrap">
      <video
        autoPlay={true}
        playsInline={false}
        loop={false}
        muted={false}
        id="video-bg"
      >
        <source
          src="https://tactus.wpengine.com/wp-content/uploads/tactus-waves-hero.mp4"
          type="video/mp4"
        />
        <source
          src="https://tactus.wpengine.com/wp-content/uploads/tactus-waves-hero.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}
