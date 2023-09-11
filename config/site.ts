export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Supra",
  description:
    "Supra is a an AI platform that helps you to accomplish your build agents that build anything using AI agents autonomously.",
  mainNav: [
    {
      title: "Idea",
      href: "/",
    },
    {
      title: "Plan",
      href: "/",
    },
    {
      title: "Build",
      href: "/",
    },
    {
      title: "Launch",
      href: "/",
    },
    {
      title: "Grow",
      href: "/",
    },
  ],
  authRoutes: {
    signIn: "/auth/login",
    signUp: "/auth/sign-up",
    signOut: "/auth/sign-out",
  },
  links: {
    signIn: "/login",
    signUp: "/sign-up",
    signOut: "/auth/sign-out",
    account: "/account",
    forgotPassword: "/auth/forgot-password",
    magicLink: "/auth/magic-link",
    verify: "/auth/verify",

    settings: "/settings",
    billing: "/billing",
    pricing: "/pricing",

    faq: "/faq",
    privacy: "/privacy",
    terms: "/terms",
    contact: "/contact",

    knowledgeBase: "/knowledge-base",
    tools: "/tools",

    chats: "/chats",
    agents: "/agents",

    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    Basem_Website: "https://twitter.com/xb3sox",
  },
  providers: {
    google: {
      name: "Google",
      signInUrl: "/auth/sign-in/google",
      callbackUrl: "/auth/sign-in/google/callback",
    },
    github: {
      name: "GitHub",
      signInUrl: "/auth/sign-in/github",
      callbackUrl: "/auth/sign-in/github/callback",
    },
  },
  accountSidBarNav: [
    {
      title: "Account",
      href: "/account",
    },
    {
      title: "Billing",
      href: "/account/billing",
    },
    {
      title: "Notifications",
      href: "/account/notifications",
    },
    {
      title: "Settings",
      href: "/account/settings",
    },
    {
      title: "Profile",
      href: "/account/profile",
    },
    {
      title: "API",
      href: "/account/api",
    },
  ],
}
