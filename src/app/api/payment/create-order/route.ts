import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount, currency } = body

    if (!amount || typeof amount !== "number") {
      return NextResponse.json(
        { success: false, error: "Invalid amount" },
        { status: 400 }
      )
    }

    const razorpayKey = process.env.RAZORPAY_KEY_ID
    if (!razorpayKey || razorpayKey === "placeholder") {
      return NextResponse.json(
        { success: false, error: "Payment not configured" },
        { status: 503 }
      )
    }

    return NextResponse.json({
      success: true,
      data: {
        id: "order_" + Date.now(),
        amount,
        currency: currency || "INR",
        key: razorpayKey,
      },
    })
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    )
  }
}
