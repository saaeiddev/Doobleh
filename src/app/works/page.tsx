import WorksBrowser from '@/components/WorksBrowser';

export default function WorksPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">WORKS · ARCHIVE</div>
          <h1 className="section-title">آثار، نقش‌ها و خاطره‌ها</h1>
          <p className="section-copy">فهرست آثار منتخب ثبت‌شده در آرشیو. هر کارت قابل کلیک است و مشارکت هنرمند، شخصیت و لینک منبع را نمایش می‌دهد. این بخش عمداً ویدئوی دارای حق نشر را داخل مخزن نگهداری نمی‌کند.</p>
          <WorksBrowser />
        </div>
      </section>
      <footer className="footer">DOOBLEH · VERIFIED WORKS ARCHIVE</footer>
    </main>
  );
}
