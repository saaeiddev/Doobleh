'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MicrophoneScene from './MicrophoneScene';
import ArtistGrid from './ArtistGrid';
import { artists } from '@/data/artists';

export default function StudioExperience() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(t);
  }, []);

  const enter = () => {
    if (entered) return;
    setEntered(true);
    window.setTimeout(() => document.getElementById('world-of-voices')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 1750);
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div className="modal-backdrop" style={{zIndex:150, background:'#090c18'}} exit={{opacity:0}} transition={{duration:.6}}>
            <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} style={{textAlign:'center'}}>
              <div className="wave" style={{height:40,justifyContent:'center',transform:'scale(2.1)'}}><i/><i/><i/><i/><i/></div>
              <div style={{marginTop:28,fontSize:'1.15rem'}}>صداها در حال زنده شدن هستند…</div>
              <div className="eyebrow" style={{marginTop:8}}>BRINGING THE VOICES TO LIFE…</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero" id="home">
        <MicrophoneScene entered={entered} onEnter={enter} />
        <div className="hero-vignette" />
        <motion.div className="hero-content" initial={{opacity:0,y:18}} animate={{opacity:loading?0:1,y:0}} transition={{delay:.25,duration:.9}}>
          <div className="hero-subtitle">THE ETERNAL VOICES</div>
          <h1 className="hero-title">صدای ماندگار</h1>
          <p className="hero-copy">موزه‌ای سینمایی برای صداهایی که جهان داستان‌ها را به فارسی نزدیک‌تر کردند.</p>
          <button onClick={enter} style={{all:'unset',cursor:'pointer'}} aria-label="ورود به دنیای صداها">
            <div className="enter-hint">
              <strong>{entered ? 'ENTERING THE WORLD OF VOICES…' : 'CLICK THE MICROPHONE'}</strong>
              <span>{entered ? 'دوربین در حال ورود به آرشیو است' : 'ورود به دنیای صداها'}</span>
            </div>
          </button>
        </motion.div>
        <div className="hero-scroll">SCROLL · EXPLORE</div>
      </section>

      <section className="world" id="world-of-voices">
        <div className="container">
          <div className="world-heading">
            <div className="eyebrow">WORLD OF VOICES · هنرمندان</div>
            <h2 className="section-title">چهره‌هایی پشت صداهای ماندگار</h2>
            <p className="section-copy">روی هر هنرمند بزن تا وارد گالری اختصاصی او شوی. اطلاعات و نقش‌های نمایش‌داده‌شده به منابع آرشیوی پیوند دارند و برای پرتره‌ها فقط از تصاویر واقعی با منبع مشخص استفاده شده است.</p>
          </div>
          <ArtistGrid artists={artists} />
        </div>
      </section>
    </>
  );
}
