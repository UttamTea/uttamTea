import axios from "axios";

export const handlePayment = async (totalPrice, cartItems) => {
  try {
    // STEP 1: Create Razorpay Order
    const res = await axios.post(
      "http://localhost:1337/api/razorpay/create-order",
      {
        amount: totalPrice,
      }
    );

    const { order } = res.data;

    const options = {
      key: "rzp_test_ZGTAPsz4bPURGT",
      amount: order.amount,
      currency: order.currency,
      name: "Uttam Tea",
      description: "Cart Payment",
      order_id: order.id,
      handler: async function (response) {
        // STEP 2: Verify Signature with Backend
        try {
          const verifyRes = await axios.post(
            "http://localhost:1337/api/razorpay/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyRes.data.success) {
            console.log("✅ Payment verified and successful!");

            // ✅ STEP 3: Save order to Strapi
            await axios.post("http://localhost:1337/api/razorpay/save-order", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: totalPrice,
              cart_items: cartItems, // this must be passed from outside
              customer_email: "test@example.com",
              order_status: "paid",
            });

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
        name: "Rohit Maheshwari",
        email: "test@example.com",
        contact: "9999999999",
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
