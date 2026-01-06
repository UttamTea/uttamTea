import axios from "axios";

export const handlePayment = async (finalTotal, subtotal, deliveryCharge, cartItems, personalDetails) => {
  try {
    // STEP 1: Create Razorpay Order
    const res = await axios.post(
      "https://amazing-moonlight-9222a198d9.strapiapp.com/api/razorpay/create-order",
      {
        amount: finalTotal,
      }
    );

    const { order, key_id } = res.data;

    const options = {
      key: key_id,
      amount: order.amount,
      currency: order.currency,
      name: "Uttam Tea",
      description: "Cart Payment",
      order_id: order.id,
      handler: async function (response) {
        // STEP 2: Verify Signature with Backend
        try {
          const verifyRes = await axios.post(
            "https://amazing-moonlight-9222a198d9.strapiapp.com/api/razorpay/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyRes.data.success) {
            console.log("✅ Payment verified and successful!");

            // ✅ STEP 3: Save order to Strapi
            await axios.post(
              "https://amazing-moonlight-9222a198d9.strapiapp.com/api/razorpay/save-order",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount: finalTotal,
                subtotal: subtotal,
                delivery_charge: deliveryCharge,
                cart_items: cartItems, // this must be passed from outside
                personal_details: personalDetails, // ✅ added
                customer_email: personalDetails.email, // ✅ dynamic instead of hardcoded
                order_status: "paid",
              }
            );

            window.location.href = "/success";
          } else {
            console.log("❌ Payment signature mismatch");
            alert("Payment Failed. Please try again.");
          }
        } catch (verifyError) {
          console.error("Verification error:", verifyError);
          alert("Verification failed. Try again.");
        }
      },
      prefill: {
        name: `${personalDetails?.firstName || ""} ${personalDetails?.lastName || ""}`.trim(),
        email: personalDetails?.email || "",
        contact: personalDetails?.phone || "",
      },
      theme: {
        color: "#3f704d",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Payment Init Error:", err);
    alert("Something went wrong while initiating payment.");
  }
};
