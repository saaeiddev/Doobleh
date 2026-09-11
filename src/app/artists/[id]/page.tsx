import { notFound } from 'next/navigation';
import { artists, getArtist } from '@/data/artists';
import WorkModalGrid from '@/components/WorkModal';

export function generateStaticParams() {
  return artists.map((artist) => ({ id: artist.id }));
}

export default async function ArtistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const artist = getArtist(id);
  if (!artist) notFound();

  return (
    <main className="artist-profile">
      <div className="container artist-profile-grid">
        <div className="profile-portrait glass">
          {artist.portrait ? <img src={artist.portrait} alt={`پرتره واقعی ${artist.nameFa}`} /> : <div className="identity-fallback">{artist.nameEn.split(' ').map(n=>n[0]).join('').slice(0,3)}</div>}
          {artist.portraitCredit && <div className="photo-credit">Photo: {artist.portraitCredit}</div>}
        </div>

        <section>
          <div className="eyebrow">ARTIST ARCHIVE · صدای ماندگار</div>
          <h1 className="profile-title">{artist.nameFa}</h1>
          <div className="profile-en">{artist.nameEn}</div>
          <div className="artist-role" style={{fontSize:'.9rem'}}>{artist.career}</div>
          <p className="profile-bio">{artist.bio}</p>
          <a className="source-link" href={artist.bioSource} target="_blank" rel="noreferrer">Biography source ↗</a>
          {artist.portraitSource && <a className="source-link" style={{marginRight:8}} href={artist.portraitSource} target="_blank" rel="noreferrer">Portrait license/source ↗</a>}

          <h2 className="works-heading">آثار و نقش‌های منتخب</h2>
          <WorkModalGrid works={artist.works.map(work => ({...work, artistNameFa: artist.nameFa, artistNameEn: artist.nameEn}))} />

          <div className="page-card glass" style={{marginTop:20}}>
            <div className="eyebrow">SOURCE POLICY</div>
            <p className="sources-note">این آرشیو نقش‌هایی را نمایش می‌دهد که برایشان یک منبع قابل ارجاع در داده پروژه ثبت شده است. کلیک روی هر اثر، منبع همان رکورد را نشان می‌دهد. وجود چند دوبله فارسی متفاوت برای یک عنوان ممکن است باعث تفاوت در بازیگران و نقش‌ها شود؛ بنابراین توضیحات هر کارت فقط درباره دوبله‌ای است که منبع آن کارت پشتیبانی می‌کند.</p>
          </div>
        </section>
      </div>
      <footer className="footer">DOOBLEH · {artist.nameEn.toUpperCase()}</footer>
    </main>
  );
}
