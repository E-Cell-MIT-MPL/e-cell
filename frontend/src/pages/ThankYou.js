export default function ThankYou() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1329] p-4 relative overflow-hidden">
        {/* Stars background effect */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
  
        <div className="bg-[#111B3B]/50 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md w-full text-center border border-blue-500/20">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#40C9FF] to-[#6B7CFF] bg-clip-text text-transparent">
              Thank You!
            </h1>
  
            <p className="text-lg text-blue-100 mb-8">
              We appreciate your time with us. Looking forward to seeing you again next year!
            </p>
  
            <button
              onClick={() => (window.location.href = "https://ecellmit.in")}
              className="bg-gradient-to-r from-[#40C9FF] to-[#6B7CFF] text-white font-medium py-3 px-8 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Return to E-Cell MIT
            </button>
  
            <p className="text-sm text-blue-200/60 mt-8">See you at MES 2025! ✨</p>
          </div>
        </div>
  
        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out;
          }
  
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    )
  }