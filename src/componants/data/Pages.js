import { HiHome } from "react-icons/hi";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiFiles } from "react-icons/gi";
import { FaClipboardList, FaUserEdit, FaEnvelope } from "react-icons/fa";
export const pageLinks = [
  {
    pageID: 1,
    pageName: "Home",
    pageUrl: "/",
    pageIcon: <HiHome />,
  },
  {
    pageID: 2,
    pageName: "About",
    pageUrl: "/about",
    pageIcon: <BsInfoCircleFill />,
  },
  {
    pageID: 3,
    pageName: "Products",
    pageUrl: "products",
    pageIcon: <GiFiles />,
  },
  {
    pageID: 4,
    pageName: "Testimonials",
    pageUrl: "/testimonials",
    pageIcon: <FaUserEdit />,
  },
  {
    pageID: 5,
    pageName: "Contact",
    pageUrl: "/contact",
    pageIcon: <FaEnvelope />,
  },
];
