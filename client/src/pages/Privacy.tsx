import { Link } from 'wouter';
import LegalLayout from '@/components/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information"
      lastUpdated="20 June 2026"
      path="/privacy"
    >
      <p>
        ESPEFAWIS Global Nig Ltd ("ESPEFAWIS", "we", "us", or "our") is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website at{' '}
        <a href="https://www.espefawis.com">www.espefawis.com</a> (the "Site"). Please read this
        policy carefully. By using the Site, you consent to the practices described here.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Information you provide directly:</strong> such as your name, email address, phone
          number, and any message you submit through our contact form.
        </li>
        <li>
          <strong>Information collected automatically:</strong> such as your IP address, browser type,
          device information, pages visited, and the date and time of your visit, gathered through
          cookies and similar technologies.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your enquiries and provide the services you request;</li>
        <li>Operate, maintain, and improve our Site and services;</li>
        <li>Communicate with you about our products, services, and updates (where permitted);</li>
        <li>Monitor and analyse usage and trends to improve your experience;</li>
        <li>Comply with legal obligations and protect our rights.</li>
      </ul>

      <h2>3. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar technologies to operate and improve the Site. You can manage your
        preferences at any time. For full details, please see our{' '}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>4. How We Share Your Information</h2>
      <p>
        We do not sell your personal information. We may share information with trusted third-party
        service providers who help us operate the Site (for example, hosting and analytics
        providers), and where required by law, regulation, or legal process. Any third parties we
        work with are required to handle your data securely and only for the purposes we specify.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfil the purposes described
        in this policy, unless a longer retention period is required or permitted by law.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement reasonable technical and organisational measures to protect your information.
        However, no method of transmission over the internet or electronic storage is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Subject to applicable law (including the Nigeria Data Protection Act, 2023), you may have the
        right to access, correct, update, or request deletion of your personal information, and to
        object to or restrict certain processing. To exercise these rights, please contact us using
        the details below.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        Our Site may contain links to external sites (such as our social media pages). We are not
        responsible for the privacy practices or content of those third-party sites.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        Our Site is not directed to children under the age of 13, and we do not knowingly collect
        personal information from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page
        with an updated "Last updated" date.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle your information, please
        contact us:
      </p>
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
