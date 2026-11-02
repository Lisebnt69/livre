import { Breadcrumb, Section } from "../components/Ui";
import { ExtractEnd, ExtractViewer } from "../components/ExtractViewer";
import { Rich } from "../lib/rich";
import { StripesBand } from "../components/Us";

export default function Extrait({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <>
      <header className="pt-5 sm:pt-6">
        <div className="wrap"><Breadcrumb items={crumbs} /></div>
        <div className="wrap mt-4">
         <div className="relative overflow-hidden rounded-4xl bg-sky px-5 pb-16 pt-10 sm:rounded-5xl sm:px-10 sm:pb-20 sm:pt-14 lg:px-16 lg:pb-20 lg:pt-16">
          <StripesBand className="absolute inset-x-0 bottom-0 !h-3" />
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
