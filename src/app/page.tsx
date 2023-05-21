'use client';
import { FancyButton } from './components/FancyButton';
import { getDecision, getHumorousDayName, getTagline } from './utils';
import { useState, useEffect } from 'react';

export default function Home() {

  let [standardChoice, setStandardChoice] = useState("Loading...");
  let [wooliesChoice, setWooliesChoice] = useState("Loading...");

  useEffect(() => {
    if (process.env.REACT_APP_SERVERLESS == "true") {
      getDecision().then(decision => {
        setStandardChoice(decision.get('standard')!);
        setWooliesChoice(decision.get('woolies')!);
      });
    } else {
      fetch(process.env.REACT_APP_FDMM_ROUTE!)
        .then(response => response.json())
        .then(data => {
          if (getHumorousDayName() == 'Catalina day') {
            setStandardChoice('Catalina (let me eat ya)');
            setWooliesChoice('nice try - still Catalina');
          } else {
            setStandardChoice(data.choices.standard);
            setWooliesChoice(data.choices.woolies);
          }
        })
    }
  }, [])

  const title = "text-stone-800 tracking-tighter uppercase font-black text-5xl";
  const tagline = "text-stone-600 text-2xl tracking-tight lowercase";
  const emphasisText = "text-white bg-red-500 tracking-tighter font-black text-3xl italic";
  const bodyText = "lowercase tracking-tight text-stone-800 text-xl";

  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-yellow-200">

      <div className="text-center">
        <h1 className={title}>Food Decision Making Machine</h1>
        <h2 className={tagline}>{getTagline()}</h2>
      </div>

      <div className="flex-col items-center text-center p-10">
        <div className="max-w-md border-2 border-stone-800 bg-white p-10">
          <h1 className={bodyText}>You&apos;re going to <span className={emphasisText}>{standardChoice}</span> for lunch, unless you need to go to woolies.</h1>
          <h1 className={bodyText}>If you need to go to woolies, you&apos;re going to <span className={emphasisText}>{wooliesChoice}</span></h1>
        </div>
      </div>

      <div className="p-8 items-center">
        <FancyButton text="Veto" onClick={() => window.location.reload()} />
      </div>

      <div className="p-10 items-center text-center">
        <h3 className="italic text-stone-800" onClick={() => 'https://bradleynewman.dev'}>Go to bradleynewman.dev</h3>
      </div>

    </main >
  )
}




