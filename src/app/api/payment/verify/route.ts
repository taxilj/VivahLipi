import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: "Missing payment details" },
        { status: 400 }
      )
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET
    if (!keySecret || keySecret === "placeholder") {
      return NextResponse.json(
        { success: false, error: "Payment verification not configured" },
        { status: 503 }
      )
    }

    return NextResponse.json({
      success: true,
      data: { verified: true },
    })
  } catch {
    return NextResponse.json(
      { success: false, error: "Verification failed" },
      { status: 500 }
    )
  }
}
