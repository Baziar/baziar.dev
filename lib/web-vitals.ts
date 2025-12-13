export function reportWebVitals(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', {
      name: metric.name,
      value: Math.round(metric.value),
      rating: metric.rating,
      id: metric.id,
    });
  }

  // Send to analytics service (optional)
  // You can integrate with Google Analytics, Plausible, or custom endpoint here
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.rating === 'good' ? metric.value : 0),
      event_category: 'web_vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

export function setupPerformanceObserver() {
  if (typeof window === 'undefined') return;

  // Monitor Long Tasks
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list: any) => {
        for (const entry of list.getEntries()) {
          console.log('Long Task detected:', {
            duration: entry.duration,
            startTime: entry.startTime,
          });
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Browser doesn't support longtask observer
    }
  }

  // Monitor Resource Timing
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as any;
      if (perfData) {
        console.log('Page Load Metrics:', {
          domContentLoaded: Math.round(
            perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart
          ),
          loadComplete: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
          domInteractive: Math.round(perfData.domInteractive - perfData.fetchStart),
        });
      }
    });
  }
}
