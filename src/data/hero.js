
import PhotoShop from "../../public/Icons/PhotoShop.svg"
import Illustrator from "../../public/Icons/Illustrator.svg"
import CorelDraw from "../../public/Icons/CorelDraw.svg"
import InDesign from "../../public/Icons/InDesign.svg"
import Canva from "../../public/Icons/Canva.svg"

export const heroData = {
  eyebrow: "Available for Freelance Projects",
  heading: "Crafting Brands That",
  headingAccent: "Command Attention",
  subheading:
    "Graphic designer with 4+ years of experience turning bold ideas into compelling visual identities, social stories, and unforgettable brand experiences.",
  cta: {
    primary: { label: "View My Work", href: "#portfolio" },
    secondary: { label: "Let's Talk", href: "#contact" },
  },
  trustedBy: [
    { name: "BrandCo", id: 1 },
    { name: "DesignHub", id: 2 },
    { name: "CreativeLab", id: 3 },
    { name: "PixelForge", id: 4 },
    { name: "StudioX", id: 5 },
  ],
  stats: [
    { value: 50, suffix: "+", label: "Clients" },
    { value: 120, suffix: "+", label: "Projects" },
    { value: 98, suffix: "%", label: "Satisfaction" },
  ],
  floatingIcons: [
    { name: "Ps", fullName: "Photoshop", color: "#31A8FF", top: "8%", left: "-5%", icon:PhotoShop },
    { name: "Ai", fullName: "Illustrator", color: "#FF9A00", top: "18%", right: "-4%",icon:Illustrator  },
    // { name: "Ae", fullName: "After Effects", color: "#9999FF", bottom: "32%", left: "-6%",icon:DiIllustrator  },  
    { name: "Cd", fullName: "Corel Draw", color: "#61A706", bottom: "18%", right: "-3%",icon:CorelDraw  },
    { name: "Id", fullName: "InDesign", color: "#FF3366", top: "52%", left: "-8%",icon:InDesign  },
    { name: "Cn", fullName: "Canva", color: "#31A8FF", bottom: "18%", right: "-6%",icon:Canva  },
  ],
};
