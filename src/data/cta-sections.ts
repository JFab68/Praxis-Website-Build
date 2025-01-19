export interface CTASectionData {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  variant: 'newsletter' | 'volunteer' | 'donate';
  };
  secondaryButton: {
    text: string;
    link: string;
    variant: 'newsletter' | 'volunteer' | 'donate';
  };
  tertiaryButton: {
    text: string;
    link: string;
    variant: 'newsletter' | 'volunteer' | 'donate';
  };
}

export const ctaSections: Record<string, CTASectionData> = {
  home: {
    title: "Join Our Movement",
    description: "Be part of the change we want to see in the world.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  about: {
    title: "Learn More About Us",
    description: "Discover our mission, vision, and values.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  programs: {
    title: "Explore Our Programs",
    description: "See how we're making a difference in our community.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  actionCenter: {
    title: "Can't volunteer right now?",
    description: "There are many other ways to support our mission.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  doulaProgram: {
    title: "Support Our Doula Program",
    description: "Help us continue providing vital support to mothers and their babies through our specialized doula services.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  legalSystemReform: {
    title: "Join Our Reform Movement",
    description: "Your support strengthens our ability to advocate for meaningful change in Arizona's criminal legal system.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  overdoseAwareness: {
    title: "Support Harm Reduction",
    description: "Your support helps us continue providing vital harm reduction services and save lives in our community.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  substanceUse: {
    title: "Support Risk Mitigation",
    description: "Your support helps us continue providing vital services and create positive change in our community.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  partners: {
    title: "Partner With Us",
    description: "Join our network of organizations working together to create meaningful change.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  prisonOversight: {
    title: "Support Prison Oversight",
    description: "Help us ensure accountability and transparency in Arizona's correctional facilities.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  'doula-program': {
    title: "Support Our Doula Program",
    description: "Help us continue providing vital support to mothers and their babies through our specialized doula services.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  'legal-system': {
    title: "Join Our Reform Movement",
    description: "Your support strengthens our ability to advocate for meaningful change in Arizona's criminal legal system.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  },
  contact: {
    title: "Join Our Movement",
    description: "Be part of the change we want to see in the world.",
    primaryButton: {
      text: "Newsletter",
      link: "/newsletter",
      variant: "newsletter"
    },
    secondaryButton: {
      text: "Volunteer",
      link: "/volunteer",
      variant: "volunteer"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      variant: "donate"
    }
  }
};
