import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAnalytics } from './useAnalytics';
import { useToast } from '@/hooks/use-toast';

interface LeadData {
  name: string;
  email: string;
  company?: string;
  first_workflow?: string;
}

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackFormSubmit } = useAnalytics();
  const { toast } = useToast();

  const submitLead = async (data: LeadData, formName: string = 'contact_form') => {
    setIsSubmitting(true);
    
    try {
      // Gather UTM parameters and referrer data
      const urlParams = new URLSearchParams(window.location.search);
      const leadData = {
        ...data,
        utm_source: urlParams.get('utm_source'),
        utm_medium: urlParams.get('utm_medium'),
        utm_campaign: urlParams.get('utm_campaign'),
        utm_content: urlParams.get('utm_content'),
        utm_term: urlParams.get('utm_term'),
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
      };

      const { error } = await supabase
        .from('leads')
        .insert(leadData);

      if (error) {
        throw error;
      }

      // Track successful submission
      await trackFormSubmit(formName, true);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      return { success: true };
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Track failed submission
      await trackFormSubmit(formName, false);

      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });

      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitLead,
    isSubmitting,
  };
};