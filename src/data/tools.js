import PhotoShop from "../../public/Icons/PhotoShop.svg"
import Illustrator from "../../public/Icons/Illustrator.svg"
import CorelDraw from "../../public/Icons/CorelDraw.svg"
import InDesign from "../../public/Icons/InDesign.svg"
import Canva from "../../public/Icons/Canva.svg"

export const toolsData = {
  eyebrow: "My Toolkit",
  heading: "Tools I Work With",
  items: [
    { id: 1, name: "Adobe Photoshop", abbr: "Ps", category: "Editing", years: 2, color: "#31A8FF",icon:PhotoShop },
    { id: 2, name: "Adobe Illustrator", abbr: "Ai", category: "Vector", years: 2, color: "#FF9A00",icon:Illustrator },
    // { id: 3, name: "Adobe After Effects", abbr: "Ae", category: "Motion", years: 3, color: "#9999FF" },
    // { id: 5, name: "Figma", abbr: "Fg", category: "UI/UX", years: 3, color: "#F24E1E" },
    // { id: 6, name: "Adobe Lightroom", abbr: "Lr", category: "Photo", years: 4, color: "#31A8FF" },
    // { id: 7, name: "Adobe Premiere Pro", abbr: "Pr", category: "Video", years: 2, color: "#9999FF" },
    { id: 9, name: "Corel Draw", abbr: "Cd", category: "Print", years: 1, color: "#61A706",icon:CorelDraw },
    { id: 8, name: "Canva", abbr: "Ca", category: "Quick Design", years: 2, color: "#00C4CC",icon:Canva },
    { id: 4, name: "Adobe InDesign", abbr: "Id", category: "Print", years: 0.5, color: "#FF3366",icon:InDesign },
  ],
};
