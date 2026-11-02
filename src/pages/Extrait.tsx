import { Breadcrumb, Section } from "../components/Ui";
import { ExtractEnd, ExtractViewer } from "../components/ExtractViewer";
import { Rich } from "../lib/rich";

export default function Extrait({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <>
      <header className="pt-5 sm:pt-6">
        <div className="wrap"><Breadcrumb items={crumbs} /></div>
        <div className="wrap mt-4">
         <div className="rounded-4xl bg-mint px-5 py-10 sm:rounded-5xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <h1 className="max-w-4xl text-display-xl !text-[clamp(2.2rem,4.8vw,4rem)]">
            <Rich text="Feuilletez **les premières pages** du livre, gratuitement." />
          </h1>
          <p className="mt-5 max-w-[38rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
            Couverture, sommaire et premières pages : <strong className="font-semibold">sans compte, sans e-mail</strong>. Tournez les pages comme dans un vrai livre.
          </p>
         </div>
        </div>
      </header>
      <Section tone="paper">
        <div className="mx-auto max-w-5xl">
          <ExtractViewer />
          <ExtractEnd />
        </div>
      </Section>
    </>
  );
}
