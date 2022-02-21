const Analytics = {
  pageview(url) {
    if (typeof window.gtag !== 'function') {
      return;
    }
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  },

  event({ action, params }) {
    if (typeof window.gtag !== 'function') {
      return;
    }
    window.gtag('event', action, params);
  },
};

export default Analytics;
