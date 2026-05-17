"use client"

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#fff8f5",
      fontFamily: "Inter, sans-serif",
      padding: "40px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        maxWidth: "500px",
        width: "100%",
        background: "white",
        border: "1px solid #D4AF37",
        borderRadius: "16px",
        padding: "48px",
        textAlign: "center",
      }}>
        <p style={{
          color: "#ab3500",
          fontWeight: "600",
          letterSpacing: "0.1em",
          fontSize: "12px",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}>
          VivahLipi
        </p>
        <h1 style={{
          fontFamily: "Playfair Display, serif",
          color: "#1e1b18",
          fontSize: "28px",
          marginBottom: "16px",
        }}>
          Something Went Wrong
        </h1>
        <p style={{
          color: "#594139",
          marginBottom: "32px",
          lineHeight: "1.6",
          fontSize: "14px",
        }}>
          We encountered an unexpected error. Please try again.
        </p>
        <button onClick={() => reset()} style={{
          display: "inline-block",
          background: "#ab3500",
          color: "white",
          padding: "14px 32px",
          borderRadius: "99px",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "15px",
        }}>
          Try Again →
        </button>
      </div>
    </main>
  )
}
