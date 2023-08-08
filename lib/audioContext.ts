let audioContext: AudioContext | null = null

if (typeof window !== 'undefined' && !audioContext) {
  audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)()
}

export { audioContext }
