import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.cronaswap.org/",
      },
      {
        label: "Blog",
        href: "https://cronaswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.cronaswap.org/",
      },
      {
        label: "CRONA",
        href: "https://docs.cronaswap.org/tokenomics/crona-tokenomics",
      },
      // {
      //   label: "—",
      // },
      // {
      //   label: "Online Store",
      //   href: "https://pancakeswap.creator-spring.com/",
      //   isHighlighted: true,
      // },
    ],
  },
  // {
  //   label: "Help",
  //   items: [
  //     {
  //       label: "Customer",
  //       href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: "Troubleshooting",
  //       href: "https://docs.pancakeswap.finance/help/troubleshooting",
  //     },
  //     {
  //       label: "Guides",
  //       href: "https://docs.pancakeswap.finance/get-started",
  //     },
  //   ],
  // },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/cronaswap",
      },
      {
        label: "Documentation",
        href: "https://docs.cronaswap.org",
      },
      // {
      //   label: "Bug Bounty",
      //   href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      // },
      {
        label: "Audits",
        href: "https://docs.cronaswap.org/security-audits",
      },
      {
        label: "Careers",
        href: "https://docs.cronaswap.org/hiring/careers",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/cronaswap",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/YXxega5vJG",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/cronaswap",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/cronaswap/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
