import { Link } from 'wouter';
import LegalLayout from '@/components/LegalLayout';

export default function Cookies() {
  const resetConsent = () => {
    try {
      localStorage.removeItem('espefawis_cookie_consent');
    } catch {
      // ignore storage errors
    }
    window.location.reload();
  };

  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="How and why we use cookies on our website"
      lastUpdated="20 June 2026"
      path="/cookies"
    >
      <p>
        This Cookie Policy explains how ESPEFAWIS Global Nig Ltd ("we", "us", or "our") uses cookies
        and similar technologies on our website at{' '}
        <a href="https://www.espefawis.com">www.espefawis.com</a> (the "Site"). It should be read
        together with our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device when you visit a website. They are
        widely used to make websites work, or work more efficiently, as well as to provide
        information to the site owners. Cookies may be "session" cookies (deleted when you close your
        browser) or "persistent" cookies (which remain until they expire or you delete them).
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <ul>
        <li>
          <strong>Strictly necessary cookies:</strong> required for the Site to function, including
          remembering your cookie preferences. These cannot be switched off.
        </li>
        <li>
          <strong>Performance and analytics cookies:</strong> help us understand how visitors interact
          with the Site by collecting anonymous, aggregated information, so we can improve it.
        </li>
        <li>
          <strong>Functional cookies:</strong> enable enhanced functionality and personalisation, such
          as remembering your preferences.
        </li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Some cookies may be set by third-party services that appear on our pages, such as analytics
        providers or embedded social media content. We do not control the setting of these cookies, so
        please check the relevant third party's website for more information.
      </p>

      <h2>4. Managing Your Cookie Preferences</h2>
      <p>
        When you first visit the Site, you can accept or decline non-essential cookies via our cookie
        banner. You can change your decision at any time by clearing your choice below:
      </p>
      <p>
        <button
          type="button"
          onClick={resetConsent}
          className="btn-primary"
        >
          Reset Cookie Preferences
        </button>
      </p>
      <p>
        You can also control and delete cookies through your browser settings. Please note that
        disabling certain cookies may affect how the Site functions.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be posted on this page
        with an updated "Last updated" date.
      </p>

      <h2>6. Contact Us</h2>
      <p>If you have any questions about our use of cookies, please contact us:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:info@espefawis.com">info@espefawis.com</a>
        </li>
        <li>
          <strong>Phone:</strong> 07037785676
        </li>
      </ul>
    </LegalLayout>
  );
}
