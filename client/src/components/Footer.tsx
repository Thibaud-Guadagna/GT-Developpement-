function Footer() {
  return (
    <footer className="bg-[#290a75] text-white py-6 mx-5 flex flex-col sm:flex-row justify-between items-center gap-4
   px-5 lg:px-0 w-[89.5%] lg:w-[97.5%] lg:mx-auto">


      <div className="text-lg font-bold lg:ml-5">GT Development</div>
       {/* Copyright + Made by */}
<div className="w-full text-center text-xs mt-4 opacity-50 flex flex-col lg:flex-row lg:justify-center lg:gap-2 lg:space-y-0 space-y-1">
  <div>
    Made by <span className="text-red-600">❤️</span> by GT Développement
  </div>
  <div>&copy; 2025 Thibaud Guadagna. Tous droits réservés.</div>
</div>

      <div className="flex gap-4 lg:mr-5">
        <a href="https://linkedin.com/in/thibaud-guadagna" target="_blank" rel="noopener noreferrer">
          <img src="/ri--linkedin-fill.svg" alt="LinkedIn" className="w-10 h-10 bg-white p-2 rounded-full opacity-25 lg:w-14" />
        </a>
        <a href="https://github.com/Thibaud-Guadagna" target="_blank" rel="noopener noreferrer">
          <img src="/mingcute--github-fill.svg" alt="GitHub" className="w-10 h-10 bg-white p-2 rounded-full opacity-25 lg:w-14" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
