'use client'
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import { useState } from 'react';
import { HeroSearch } from '@/lib/types';
import TrustBar from '@/components/layout/TrustBar';
import ListingsSection from '@/components/property/ListingsSection';

export default function Home() {
  const [search, setSearch] = useState<HeroSearch>({ q: "", location: "", status: "" });

  return (
   <main>
    <Navbar/>
    <Hero onSearch={setSearch}/>
    <TrustBar/>
    <ListingsSection initialSearch={search}/>
   </main>
  );
}
