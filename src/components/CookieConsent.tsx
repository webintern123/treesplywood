import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, Shield, Info } from 'lucide-react';
import { ModernButton } from './design-system/ModernButton';

const CONSENT_KEY = 'trees-plywood-cookie-consent';
const CONSENT_TIMESTAMP_KEY = 'trees-plywood-cookie-consent-timestamp';
const CONSENT_EXPIRY_DAYS = 365;

interface CookieConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsentState>({
    necessary: true, // Always true, cannot be disabled
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(CONSENT_KEY);
    const timestamp = localStorage.getItem(CONSENT_TIMESTAMP_KEY);

    if (!consent || !timestamp) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }

    // Check if consent has expired (after 1 year)
    const consentDate = new Date(parseInt(timestamp));
    const expiryDate = new Date(consentDate);
    expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);

    if (new Date() > expiryDate) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (consentState: CookieConsentState) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentState));
    localStorage.setItem(CONSENT_TIMESTAMP_KEY, Date.now().toString());
    setIsVisible(false);

    // TODO: Initialize analytics/marketing scripts based on consent
    if (consentState.analytics) {
      // Initialize Google Analytics or similar
      console.log('Analytics enabled');
    }
    if (consentState.marketing) {
      // Initialize marketing pixels (Facebook, Google Ads, etc.)
      console.log('Marketing cookies enabled');
    }
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookieConsentState) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
            onClick={() => !showDetails && setIsVisible(false)}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[9999]"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-[#A0522C]/20 rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#A0522C] to-[#432011] p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Cookie className="w-5 h-5" />
                    <h3 className="font-semibold">Cookie Settings</h3>
                  </div>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="hover:bg-white/20 rounded-lg p-1 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {!showDetails ? (
                  // Simple View
                  <>
                    <p className="text-[#432011]/80 text-sm mb-4 leading-relaxed">
                      We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-4 h-4 text-[#A0522C]" />
                      <p className="text-xs text-[#432011]/60">
                        Your privacy is important to us.{' '}
                        <a
                          href="/privacy-policy"
                          className="text-[#A0522C] hover:underline"
                        >
                          Learn more
                        </a>
                      </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex flex-col gap-2">
                      <ModernButton
                        onClick={handleAcceptAll}
                        variant="primary"
                        fullWidth
                      >
                        Accept All
                      </ModernButton>

                      <div className="flex gap-2">
                        <ModernButton
                          onClick={handleRejectAll}
                          variant="outline"
                          fullWidth
                        >
                          Reject All
                        </ModernButton>
                        <ModernButton
                          onClick={() => setShowDetails(true)}
                          variant="secondary"
                          icon={<Info className="w-4 h-4" />}
                          fullWidth
                        >
                          Customize
                        </ModernButton>
                      </div>
                    </div>
                  </>
                ) : (
                  // Detailed View
                  <>
                    <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                      {/* Necessary Cookies */}
                      <div className="border border-[#A0522C]/10 rounded-lg p-4 bg-[#A0522C]/5">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-[#432011]">
                            Necessary Cookies
                          </h4>
                          <div className="px-3 py-1 bg-[#432011] text-white text-xs rounded-full">
                            Always Active
                          </div>
                        </div>
                        <p className="text-sm text-[#432011]/70">
                          Essential for the website to function properly. Cannot be disabled.
                        </p>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="border border-[#A0522C]/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-[#432011]">
                            Analytics Cookies
                          </h4>
                          <button
                            onClick={() => togglePreference('analytics')}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              preferences.analytics
                                ? 'bg-[#A0522C]'
                                : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                                preferences.analytics
                                  ? 'translate-x-6'
                                  : 'translate-x-0.5'
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-sm text-[#432011]/70">
                          Help us understand how visitors interact with our website to improve user experience.
                        </p>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="border border-[#A0522C]/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-[#432011]">
                            Marketing Cookies
                          </h4>
                          <button
                            onClick={() => togglePreference('marketing')}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              preferences.marketing
                                ? 'bg-[#A0522C]'
                                : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                                preferences.marketing
                                  ? 'translate-x-6'
                                  : 'translate-x-0.5'
                              }`}
                            />
                          </button>
                        </div>
                        <p className="text-sm text-[#432011]/70">
                          Used to display relevant advertisements and track campaign performance.
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <ModernButton
                        onClick={() => setShowDetails(false)}
                        variant="outline"
                      >
                        Back
                      </ModernButton>
                      <ModernButton
                        onClick={handleSavePreferences}
                        variant="primary"
                        fullWidth
                      >
                        Save Preferences
                      </ModernButton>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Helper function to check if user has consented to specific cookie type
export function hasConsent(type: keyof CookieConsentState): boolean {
  const consent = localStorage.getItem(CONSENT_KEY);
  if (!consent) return false;
  
  try {
    const consentState = JSON.parse(consent) as CookieConsentState;
    return consentState[type] || false;
  } catch {
    return false;
  }
}

// Helper function to manually show cookie preferences
export function showCookiePreferences() {
  // Clear consent to force banner to show
  localStorage.removeItem(CONSENT_KEY);
  localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
  window.location.reload();
}
