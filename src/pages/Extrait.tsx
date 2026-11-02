import { Breadcrumb, Section } from "../components/Ui";
import { ExtractEnd, ExtractViewer } from "../components/ExtractViewer";

export default function Extrait({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <>
      <header className="border-b border-rule">
        <div className="wrap py-10 sm:py-14">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-6 max-w-4xl text-display-xl !text-[clamp(2.2rem,5vw,4.2rem)]">
            Feuilletez les premières pages du livre, gratuitement.
          </h1>
          <p className="mt-5 max-w-[38rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
            Couverture, sommaire et premières pages : sans compte, sans e-mail. Tournez les pages comme dans un vrai livre.
          </p>
        </div>
      </header>
      <Section tone="mist">
        <div className="mx-auto max-w-5xl">
          <ExtractViewer />
          <ExtractEnd />
        </div>
      </Section>
    </>
  );
}
