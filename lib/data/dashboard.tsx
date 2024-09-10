import { AiOutlineMedicineBox } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { Department } from "../types";
import { GiHeartOrgan, GiLiver } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { FaTeethOpen } from "react-icons/fa6";
import { IoBodyOutline } from "react-icons/io5";
import { GiKidneys } from "react-icons/gi";
import { GiCrossedBones } from "react-icons/gi";

export type OverviewCard = {
  title: string;
  isNumeric: boolean;
  value: string | number;
  icon: JSX.Element;
};

export const cards: OverviewCard[] = [
  { title: "Appointments", isNumeric: true, icon: <FaUserDoctor />, value: Math.floor(Math.random() * 100) + 50 },
  {
    title: "Consultations",
    isNumeric: true,
    icon: <AiOutlineMedicineBox />,
    value: Math.floor(Math.random() * 100) + 50,
  },
  // { title: "Pending Bills", isNumeric: true, icon: <CiMoneyBill />, value: Math.floor(Math.random() * 100) + 50 },
  // { title: "Messages", isNumeric: true, icon: <FiMessageCircle />, value: Math.floor(Math.random() * 100) + 50 },
];

export const defaultImageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H81w4SmKH5DZmIbxU7EB0aMSkNQDoPQA1mRQxf2Y0wMF1NSa7vghbwwKASi1q4NPmNw&usqp=CAU";

export const barChardData = [
  {
    month: "Jan",
    total: Math.floor(Math.random() * 500) + 10,
  },
  {
    month: "Feb",
    total: Math.floor(Math.random() * 500) + 10,
  },
  {
    month: "Mar",
    total: Math.floor(Math.random() * 500) + 10,
  },
  {
    month: "Apr",
    total: Math.floor(Math.random() * 500) + 10,
  },
  {
    month: "Jul",
    total: Math.floor(Math.random() * 500) + 10,
  },
  {
    month: "Aug",
    total: Math.floor(Math.random() * 500) + 10,
  },
  {
    month: "Sep",
    total: Math.floor(Math.random() * 500) + 10,
  },
  {
    month: "Oct",
    total: Math.floor(Math.random() * 500) + 10,
  },
  {
    month: "Nov",
    total: Math.floor(Math.random() * 500) + 10,
  },
  {
    month: "Dec",
    total: Math.floor(Math.random() * 500) + 10,
  },
];

export const departments: { dept: Department; icon: JSX.Element }[] = [
  { icon: <GiHeartOrgan />, dept: "Cardiology (Heart)" },
  { icon: <FaTeethOpen />, dept: "Dentistry (Teeth and Oral Health)" },
  { icon: <IoBodyOutline />, dept: "Dermatology (Skin)" },
  { icon: <GiLiver />, dept: "Hepatology (Liver)" },
  { icon: <GiKidneys />, dept: "Nephrology (Kidneys)" },
  { icon: <FaRegEye />, dept: "Optometry (Eye and Vision Care)" },
  { icon: <GiCrossedBones />, dept: "Orthopedics (Musculoskeletal System)" },
  // { icon: <LuBrain />, dept: "Psychotherapy (Mental Health)" },
];
