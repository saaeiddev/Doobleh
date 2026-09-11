import ArtistGrid from '@/components/ArtistGrid';
import { artists } from '@/data/artists';

export default function ArtistsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">ARTISTS · صداپیشگان</div>
          <h1 className="section-title">گالری صداهای ماندگار</h1>
          <p className="section-copy">هر کارت یک درگاه به صفحه اختصاصی هنرمند است؛ با زندگی‌نامه کوتاه، آثار منتخب، نقش‌ها و لینک منبع. اگر برای چهره‌ای هنوز عکس دارای مجوز روشن تأیید نشده باشد، عمداً به‌جای تصویر ساختگی از نشان تایپوگرافیک استفاده می‌کنیم.</p>
        </div>
      </section>
      <section className="container" style={{paddingBottom:110}}><ArtistGrid artists={artists} /></section>
      <footer className="footer">DOOBLEH · ARTISTS ARCHIVE</footer>
    </main>
  );
}
