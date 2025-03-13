"use client";
import * as React from "react";
import Script from "next/script";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
declare global {
  interface Window {
    Razorpay: any;
  }
}
export default function Home() {
  const router = useRouter();
  const purchased = async() => {
    toast("Payment Done. Don't Close The Page Until We Verify")
    const req = await fetch("/api/buy", {
        method: "GET",
    });
    const data = await req.json();
    toast(data.message);
    if(data.message == "Subscribed"){
        router.push("/");
    }
  }
  const handlePayment = async () => {
    try {
      toast("Wait While Redirecting to Payment Page");

      const req = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 100 }),
      });
      const res = await req.json();
      if(res.message == "Subscribed"){
        toast("Subscribed. Wait While Redirecting");
        router.push("/");
      }
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        ammount: 300,
        currency: "INR",
        name: "Godara",
        description: "Just Checking",
        order_id: res.orderId,
        handler: (res: any) => {
          if(res){
            toast("Wait While Processing");
            purchased();
          }
        },
        prefill: {
          name: "Godara",
          email: "premlakshaygodara@gmail.com",
          contact: "+918307030976",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (e) {
      console.error(e);
      toast("Payment Failed!");
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="flex justify-center items-center mx-auto my-auto pt-20">
            <p className="font-bold text-pretty">Subscription Will Be Valid For 90 Days</p>
      </div>
      <div className="flex justify-center items-center h-screen">
        <Button onClick={handlePayment} className="w-64 text-lg">
          Subscribe Now
        </Button>
      </div>
    </>
  );
}
