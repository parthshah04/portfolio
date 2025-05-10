"use client"
import { useAudio } from "@/components/AudioContext"

export function BackgroundBlobs() {
  const { isAudioPlaying } = useAudio()
  // Dynamic classes for loud/soft mode
  const loud = isAudioPlaying
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-pulse animate-scale" />
      <div
        className={`absolute left-1/3 top-1/4 w-96 h-96 rounded-full bg-primary/30 blur-3xl
          ${loud ? "opacity-70 scale-110 animate-blob1-loud" : "opacity-40 scale-100 animate-blob1-soft"}`}
      />
      <div
        className={`absolute right-1/4 top-1/3 w-80 h-80 rounded-full bg-secondary/40 blur-2xl
          ${loud ? "opacity-60 scale-110 animate-blob2-loud" : "opacity-30 scale-100 animate-blob2-soft"}`}
      />
      <div
        className={`absolute left-1/2 bottom-1/4 w-72 h-72 rounded-full bg-accent/30 blur-2xl
          ${loud ? "opacity-50 scale-110 animate-blob3-loud" : "opacity-20 scale-100 animate-blob3-soft"}`}
      />
    </div>
  )
}

/* Add these keyframes and classes to your global CSS (e.g., globals.css):
@keyframes blob1-soft {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-40px, 30px) scale(1.05); }
  66% { transform: translate(20px, -20px) scale(0.98); }
}
@keyframes blob1-loud {
  0%, 100% { transform: translate(0, 0) scale(1.1); }
  33% { transform: translate(-60px, 50px) scale(1.18); }
  66% { transform: translate(40px, -30px) scale(1.05); }
}
@keyframes blob2-soft {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.03); }
  66% { transform: translate(-20px, 20px) scale(1.06); }
}
@keyframes blob2-loud {
  0%, 100% { transform: translate(0, 0) scale(1.1); }
  33% { transform: translate(50px, -60px) scale(1.15); }
  66% { transform: translate(-40px, 30px) scale(1.13); }
}
@keyframes blob3-soft {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30px, 20px) scale(1.04); }
  66% { transform: translate(40px, -30px) scale(0.97); }
}
@keyframes blob3-loud {
  0%, 100% { transform: translate(0, 0) scale(1.1); }
  33% { transform: translate(-50px, 40px) scale(1.16); }
  66% { transform: translate(60px, -40px) scale(1.03); }
}
.animate-blob1-soft { animation: blob1-soft 16s infinite linear; }
.animate-blob1-loud { animation: blob1-loud 8s infinite linear; }
.animate-blob2-soft { animation: blob2-soft 18s infinite linear; }
.animate-blob2-loud { animation: blob2-loud 9s infinite linear; }
.animate-blob3-soft { animation: blob3-soft 20s infinite linear; }
.animate-blob3-loud { animation: blob3-loud 10s infinite linear; }
*/ 