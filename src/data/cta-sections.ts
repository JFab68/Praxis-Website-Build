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
      text: "Get Involved",
      link: "/get-involved",
      color: "copper"
    },
    secondaryButton: {
      text: "Donate",
      link: "/donate",
      color: "maroon"
    },
    tertiaryButton: {
      text: "Learn More",
      link: "/about",
      color: "#806ADB"
    }
  },
  about: {
    title: "Learn More About Us",
    description: "Discover our mission, vision, and values.",
    primaryButton: {
      text: "Stay Informed",
      link: "/newsletter",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Join Us",
      link: "/volunteer", 
      color: "#806ADB"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      color: "#806ADB"
    }
  },
  programs: {
    title: "Explore Our Programs",
    description: "See how we're making a difference in our community.",
    primaryButton: {
      text: "Stay Informed",
      link: "/newsletter",
      color: "#806ADB"
    },
    secondaryButton: {
      text: "Join Us", 
      link: "/volunteer",
      color: "copper"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      color: "maroon"
    }
  },
  actionCenter: {
    title: "Can't volunteer right now?",
    description: "There are many other ways to support our mission.",
    primaryButton: {
      text: "Stay Informed",
      link: "/newsletter",
      color: "maroon"
    },
    secondaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "copper"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      color: "copper"
    }
  },
  doulaProgram: {
    title: "Support Our Doula Program",
    description: "Help us continue providing vital support to mothers and their babies through our specialized doula services.",
    primaryButton: {
      text: "Support Our Mission",
      link: "/support",
      color: "maroon"
    },
    secondaryButton: {
      text: "Get Involved",
      link: "/action",
      color: "copper"
    },
    tertiaryButton: {
      text: "Learn More",
      link: "/programs",
      color: "#806ADB"
    }
  },
  legalSystemReform: {
    title: "Join Our Reform Movement",
    description: "Your support strengthens our ability to advocate for meaningful change in Arizona's criminal legal system.",
    primaryButton: {
      text: "Support Our Mission",
      link: "/support",
      color: "maroon"
    },
    secondaryButton: {
      text: "Get Involved",
      link: "/action",
      color: "copper"
    },
    tertiaryButton: {
      text: "Learn More",
      link: "/programs",
      color: "#806ADB"
    }
  },
  overdoseAwareness: {
    title: "Support Harm Reduction",
    description: "Your support helps us continue providing vital harm reduction services and save lives in our community.",
    primaryButton: {
      text: "Support Our Mission",
      link: "/support",
      color: "maroon"
    },
    secondaryButton: {
      text: "Get Involved",
      link: "/action",
      color: "copper"
    },
    tertiaryButton: {
      text: "Learn More",
      link: "/programs",
      color: "#806ADB"
    }
  },
  substanceUse: {
    title: "Support Risk Mitigation",
    description: "Your support helps us continue providing vital services and create positive change in our community.",
    primaryButton: {
      text: "Support",
      link: "/support",
      color: "maroon"
    },
    secondaryButton: {
      text: "Get Involved",
      link: "/action",
      color: "copper"
    },
    tertiaryButton: {
      text: "Learn More",
      link: "/programs",
      color: "#806ADB"
    }
  },
  partners: {
    title: "Partner With Us",
    description: "Join our network of organizations working together to create meaningful change.",
    primaryButton: {
      text: "Stay Informed",
      link: "/newsletter",
      color: "copper"
    },
    secondaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      color: "copper"
    }
  },
  prisonOversight: {
    title: "Support Prison Oversight",
    description: "Help us ensure accountability and transparency in Arizona's correctional facilities.",
    primaryButton: {
      text: "Support Our Mission",
      link: "/support",
      color: "maroon"
    },
    secondaryButton: {
      text: "Get Involved",
      link: "/get-involved",
      color: "copper"
    },
    tertiaryButton: {
      text: "Learn More",
      link: "/programs",
      color: "#806ADB"
    }
  },
  'doula-program': {
    title: "Support Our Doula Program",
    description: "Help us continue providing vital support to mothers and their babies through our specialized doula services.",
    primaryButton: {
      text: "Support Our Mission",
      link: "/support",
      color: "maroon"
    },
    secondaryButton: {
      text: "Get Involved",
      link: "/action",
      color: "copper"
    },
    tertiaryButton: {
      text: "Learn More",
      link: "/programs",
      color: "#806ADB"
    }
  },
  'legal-system': {
    title: "Join Our Reform Movement",
    description: "Your support strengthens our ability to advocate for meaningful change in Arizona's criminal legal system.",
    primaryButton: {
      text: "Support Our Mission",
      link: "/support",
      color: "maroon"
    },
    secondaryButton: {
      text: "Get Involved",
      link: "/action",
      color: "copper"
    },
    tertiaryButton: {
      text: "Learn More",
      link: "/programs",
      color: "#806ADB"
    }
  },
  contact: {
    title: "Join Our Movement",
    description: "Be part of the change we want to see in the world.",
    primaryButton: {
      text: "Get Involved",
      link: "/get-involved",
      color: "copper"
    },
    secondaryButton: {
      text: "Join Us",
      link: "/volunteer",
      color: "#806ADB"
    },
    tertiaryButton: {
      text: "Donate",
      link: "/donate",
      color: "maroon"
    }
  }
};
