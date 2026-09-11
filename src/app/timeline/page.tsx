const eras = [
  { year:'1940s', title:'از مترجم زنده تا دوبله ضبط‌شده', text:'ریشه‌های دوبله فارسی از سنت توضیح زنده فیلم و تجربه‌های ترجمه صوتی گذشت و در دهه ۱۹۴۰ به دوبله ضبط‌شده فیلم‌ها رسید.', source:'https://cinema.iranicaonline.org/article/film-dubbing-before-1979/' },
  { year:'1945–1946', title:'«دختر فراری» و استقبال عمومی', text:'اسماعیل کوشان فیلم فرانسوی Premier rendez-vous را در استانبول به فارسی دوبله کرد؛ نمایش آن در تهران با استقبال روبه‌رو شد و به گسترش دوبله فیلم خارجی کمک کرد.', source:'https://www.iranicaonline.org/articles/cinema-i/' },
  { year:'Late 1940s', title:'شکل‌گیری صنعت دوبله', text:'پس از جنگ جهانی دوم، دوبله فارسی به‌سرعت گسترش یافت و استودیوها و نیروهای حرفه‌ای بیشتری پیرامون آن شکل گرفتند.', source:'https://cinema.iranicaonline.org/article/film-dubbing-before-1979/' },
  { year:'1950s–1970s', title:'دوران تثبیت و چهره‌های ماندگار', text:'دوبله در سینمای ایران به یک حرفه تثبیت‌شده تبدیل شد و برخی صداپیشگان به اندازه بازیگران روی پرده شناخته می‌شدند.', source:'https://cinema.iranicaonline.org/article/film-dubbing-before-1979/' },
  { year:'2000s', title:'گسترش دوبله انیمیشن و نسل‌های تازه', text:'گروه‌ها و استودیوهای تازه، دوبله انیمیشن را برای نسل جدید پررنگ‌تر کردند و صداهای جدیدی به حافظه جمعی مخاطبان اضافه شد.', source:'https://lilit.ir/373871/' },
  { year:'Today', title:'آرشیو دیجیتال و حفظ میراث صدا', text:'پادکست‌ها، مصاحبه‌های آنلاین، آرشیوهای تصویری و پروژه‌های تعاملی امکان ثبت دقیق‌تر تاریخ شفاهی دوبله را فراهم کرده‌اند.', source:'https://podcasts.apple.com/us/podcast/%D9%87%D9%88%D9%85%D9%86-%D8%AE%DB%8C%D8%A7%D8%B7/id1519582898' }
];

export default function TimelinePage(){
  return <main><section className="page-hero"><div className="container">
    <div className="eyebrow">TIMELINE · تاریخچه</div>
    <h1 className="section-title">مسیر صدا در سینمای ایران</h1>
    <p className="section-copy">یک مرور فشرده بر نقاط مهم تاریخ دوبله فارسی. برای جلوگیری از ساده‌سازی بیش از حد، هر ایستگاه به منبع مطالعه بیشتر پیوند دارد.</p>
    <div className="timeline">{eras.map(era=><article className="timeline-row" key={era.year}><div className="timeline-year">{era.year}</div><h3>{era.title}</h3><p>{era.text}</p><a className="source-link" href={era.source} target="_blank" rel="noreferrer">Read source ↗</a></article>)}</div>
  </div></section><footer className="footer">DOOBLEH · HISTORY OF PERSIAN DUBBING</footer></main>;
}
