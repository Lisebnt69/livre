import CTAButton from './CTAButton';

const Hero = () => {
  return (
    <section className="bg-bgLight min-h-screen flex items-center justify-center p-8">
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-12">
        {/* Texte côté gauche */}
        <div className="flex-1">
          <h1 className="text-primaryRed text-4xl md:text-6xl font-extrabold">
            RÉUSSIR SON ANNÉE
            <br />
            <span className="text-primaryBlue">DE HIGH SCHOOL</span>
            <br />
            <span className="text-primaryBlue font-semibold">AUX États-Unis</span>
          </h1>
          <p className="mt-6 text-textDark text-lg max-w-md">
            Ce que vous allez maîtriser :
          </p>
          <ul className="mt-4 space-y-3 text-primaryBlue max-w-md bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
            <li>✔ Programmes d’échange & visas J-1 / F-1 expliqués</li>
            <li>✔ Toutes les étapes clés avant le départ</li>
            <li>✔ Vie scolaire, famille d’accueil ou internat</li>
            <li>✔ Les clés d’une année réussie</li>
          </ul>
          <CTAButton href="#acheter" label="Découvrir le livre" className="mt-8" />
        </div>

        {/* Image côté droit */}
        <div className="flex-1 max-w-sm">
          <img
            src="/cover.jpg"
            alt="Couverture du livre"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;