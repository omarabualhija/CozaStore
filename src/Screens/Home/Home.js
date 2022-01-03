import React from "react";
import { Slide } from "../../Components/Slider/Slide";
import { CategoryCard } from "../../Components/categoryCard/CategoryCard";
import { Prodacts } from "../../Components/Prodacts/Prodacts";
export function Home() {
  return (
    <>
      <Slide></Slide>
      <CategoryCard></CategoryCard>
      <Prodacts></Prodacts>
    </>
  );
}
