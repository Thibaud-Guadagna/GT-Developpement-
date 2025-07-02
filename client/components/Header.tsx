function Header() {
	return (
		<header>
			<div className="flex justify-center items-center w-full">
				<img src="/logothibaud.png" alt="logo" className="w-70 h-70" />
			</div>

			<ul className="flex justify-between sm:text-white bg-[#8121d0] rounded-t-md h-12 md:h-14 px-1 mx-5">
				<li className="text-white py-2 md:py-1 md:px-5">Accueil</li>
				<li className="text-white py-2 md:py-1 md:px-5">Projets</li>
				<li className="text-white py-2 md:py-1 md:px-5">Contact</li>
				<li className="py-2 md:py-1 md:px-5">
					<button className="bg-white text-black font-bold rounded-md p-1 flex items-center text-sm">
						<img
							src="/enveloppe.svg"
							alt="Enveloppe icon"
							className="w-5 h-5 mr-2"
						/>
						Recrutez moi !
					</button>
				</li>
			</ul>

		
			<div className="bg-[#331c52] sm:m-5 p-5 md:-mt-5 flex flex-col sm:flex-row items-center sm:items-start mx-5">
				<div className="flex flex-col sm:mr-5 w-full">
					<h1 className="text-white text-2xl font-bold mb-10 sm:mb-20">
						Bonjour👋
					</h1>
					<h2 className="text-white/15 text-3xl sm:text-4xl mb-10 sm:mb-20">
						Je m'appelle Thibaud
						<br />
						Je suis développeur Web.
					</h2>
					<p className="text-white text-xl sm:text-2xl mb-5">
						Je construis des sites sur le Web.
					</p>

		
					<div className="flex mt-5 ml-5">
						<a
							href="https://www.linkedin.com/in/thibaud-guadagna-893124186/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/ri--linkedin-fill.svg"
								alt="linkedin"
								className="w-10 h-10 bg-white p-2 rounded-full opacity-25"
							/>
						</a>
						<a
							href="https://github.com/Thibaud-Guadagna"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/mingcute--github-fill.svg"
								alt="GitHub"
								className="w-10 h-10 ml-5 bg-white p-2 rounded-full opacity-25"
							/>
						</a>
					</div>
				</div>

				{/* Vidéo à droite des titres */}
				<video
					autoPlay
					loop
					muted
					src="/video2.mp4"
					className="w-64 sm:w-72 h-auto rounded-lg shadow-lg mt-5 sm:mt-0"
				/>
			</div>

			{/* Section des compétences */}
			<section className="bg-[#291C3A] min-h-13 -mt-5 m-5 flex flex-col sm:flex-row justify-between items-center sm:items-start">
				<div className="flex gap-3 p-1">
					<h2 className="text-white text-3xl sm:text-5xl font-bold">4</h2>
					<h3 className="text-white text-xl sm:text-2xl">
						Projets développés pour le moment
					</h3>
				</div>

				<div className="flex p-1 flex-wrap justify-center sm:justify-start">
					<img
						src="/logojavascript.svg"
						alt="JavaScript Logo"
						className="h-11 p-1"
					/>
					<img src="/tslogo.svg" alt="TypeScript Logo" className="h-11 p-1" />
					<img src="/expresslogo.svg" alt="Express Logo" className="h-11 p-1" />
					<img src="/react.svg" alt="React Logo" className="h-11 p-1" />
					<img src="/jwticon.svg" alt="JWT Logo" className="h-11 p-1" />
					<img src="/vscodelogo.svg" alt="VSCode Logo" className="h-11 p-1" />
				</div>
			</section>
		</header>
	);
}

export default Header;
