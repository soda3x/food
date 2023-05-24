'use client';
import { FancyButton } from './components/FancyButton';
import { getDecision, getHumorousDayName, getTagline } from './utils';
import { useState, useEffect } from 'react';

export default function Home() {

  const titleStyle: string = "text-stone-800 tracking-tighter uppercase font-black text-5xl";
  const taglineStyle: string = "text-stone-600 text-2xl tracking-tight lowercase";
  const emphasisTextStyle: string = "text-white bg-red-500 tracking-tighter font-black text-3xl italic";
  const bodyTextStyle: string = "lowercase tracking-tight text-stone-800 text-xl";
  const bodyStyle: string = "max-w-md border-2 border-stone-800 bg-white p-10";

  let [standardChoice, setStandardChoice] = useState("Deciding...");
  let [wooliesChoice, setWooliesChoice] = useState("Deciding...");
  let [tagline, setTagline] = useState("Loading...")

  useEffect(() => {
    getTagline().then(t => setTagline(t));

    if (process.env.REACT_APP_SERVERLESS == "true") {
      getDecision().then(decision => {
        setStandardChoice(decision.get('standard')!);
        if (decision.get('woolies') != null) {
          setWooliesChoice(decision.get('woolies')!);
        }
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

  function createBodyText() {
    if (getHumorousDayName() == 'Catalina day') {
      return (
        <div className={bodyStyle}>
          <h1 className={bodyTextStyle}>You&apos;re going to <span className={emphasisTextStyle}>Catalina (let me eat ya)</span> for lunch, unless it&apos;s closed.</h1>
          <h1 className={bodyTextStyle}>If it&apos;s closed, you&apos;re going to <span className={emphasisTextStyle}>{standardChoice}</span></h1>
        </div>
      )
    } else {
      if (wooliesChoice != 'Deciding...') {
        return (
          <div className={bodyStyle}>
            <h1 className={bodyTextStyle}>You&apos;re going to <span className={emphasisTextStyle}>{standardChoice}</span> for lunch, unless you need to go to woolies.</h1>
            <h1 className={bodyTextStyle}>If you need to go to woolies, you&apos;re going to <span className={emphasisTextStyle}>{wooliesChoice}</span></h1>
          </div>
        )
      }
      return (
        <div className={bodyStyle}>
          <h1 className={bodyTextStyle}>You&apos;re going to <span className={emphasisTextStyle}>{standardChoice}</span> for lunch.</h1>
        </div>
      )
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-yellow-200">

      <div className="text-center">
        <h1 className={titleStyle}>Food Decision Making Machine</h1>
        <h2 className={taglineStyle}>{tagline}</h2>
      </div>

      <div className="flex-col items-center text-center p-10">
        {createBodyText()}
      </div>

      <div className="p-8 items-center">
        <FancyButton text="Veto" onClick={() => window.location.reload()} />
      </div>

      <div className="p-10 items-center text-center">
        <a className="italic text-stone-800" href="https://www.bradleynewman.dev">Go to bradleynewman.dev</a>
      </div>

    </main >
  )
}




