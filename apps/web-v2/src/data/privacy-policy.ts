import type { Paragraph } from "@/types/paragraph";

const privacyPolicy: {
  title: string;
  last_updated: string;
  contents: Paragraph[];
} = {
  title: "Privacy Policy",
  last_updated: "Last Updated: July 1, 2024",
  contents: [
    {
      title: "",
      contents: [
        {
          paragraph:
            'Welcome to Hooore.com (referred to as "we", "us", or "our"). We are committed to protecting and respecting your privacy. This privacy policy explains how we collect, use, disclose, and safeguard personal information that you provide to us when using our website [Hooore.com] and related services.',
        },
      ],
    },
    {
      title: "Information We Collect",
      contents: [
        {
          paragraph:
            "We may collect and process the following information about you:",
          list: {
            type: "unordered",
            items: [
              "Information you provide to us through registration forms or other interactions on our website, such as name, email address, phone number, etc.",
              "Information you provide when contacting us, whether through the website, email, or phone.",
              "Information about your usage of our website, including but not limited to traffic data, location, weblogs, and other resources accessed.",
            ],
          },
        },
      ],
    },
    {
      title: "Use of Information",
      contents: [
        {
          paragraph: "We use the information we collect to:",
          list: {
            type: "unordered",
            items: [
              "Provide services and information requested by you.",
              "Manage and operate our website.",
              "Improve, customize, and tailor our services.",
              "Send service-related notices or policy updates.",
              "Respond to your inquiries or requests.",
            ],
          },
        },
      ],
    },
    {
      title: "Disclosure of Information",
      contents: [
        {
          paragraph:
            "We will not sell, share, or rent your personal information to third parties without your consent, except where required by law or in circumstances necessary to protect our legal interests.",
        },
      ],
    },
    {
      title: "Security",
      contents: [
        {
          paragraph:
            "We take reasonable security measures to protect your personal information from unauthorized access or use. However, no method of transmitting data over the internet or electronic storage is entirely secure. Therefore, while we strive to protect your personal information, we cannot guarantee the security of data transmitted to us.",
        },
      ],
    },
    {
      title: "Your Rights",
      contents: [
        {
          paragraph:
            "You have the right to access, correct, or delete personal information we hold about you. You also have the right to request that we do not send marketing information to you. To exercise these rights or if you have questions or complaints about the collection or use of your personal information, please contact us using the contact information provided at the end of this policy.",
        },
      ],
    },
    {
      title: "Changes to Privacy Policy",
      contents: [
        {
          paragraph:
            "We may update this privacy policy periodically to reflect changes in our information practices. Significant changes will be announced on our website alongside the updated privacy policy.",
        },
      ],
    },
    {
      title: "Your Consent",
      contents: [
        {
          paragraph:
            "By using our website, you consent to the collection, use, and disclosure of your information as described in this privacy policy.",
        },
      ],
    },
    {
      title: "Contact",
      contents: [
        {
          paragraph:
            "If you have any questions about our privacy policy, please contact us via:\nEmail: hi@hooore.com",
        },
      ],
    },
    {
      title: "Thank you :)",
      contents: [],
    },
  ],
};

export default privacyPolicy;
