// PrivacyPolicy.jsx
const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-lg mb-4">
        Your privacy is important to us. Below is an explanation of how we
        collect, use, store, and protect your information when you visit this
        site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Use of Cookies and Third-Party Ads
      </h2>
      <p className="text-lg mb-4">
        This site uses Google AdSense to serve ads. Google and other third-party
        vendors may use cookies to serve personalized ads based on your previous
        visits to this website and other websites.
      </p>
      <p className="text-lg mb-4">
        You can opt-out of personalized ads via the Google Ads Settings page:{" "}
        <a
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          adssettings.google.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Data Collection</h2>
      <p className="text-lg mb-4">
        We do not collect personally identifiable information. Your IP address
        is displayed for the purpose of providing the service only and is not
        stored on our server.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="text-lg mb-4">
        We take reasonable measures to protect your data, but we cannot
        guarantee full security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">External Links</h2>
      <p className="text-lg mb-4">
        This website may contain links to external sites. We are not responsible
        for the content or privacy policies of these external sites.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions about this privacy policy, feel free to
        contact us at:
        <br />
        <a href="mailto:dabb468@gmail.com" className="text-blue-600 underline">
          dabb468@gmail.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
