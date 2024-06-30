// import Image from "next/image";
"use client";
import { useEffect, useState } from "react";
import CarsFilter from "./components/Home/CarsFilter";
import Hero from "./components/Home/Hero";
import SearchBar from "./components/Home/SearchBar";
import { getCarsList } from "@/services";
import CarsList from "./components/Home/CarsList";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
  };

  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero />
      <SearchBar />
      <CarsFilter />
      <CarsList carsList={carsList} />
    </div>
  );
}
