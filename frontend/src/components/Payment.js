import React from "react";
import { motion } from "framer-motion";
import mesPass from "../assets/mes/IMG_MES_Pass.png";

const Payment = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1a1f2e] to-[#0a0f1c]">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400">
            Book Your Seats Now!!
          </h2>
          <p className="text-xl text-[#22d3ee]">
            MES 2025 Speakers and Conclave Pass
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.img
          src={mesPass}
          alt="Payment Illustration"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 rounded-lg shadow-lg"
        />

        {/* Pay Now Button */}

        <a
          href="https://pay.ecellmit.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#22d3ee] to-purple-500 text-white py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 mt-4"
          >
            Pay Now
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Payment;
