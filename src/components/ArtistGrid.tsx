'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Artist } from '@/data/artists';
import { getVerifiedPortrait } from '@/data/portraits';

export default function ArtistGrid({ artists }: { artists: Artist[] }) {
  return (
    <div className="artist-grid">
      {artists.map((artist, index) => {
        const verified = getVerifiedPortrait(artist.id);
        const portrait = artist.portrait || verified?.url;
        return (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 35, scale: .96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .55, delay: Math.min(index * .06, .35) }}
          >
            <Link href={`/artists/${artist.id}`} className="artist-card" aria-label={`Explore ${artist.nameFa}`}>
              <div className="artist-image">
                {portrait ? (
                  <img src={portrait} alt={`پرتره واقعی ${artist.nameFa}`} loading="lazy" referrerPolicy="no-referrer" />
                ) : (
                  <div className="identity-fallback" aria-label={`No reusable portrait verified for ${artist.nameFa}`}>{artist.nameEn.split(' ').map(n=>n[0]).join('').slice(0,3)}</div>
                )}
                <div className="artist-overlay" />
              </div>
              <div className="artist-body">
                <h3 className="artist-fa">{artist.nameFa}</h3>
                <div className="artist-en">{artist.nameEn}</div>
                <div className="artist-role">{artist.career}</div>
                <div className="artist-meta">
                  <span>{artist.works.length} اثر آرشیوی</span>
                  <span className="wave" aria-hidden="true"><i/><i/><i/><i/><i/></span>
                  <b>EXPLORE VOICE</b>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
