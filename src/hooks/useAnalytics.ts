import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsEvent {
  event_name: string;
  event_data?: Record<string, any>;
  session_id?: string;
  user_id?: string;
  page_url?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export const useAnalytics = () => {
  const trackEvent = useCallback(async (event: AnalyticsEvent) => {
    try {
      const eventData = {
        ...event,
        page_url: window.location.href,
        referrer: document.referrer || null,
        session_id: sessionStorage.getItem('session_id') || generateSessionId(),
        // Extract UTM parameters from URL
        utm_source: new URLSearchParams(window.location.search).get('utm_source'),
        utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
      };

      await supabase.from('analytics_events').insert(eventData);
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }, []);

  const trackPageView = useCallback(() => {
    trackEvent({
      event_name: 'page_view',
      event_data: {
        path: window.location.pathname,
        title: document.title,
      },
    });
  }, [trackEvent]);

  const trackFormStart = useCallback((formName: string) => {
    trackEvent({
      event_name: 'form_start',
      event_data: { form_name: formName },
    });
  }, [trackEvent]);

  const trackFormSubmit = useCallback((formName: string, success: boolean) => {
    trackEvent({
      event_name: 'form_submit',
      event_data: { 
        form_name: formName,
        success,
      },
    });
  }, [trackEvent]);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    trackEvent({
      event_name: 'cta_click',
      event_data: { 
        cta_name: ctaName,
        location,
      },
    });
  }, [trackEvent]);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent({
      event_name: 'scroll_depth',
      event_data: { depth },
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackFormStart,
    trackFormSubmit,
    trackCTAClick,
    trackScrollDepth,
  };
};

const generateSessionId = (): string => {
  const sessionId = 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  sessionStorage.setItem('session_id', sessionId);
  return sessionId;
};