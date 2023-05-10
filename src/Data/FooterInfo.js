import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const footerInfo = [
  {
    header: "My Account",
    items: [
      "My Account",
      "Order History",
      "Wish List",
      "Newsletter",
      "Returns",
    ],
  },
  {
    header: "Information",
    items: [
      "About Us",
      "Delivery Information",
      "Privacy Policy",
      "Terms & Conditions",
      "Site Map",
    ],
  },
  {
    header: "Store Information",
    items: [
      { icon: <IoLocationSharp />, text: "Syria Almahiry" },
      { icon: <BsFillTelephoneFill />, text: "123-456-789" },
      { icon: <FaFax />, text: "123456" },
      { icon: <AiOutlineMail />, text: "sales@yourcompany.com" },
    ],
  },
];

export { footerInfo };
