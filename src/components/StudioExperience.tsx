'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { getVerifiedPortrait } from '@/data/portraits';
import { useEffect, useState } from 'react';
import MicrophoneScene from './MicrophoneScene';
import ArtistGrid from './ArtistGrid';
import { artists } from '@/data/artists';

export default function StudioExperience() {
  const reducedMotion = !!useReducedMotion();
  const [loading, setLoading] = useState(true);
  const portraitArtists = artists.filter(a => a.portrait || getVerifiedPortrait(a.id)).slice(0, 6);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(t);
  }, []);

  const enter = () => {
    if (entered) return;
    setEntered(true);
    window.setTimeout(() => document.getElementById('world-of-voices')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' }), reducedMotion ? 0 : 700);
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div className="modal-backdrop" style={{zIndex:150, background:'#342075'}} exit={{opacity:0}} transition={{duration:.6}}>
            <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} style={{textAlign:'center'}}>
              <div className="wave" style={{height:40,justifyContent:'center',transform:'scale(2.1)'}}><i/><i/><i/><i/><i/></div>
              <div style={{marginTop:28,fontSize:'1.15rem'}}>صداها در حال زنده شدن هستند…</div>
              <div className="eyebrow" style={{marginTop:8}}>BRINGING THE VOICES TO LIFE…</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero" id="home">
        <MicrophoneScene entered={entered} onEnter={enter} reducedMotion={reducedMotion} />
        <div className="studio-orbits" aria-hidden="true"><i/><i/><i/></div>
        <div className="portrait-orbit">
          {portraitArtists.map((artist, index) => <div className={`orbit-position orbit-${index}`} key={artist.id}>
            <Link href={`/artists/${artist.id}`} className="orbit-card" style={{animationDelay: `${index * -.8}s`}}>
              <img src={artist.portrait || getVerifiedPortrait(artist.id)?.url} alt={artist.nameFa} referrerPolicy="no-referrer" />
              <span className="orbit-caption"><strong>{artist.nameFa}</strong><small>{artist.nameEn} ↗</small></span>
            </Link>
          </div>)}
        </div>
        <div className="hero-vignette" />
        <motion.div className="hero-content" initial={{opacity:0,y:18}} animate={{opacity:loading?0:1,y:0}} transition={{delay:.25,duration:.9}}>
          <div className="hero-subtitle">DOOBLEH · THE MAGIC OF VOICE</div>
          <h1 className="hero-title">صدای ماندگار</h1>
          <p className="hero-copy">یک میکروفون، هزار خاطره؛ به دنیای رنگارنگ صداها خوش آمدی.</p>
          <button onClick={enter} style={{all:'unset',cursor:'pointer'}} aria-label="ورود به دنیای صداها">
            <div className="enter-hint">
              <strong>{entered ? 'ENTERING THE WORLD OF VOICES…' : 'EXPLORE THE VOICES ↗'}</strong>
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
