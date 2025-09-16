import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const { trackPageView, trackScrollDepth } = useAnalytics();

  useEffect(() => {
    // Track initial page view
    trackPageView();

    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrolled = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      // Track scroll milestones
      if (scrolled > maxScrollDepth && scrolled >= 25 && scrolled % 25 === 0) {
        maxScrollDepth = scrolled;
        trackScrollDepth(scrolled);
      }
    };

    // Throttled scroll tracking
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 250);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [trackPageView, trackScrollDepth]);

  return <>{children}</>;
};

export default AnalyticsProvider;