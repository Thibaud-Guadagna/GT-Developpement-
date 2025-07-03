import { useState, useEffect } from "react";

// Ajoutez cette déclaration pour étendre ImportMeta et éviter l'erreur TypeScript


type Repo = {
	id: string;
	name: string;
	language?: string;
	html_url: string;
	description?: string;
};

function Projets() {
	const [repos, setRepos] = useState<Repo[]>([]);

	useEffect(() => {
		const repoUrls = [
			"https://api.github.com/repos/Thibaud-Guadagna/TakuTaku",
			"https://api.github.com/repos/Thibaud-Guadagna/strasgite",
			"https://api.github.com/repos/Thibaud-Guadagna/Projet-Wild-Eats",
		];

		const token = import.meta.env.VITE_GITHUB_TOKEN;

		Promise.all(
			repoUrls.map((url) =>
				fetch(url, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}).then((res) => {
					if (!res.ok) {
						throw new Error(`Erreur HTTP ${res.status} pour ${url}`);
					}
					return res.json();
				}),
			),
		)
			.then(setRepos)
			.catch((err) => console.error("Erreur lors du fetch des projets:", err));
	}, []);

	return (
		<section id="projects" className="bg-[#E1EBED] m-5 -mt-5">
			<div>
				<h2 className="text-[#331c52] font-bold text-3xl m-5 p-5">
					Mes Projets :
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
				{repos.map((repo) => (
  <div
    key={repo.id}
    className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition lg:flex lg:flex-col"
  >
    <h3 className="text-[#331c52] font-semibold text-xl mb-2">{repo.name}</h3>

    <p className="text-sm text-gray-600 mb-2 flex-grow">{repo.description}</p>

    <div className="mb-3">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Voir sur GitHub
      </a>
    </div>

    <div>
      {(repo.name === "TakuTaku" || repo.name === "strasgite" || repo.name === "Projet-Wild-Eats") && (
        <video
          controls
          className="rounded-xl h-48 w-full object-contain"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={
              repo.name === "TakuTaku"
                ? "/TakuTaku.mp4"
                : repo.name === "strasgite"
                ? "/Strasbourg.mp4"
                : "/wildeat.mp4"
            }
            type="video/mp4"
          />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      )}
    </div>
  </div>
))}

			</div>
		</section>
	);
}

export default Projets;
