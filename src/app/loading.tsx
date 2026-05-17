export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-gold/30 border-t-saffron rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-muted">Loading...</p>
      </div>
    </div>
  )
}
