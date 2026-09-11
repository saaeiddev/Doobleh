'use client';

import { useMemo, useState } from 'react';
import { allWorks } from '@/data/artists';
import WorkModalGrid from './WorkModal';

const filters = ['All','Animation','Series','Film','Audio'] as const;

export default function WorksBrowser() {
  const [filter,setFilter] = useState<(typeof filters)[number]>('All');
  const works = useMemo(() => filter === 'All' ? allWorks : allWorks.filter(w => w.type === filter), [filter]);
  return (
    <>
      <div className="filters" role="group" aria-label="Filter works">
        {filters.map(item => <button key={item} className={`filter-btn ${filter===item?'active':''}`} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="all-work-grid">
        {works.map(work => <div key={`${work.artistId}-${work.id}`}><WorkModalGrid works={[work]} /></div>)}
      </div>
    </>
  );
}
