"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is quite close to a beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills or is located near them!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is on the more modern side!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description:
      "This property is in the countryside, guaranteeing beautiful views.",
  },
  {
    label: "Pool",
    icon: TbPool,
    description: "This property has a beatiful pool to cool off on a hot day!",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake, perfect for fishing!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities!",
  },
  {
    label: "Castle",
    icon: GiCastle,
    description:
      "This property is in a castle, or is shaped like one. Perfect for medieval pictures!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description:
      "This property frequently gets snow and is built in the Arctic, but we guarantee safety 100%!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property has many caves to explore!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description:
      "This property is really close to the desert, or is in it. However we guarantee 100% safety!",
  },
  {
    label: "Barn",
    icon: GiBarn,
    description: "This property has a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is absolutely luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
