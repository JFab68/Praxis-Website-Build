export interface CTASectionData {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
    color: string;
  };
  secondaryButton: {
    text: string;
    link: string;
    color: string;
  };
  tertiaryButton: {
    text: string;
    link: string;
    color: string;
  };
}

export const ctaSections: Record<string, CTASectionData> = {
  home: {
    title: "Join Our Movement",
    description: "Be part of the change we want to see in the world.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/programs/substance-use",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  about: {
    title: "Learn More About Us",
    description: "Discover our mission, vision, and values.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/programs/legal-system-reform",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  programs: {
    title: "Explore Our Programs",
    description: "See how we're making a difference in our community.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  actionCenter: {
    title: "Can't volunteer right now?",
    description: "There are many other ways to support our mission.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  doulaProgram: {
    title: "Support Our Doula Program",
    description: "Help us continue providing vital support to mothers and their babies through our specialized doula services.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  legalSystemReform: {
    title: "Join Our Reform Movement",
    description: "Your support strengthens our ability to advocate for meaningful change in Arizona's criminal legal system.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  overdoseAwareness: {
    title: "Support Harm Reduction",
    description: "Your support helps us continue providing vital harm reduction services and save lives in our community.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  substanceUse: {
    title: "Support Risk Mitigation",
    description: "Your support helps us continue providing vital services and create positive change in our community.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  partners: {
    title: "Partner With Us",
    description: "Join our network of organizations working together to create meaningful change.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  prisonOversight: {
    title: "Support Prison Oversight",
    description: "Help us ensure accountability and transparency in Arizona's correctional facilities.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  'doula-program': {
    title: "Support Our Doula Program",
    description: "Help us continue providing vital support to mothers and their babies through our specialized doula services.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  },
  'legal-system': {
    title: "Join Our Reform Movement",
    description: "Your support strengthens our ability to advocate for meaningful change in Arizona's criminal legal system.",
    primaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#b87333"
    },
    tertiaryButton: {
      text: "Donate Now",
      link: "/donate",
      color: "#cc0000"
    }
  }
};
