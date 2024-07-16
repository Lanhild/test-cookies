{
  disablePageInteraction: true,
  guiOptions: {
    consentModal: {
      layout: "bar",
      position: "bottom center",
    },
  },

  categories: {
    necessary: {
      enabled: true, // this category is enabled by default
      readOnly: true, // this category cannot be disabled
    },
    analytics: {},
    ads: {},
  },

  language: {
    default: "en",
    translations: {
      en: async () => {
        const res = await fetch(
          "https://raw.githubusercontent.com/Lanhild/test-cookies/main/i18n/en.json"
        );
        return await res.json();
      },
    },
  },
  onChange: ({ changedCategories }) => {
    if (changedCategories.includes("analytics")) {
      if (!CookieConsent.acceptedCategory("analytics")) {
        _paq.push(["forgetConsentGiven"]);
      } else {
        _paq.push(["setConsentGiven"]);
      }
    }
  },
}
