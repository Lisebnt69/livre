import { useEffect, useState } from "react";

const KEY = "cookie_consent_v1";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  const accept = () => {
    localStorage.setItem(KEY, "accepted");
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    setShow(false);
  };

  const refuse = () => {
    localStorage.setItem(KEY, "refused");
    // on laisse analytics_storage denied
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] p-4">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white border border-black/10 shadow-2xl p-5">
        <p className="text-sm text-primaryBlue/85 leading-relaxed">
          On utilise Google Analytics pour mesurer l’audience et améliorer le site.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            onClick={refuse}
            className="px-5 py-3 rounded-xl font-semibold bg-white text-primaryBlue border border-black/10 hover:border-black/20"
          >
            Refuser
          </button>

          <button
            onClick={accept}
            className="px-5 py-3 rounded-xl font-semibold bg-primaryBlue text-white hover:bg-primaryBlue/90"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
