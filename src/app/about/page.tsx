export default function AboutPage(){
  return <main><section className="page-hero"><div className="container">
    <div className="eyebrow">ABOUT · درباره پروژه</div>
    <h1 className="section-title">صدا فقط ترجمه نیست؛ بخشی از خاطره است.</h1>
    <p className="section-copy">Doobleh یک موزه دیجیتال مستقل برای معرفی فرهنگ دوبله ایران است؛ جایی میان آرشیو، طراحی تعاملی، تاریخ شفاهی و خاطره سینمایی.</p>
    <div className="about-grid" style={{marginTop:34}}>
      <article className="about-card glass"><h3>چرا این آرشیو؟</h3><p>دوبله فارسی در دوره‌های مختلف نقشی مهم در دسترس‌پذیرتر شدن سینما برای مخاطب ایرانی داشته است. هدف این پروژه نمایش هنرمندان و نقش‌ها همراه با لینک منبع است؛ نه بازنشر غیرمجاز فیلم و نه ساختن اطلاعات بدون سند.</p><a className="source-link" href="https://cinema.iranicaonline.org/article/film-dubbing-before-1979/" target="_blank" rel="noreferrer">Cinema Iranica · background source ↗</a></article>
      <article className="about-card quote-card glass"><div className="eyebrow">THE ETERNAL VOICES</div><blockquote>«هر شخصیت، یک صدا؛ هر صدا، یک دنیا.»</blockquote></article>
      <article className="about-card glass"><h3>سیاست رسانه و حق نشر</h3><p>پرتره‌های نمایش‌داده‌شده فقط وقتی استفاده می‌شوند که منبع و وضعیت استفاده آن‌ها قابل ثبت باشد. برای آثار سینمایی و انیمیشن، سایت اطلاعات آرشیوی و لینک منبع نمایش می‌دهد و فایل فیلم یا قسمت‌های دارای حق نشر را در مخزن قرار نمی‌دهد.</p></article>
      <article className="about-card glass"><h3>دقت داده</h3><p>یک عنوان ممکن است چند دوبله فارسی متفاوت داشته باشد. به همین دلیل هر نقش در Doobleh باید به یک منبع مشخص مربوط به همان نسخه دوبله متصل باشد. داده‌ها برای توسعه آینده در ساختاری جدا از رابط کاربری نگهداری می‌شوند.</p></article>
    </div>
  </div></section><footer className="footer">DOOBLEH · PRESERVING THE ART OF VOICE</footer></main>;
}
