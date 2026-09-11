'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { Work } from '@/data/artists';

type WithArtist = Work & { artistNameFa?: string; artistNameEn?: string };

export default function WorkModalGrid({ works }: { works: WithArtist[] }) {
  const [selected, setSelected] = useState<WithArtist | null>(null);

  return (
    <>
      <div className="work-grid">
        {works.map((work) => (
          <button key={work.id} className="work-card" onClick={() => setSelected(work)} aria-label={`Open ${work.title}`}>
            <div className="work-year">{work.year || work.type}</div>
            <h3>{work.titleFa}</h3>
            <div className="work-en">{work.title}</div>
            <div className="work-character">{work.character ? <>نقش: <strong>{work.character}</strong><br /></> : null}{work.contribution}</div>
            <span className="work-open">OPEN ARCHIVE ↗</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setSelected(null)}>
            <motion.section className="modal" role="dialog" aria-modal="true" aria-label={selected.title} initial={{ y: 35, scale: .96, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 25, scale: .97, opacity: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 25 }} onMouseDown={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">×</button>
              <div className="eyebrow">ARCHIVE ENTRY · {selected.year || selected.type}</div>
              <h2>{selected.titleFa}</h2>
              <div className="work-en">{selected.title}</div>
              <div className="modal-info">
                {selected.artistNameFa && <div><strong>هنرمند:</strong> {selected.artistNameFa} · {selected.artistNameEn}</div>}
                {selected.character && <div><strong>شخصیت / نقش:</strong> {selected.character}</div>}
                <div><strong>مشارکت:</strong> {selected.contribution}</div>
                <div><strong>نوع:</strong> {selected.type}</div>
              </div>
              <a className="source-link" href={selected.source} target="_blank" rel="noreferrer">Source · {selected.sourceLabel} ↗</a>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
