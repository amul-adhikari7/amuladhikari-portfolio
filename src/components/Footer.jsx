const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-emerald-800 to-emerald-950 text-gray-200 py-10 px-6 overflow-hidden shadow-inner">
      {/* Animated blurred background shapes */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-32 bg-emerald-400 opacity-15 rounded-full blur-3xl animate-footer-float" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-600 opacity-10 rounded-full blur-2xl animate-footer-float2" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-4 flex justify-center items-center gap-2 animate-footer-fade">
          <span className="text-2xl font-extrabold text-emerald-300 tracking-wider drop-shadow-lg select-none">
            &lt;/&gt;
          </span>
          <span className="text-lg font-semibold text-emerald-100 tracking-wide select-none">
            Designed & Built by Amul Adhikari
          </span>
        </div>
        <div className="flex justify-center gap-2 mb-2 animate-footer-fade delay-100">
          <span className="text-xs bg-emerald-700/60 px-3 py-1 rounded-full font-mono tracking-wider text-emerald-100 shadow">
            React
          </span>
          <span className="text-xs bg-emerald-700/60 px-3 py-1 rounded-full font-mono tracking-wider text-emerald-100 shadow">
            Tailwind CSS
          </span>
          <span className="text-xs bg-emerald-700/60 px-3 py-1 rounded-full font-mono tracking-wider text-emerald-100 shadow">
            Vite
          </span>
        </div>
        <div className="text-xs text-emerald-200/80 animate-footer-fade delay-200">
          <span className="font-semibold">
            © {new Date().getFullYear()} Amul Adhikari.
          </span>{" "}
          All rights reserved.
        </div>
        <div className="mt-4 animate-footer-fade delay-300">
          <span className="text-[10px] text-emerald-300/60 font-mono tracking-widest">
            "Striving for pixel-perfect code & meaningful experiences."
          </span>
        </div>
      </div>
      <style>{`
        .animate-footer-fade {
          animation: footerFadeIn 1.2s cubic-bezier(.4,2,.6,1);
        }
        .animate-footer-float {
          animation: footerFloat 6s ease-in-out infinite alternate;
        }
        .animate-footer-float2 {
          animation: footerFloat2 7s ease-in-out infinite alternate;
        }
        @keyframes footerFadeIn {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes footerFloat {
          0% { transform: translateY(0) scaleX(1.1); }
          100% { transform: translateY(18px) scaleX(1.2); }
        }
        @keyframes footerFloat2 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-12px) scale(1.08); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
