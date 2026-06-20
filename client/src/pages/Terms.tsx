import { Link } from 'wouter';
import LegalLayout from '@/components/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The terms governing your use of our website"
      lastUpdated="20 June 2026"
      path="/terms"
    >
      <p>
        These Terms of Service ("Terms") govern your access to and use of the website at{' '}
        <a href="https://www.espefawis.com">www.espefawis.com</a> (the "Site"), operated by ESPEFAWIS
        Global Nig Ltd ("ESPEFAWIS", "we", "us", or "our"). By accessing or using the Site, you agree
        to be bound by these Terms. If you do not agree, please do not use the Site.
      </p>

      <h2>1. Use of the Site</h2>
      <p>
        You may use the Site only for lawful purposes and in accordance with these Terms. You agree
        not to:
      </p>
      <ul>
        <li>Use the Site in any way that breaches applicable laws or regulations;</li>
        <li>Attempt to gain unauthorised access to the Site, its servers, or related systems;</li>
        <li>Introduce malicious code or interfere with the proper working of the Site;</li>
        <li>Use the Site to transmit unsolicited or unauthorised advertising or spam;</li>
        <li>Copy, reproduce, or exploit any part of the Site for commercial purposes without our prior written consent.</li>
      </ul>

      <h2>2. Intellectual Property</h2>
      <p>
        All content on the Site — including text, graphics, logos, images, and design — is the
        property of ESPEFAWIS Global Nig Ltd or its licensors and is protected by applicable
        intellectual property laws. You may not use, reproduce, or distribute any content without our
        prior written permission.
      </p>

      <h2>3. Services and Information</h2>
      <p>
        The Site provides general information about ESPEFAWIS and our agro-allied and multi-sector
        solutions. While we strive to keep information accurate and up to date, we make no warranties
        or representations about the completeness, accuracy, or reliability of any content. Any
        reliance you place on such information is at your own risk.
      </p>

      <h2>4. Enquiries and Communications</h2>
      <p>
        Submitting an enquiry through our contact form does not create any contractual relationship.
        Any services we provide will be subject to a separate written agreement between you and
        ESPEFAWIS.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        The Site may contain links to third-party websites or resources. We provide these links for
        convenience only and are not responsible for the content, products, or services available
        through them.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, ESPEFAWIS shall not be liable for any indirect,
        incidental, special, or consequential damages arising out of or in connection with your use
        of, or inability to use, the Site.
      </p>

      <h2>7. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless ESPEFAWIS and its directors, employees, and agents
        from any claims, losses, or damages arising from your breach of these Terms or your misuse of
        the Site.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Your use of the Site is also governed by our <Link href="/privacy">Privacy Policy</Link> and{' '}
        <Link href="/cookies">Cookie Policy</Link>, which explain how we handle your information.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of the Federal Republic
        of Nigeria. Any disputes arising shall be subject to the exclusive jurisdiction of the
        Nigerian courts.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may revise these Terms at any time. Updated Terms will be posted on this page with a new
        "Last updated" date. Your continued use of the Site after changes are posted constitutes your
        acceptance of the revised Terms.
      </p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:info@espefawis.com">info@espefawis.com</a>
        </li>
        <li>
          <strong>Phone:</strong> 07037785676
        </li>
        <li>
          <strong>Location:</strong> Nigeria
        </li>
      </ul>
    </LegalLayout>
  );
}
