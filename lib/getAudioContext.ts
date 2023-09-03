let audioContext: AudioContext | null = null

export function getAudioContext(): AudioContext {
  if (!audioContext && typeof window !== 'undefined') {
    audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)()
  }
  return audioContext!
}
