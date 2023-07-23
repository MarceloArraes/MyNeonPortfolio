let audioContext

if (typeof window !== 'undefined' && !audioContext) {
  audioContext = new (window.AudioContext || window.webkitAudioContext)()
}

export default audioContext
