"use client";

import Script from "next/script";
import { useMemo, useState, useSyncExternalStore } from "react";

import { Button } from "./ui/button";

type ConsentState = "granted" | "denied" | null;

const STORAGE_KEY = "analytics-consent";
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-L105YBH59F";

const consentPayload = (state: Exclude<ConsentState, null>) => ({
  ad_user_data: state,
  ad_personalization: state,
  ad_storage: state,
  analytics_storage: state,
});

type AnalyticsConsentProps = {
  nonce?: string;
};

export function AnalyticsConsent({ nonce }: AnalyticsConsentProps) {
  const [localConsent, setLocalConsent] = useState<ConsentState>(null);

  const storedConsent = useSyncExternalStore(
    () => () => {},
    (): ConsentState => {
      if (typeof window === "undefined") return null;
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === "granted" || stored === "denied" ? stored : null;
    },
    (): ConsentState => null
  );

  const consent = localConsent ?? storedConsent;

  const handleChoice = (state: Exclude<ConsentState, null>) => {
    localStorage.setItem(STORAGE_KEY, state);
    setLocalConsent(state);

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", consentPayload(state));
    }
  };

  const showBanner = consent === null;

  const consentScripts = useMemo(() => {
    if (consent !== "granted") return null;

    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
          nonce={nonce}
        />
        <Script id="ga-setup" strategy="afterInteractive" nonce={nonce}>
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', ${JSON.stringify(consentPayload("granted"))});
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`}
        </Script>
      </>
    );
  }, [consent, nonce]);

  return (
    <>
      {consentScripts}
      {showBanner && (
        <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">
                Cookies voor analytics?
              </p>
              <p>
                Ik gebruik Google Analytics 4 om mijn site te verbeteren. Mag ik
                anonieme gebruiksdata opslaan?
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="secondary"
                className="bg-slate-900 text-white hover:bg-slate-800"
                onClick={() => handleChoice("granted")}
              >
                Ja, is goed
              </Button>
              <Button
                variant="secondary"
                className="bg-slate-900 text-white hover:bg-slate-800"
                onClick={() => handleChoice("denied")}
              >
                Liever niet
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
