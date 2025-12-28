
export const openRazorpayCheckout = async (amount, currency = "INR", name = "Harshustle", description = "Service Payment", prefill = {}) => {
    const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

    if (!RAZORPAY_KEY_ID) {
        console.warn("Razorpay Key ID is missing! Add VITE_RAZORPAY_KEY_ID to your .env file.");
        alert("Payment gateway configuration missing. Please contact support.");
        return;
    }

    // 1. Capture user details
    let userName = prefill.name;
    let userPhone = prefill.contact;
    
    // Fallback if not provided (though effectively required now via Modal)
    if (!userName || !userPhone) {
        console.warn("User details missing passed to Razorpay checkout");
    }

    // Save pending details to match later
    const paymentSessionData = {
        name: userName,
        phone: userPhone,
        serviceName: name, // Using 'name' arg which is Service Title
        amount: amount,
        currency: currency
    };

    const options = {
        key: RAZORPAY_KEY_ID,
        amount: amount * 100, // Amount in paise
        currency: currency,
        name: "Harshustle",
        description: description,
        image: "/my-react-app/src/assets/logos/Harsh.png",
        handler: function (response) {
            console.log("Payment Successful!", response);
            
            // Save confirmed data for Success Page
            localStorage.setItem("confirmed_payment_user", JSON.stringify({
                ...paymentSessionData,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature
            }));

            window.location.href = '/success'; 
        },
        prefill: {
            name: userName,
            email: prefill.email || "",
            contact: userPhone
        },
        theme: {
            color: "#A855F7"
        }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
        console.error("Payment Failed", response.error);
        alert(`Payment Failed: ${response.error.description}`);
    });
    rzp1.open();
};
