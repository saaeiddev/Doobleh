export type Work = {
  id: string;
  title: string;
  titleFa: string;
  year?: string;
  type: 'Animation' | 'Series' | 'Film' | 'Audio';
  character?: string;
  contribution: string;
  source: string;
  sourceLabel: string;
  poster?: string;
  posterSource?: string;
};

export type Artist = {
  id: string;
  nameFa: string;
  nameEn: string;
  portrait?: string;
  portraitSource?: string;
  portraitCredit?: string;
  career: string;
  bio: string;
  bioSource: string;
  accent: string;
  works: Work[];
};

const posters = {
  kungFuPanda: 'https://i.ibb.co/GPxN9st/Kung-Fu-Panda.jpg',
  findingNemo: 'https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg',
  incredibles: 'https://image.tmdb.org/t/p/w500/iGknrkEyebPFmpQoLGy5L0utVxz.jpg',
  beautyBeast: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Beautybeastposter.jpg',
  shrek: 'https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg',
  barnyard: 'https://api.microlink.io/?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBarnyard_%2528film%2529&embed=image.url',
  dirinDirin: 'https://api.microlink.io/?url=https%3A%2F%2Fdirindirin.com%2Fdirinirin%2F&embed=image.url',
  elephantKing: 'https://api.microlink.io/?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Elephant_King_%25282017_film%2529&embed=image.url',
  kungFuPanda2: 'https://i.ibb.co/QMcy429/Kung-Fu-Panda-2.jpg',
  avatar: 'https://image.tmdb.org/t/p/w500/8RVWqNc0VUX3vh0gIsMxQRBHmnz.jpg',
  cars: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Cars_High-Rez_Final_Poster.jpg',
  spongebob: 'https://image.tmdb.org/t/p/w500/jdiziPxXQ0sYTfM9LkWpUMwkqtS.jpg',
  iceAge: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Ice_Age_%282002_film%29_poster.jpg',
  alvin: 'https://en.wikipedia.org/wiki/Special:Redirect/file/Alvin_and_the_Chipmunks2007.jpg',
  pinkPanther: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pink%20Panther%20logo-en.jpg',
  insideOut: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg'
} as const;

const posterSources = {
  kungFuPanda: 'https://en.wikipedia.org/wiki/Kung_Fu_Panda_(film)',
  findingNemo: 'https://en.wikipedia.org/wiki/Finding_Nemo',
  incredibles: 'https://en.wikipedia.org/wiki/The_Incredibles',
  beautyBeast: 'https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(1991_film)',
  shrek: 'https://en.wikipedia.org/wiki/Shrek',
  barnyard: 'https://en.wikipedia.org/wiki/Barnyard_(film)',
  dirinDirin: 'https://dirindirin.com/dirinirin/',
  elephantKing: 'https://en.wikipedia.org/wiki/The_Elephant_King_(2017_film)',
  kungFuPanda2: 'https://en.wikipedia.org/wiki/Kung_Fu_Panda_2',
  avatar: 'https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender',
  cars: 'https://en.wikipedia.org/wiki/Cars_(film)',
  spongebob: 'https://en.wikipedia.org/wiki/SpongeBob_SquarePants',
  iceAge: 'https://en.wikipedia.org/wiki/Ice_Age_(2002_film)',
  alvin: 'https://en.wikipedia.org/wiki/Alvin_and_the_Chipmunks_(film)',
  pinkPanther: 'https://commons.wikimedia.org/wiki/File:Pink_Panther_logo-en.jpg',
  insideOut: 'https://en.wikipedia.org/wiki/Inside_Out'
} as const;

export const artists: Artist[] = [
  {
    id: 'mehrdad-raeisi',
    nameFa: 'مهرداد رئیسی',
    nameEn: 'Mehrdad Raeisi',
    career: 'Voice Actor · Dubbing Director · Founder of Glory Entertainment',
    bio: 'صداپیشه، مدیر دوبلاژ و از چهره‌های اثرگذار موج جدید دوبله ایران؛ فعالیت حرفه‌ای او در دوبله از اوایل دهه ۱۳۸۰ آغاز شد و انجمن گویندگان جوان/Glory Entertainment را بنیان گذاشت.',
    bioSource: 'https://lilit.ir/373871/',
    accent: '#ffb55a',
    works: [
      { id: 'kung-fu-panda-1-mr', title: 'Kung Fu Panda', titleFa: 'پاندای کونگ‌فوکار', year: '2008', type: 'Animation', character: 'Additional roles', contribution: 'Dubbing director and voice performer in the Glory dub', source: 'https://dubdb.fandom.com/wiki/%D9%BE%D8%A7%D9%86%D8%AF%D8%A7%DB%8C_%DA%A9%D9%88%D9%86%DA%AF%E2%80%8C%D9%81%D9%88%DA%A9%D8%A7%D8%B1_(Glory_Entertainment)', sourceLabel: 'The Dubbing Database', poster: posters.kungFuPanda, posterSource: posterSources.kungFuPanda },
      { id: 'finding-nemo-mr', title: 'Finding Nemo', titleFa: 'در جستجوی نمو', year: '2003', type: 'Animation', contribution: 'Listed among notable dubbing-direction credits', source: 'https://lilit.ir/373871/', sourceLabel: 'Lilit artist archive', poster: posters.findingNemo, posterSource: posterSources.findingNemo },
      { id: 'incredibles-mr', title: 'The Incredibles', titleFa: 'شگفت‌انگیزان', year: '2004', type: 'Animation', contribution: 'Listed among notable dubbing-direction credits', source: 'https://lilit.ir/373871/', sourceLabel: 'Lilit artist archive', poster: posters.incredibles, posterSource: posterSources.incredibles }
    ]
  },
  {
    id: 'nima-raeisi',
    nameFa: 'نیما رئیسی',
    nameEn: 'Nima Raeisi',
    career: 'Actor · Radio Presenter · Voice Actor',
    bio: 'بازیگر و گوینده ایرانی که پس از فعالیت در تئاتر و تلویزیون وارد رادیو و دوبله شد و در کنار بازیگری، تجربه سرپرستی گویندگان و صداپیشگی دارد.',
    bioSource: 'https://fa2.ifilmtv.ir/Artist/Content/2613',
    accent: '#ffc875',
    works: [
      { id: 'beauty-beast-nr', title: 'Beauty and the Beast', titleFa: 'دیو و دلبر', type: 'Animation', character: 'Beast / Gaston / narrator and other roles', contribution: 'Voice performer in a Persian dub', source: 'https://www.jirjirk.com/art/174387282491/pictures-personal-photos-private-life-and-nima-raisi-biography', sourceLabel: 'Jirjirk biography', poster: posters.beautyBeast, posterSource: posterSources.beautyBeast },
      { id: 'shrek-nr', title: 'Shrek', titleFa: 'شرک', year: '2001', type: 'Animation', character: 'Shrek', contribution: 'Voice of Shrek in cited Persian-dub productions', source: 'https://www.jirjirk.com/art/174387282491/pictures-personal-photos-private-life-and-nima-raisi-biography', sourceLabel: 'Jirjirk biography', poster: posters.shrek, posterSource: posterSources.shrek }
    ]
  },
  {
    id: 'mohammad-reza-alimardani',
    nameFa: 'محمدرضا علیمردانی',
    nameEn: 'Mohammad Reza Alimardani',
    portrait: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mohammadreza%20alimardani.jpg',
    portraitSource: 'https://commons.wikimedia.org/wiki/File:Mohammadreza_alimardani.jpg',
    portraitCredit: 'M. Hasan Zarifmanesh / Tasnim News Agency · CC BY 4.0',
    career: 'Voice Actor · Actor · Singer · Presenter',
    bio: 'صداپیشه، بازیگر و خواننده ایرانی که در انیمیشن، تلویزیون و پروژه‌های صوتی فعال بوده و یکی از صداهای شناخته‌شده دوبله معاصر ایران است.',
    bioSource: 'https://fa2.ifilmtv.ir/News/Content/64012/',
    accent: '#efa34a',
    works: [
      { id: 'barnyard-mra', title: 'Barnyard', titleFa: 'رئیس مزرعه', year: '2006', type: 'Animation', character: 'Ben, Dag, Randall, farmer', contribution: 'Dubbing director and multiple character voices in the Glory dub', source: 'https://dublove.blogfa.com/post/38/', sourceLabel: 'DubLove dubbing credits', poster: posters.barnyard, posterSource: posterSources.barnyard },
      { id: 'dirin-dirin-mra', title: 'Dirin Dirin', titleFa: 'دیرین دیرین', type: 'Series', contribution: 'Principal voice performance for the animated series', source: 'https://www.sarpoosh.com/art-cinema/actors-director/actors-director1401052146.html', sourceLabel: 'Sarpoosh', poster: posters.dirinDirin, posterSource: posterSources.dirinDirin }
    ]
  },
  {
    id: 'hamed-azizi',
    nameFa: 'حامد عزیزی',
    nameEn: 'Hamed Azizi',
    portrait: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Hamed_Azizi_139702011115_04.jpg',
    portraitSource: 'https://commons.wikimedia.org/wiki/File:Hamed_Azizi_139702011115_04.jpg',
    portraitCredit: 'M. Hassan Aslani / Tasnim News Agency · CC BY 4.0',
    career: 'Voice Actor · Dubbing Director',
    bio: 'گوینده و مدیر دوبلاژ ایرانی؛ از نقش‌های شناخته‌شده او «پو» در پاندای کونگ‌فوکار و «شادفیل» در فیلشاه است.',
    bioSource: 'https://www.tasnimnews.ir/fa/news/1397/02/01/1705430/',
    accent: '#ffb55a',
    works: [
      { id: 'kung-fu-panda-ha', title: 'Kung Fu Panda', titleFa: 'پاندای کونگ‌فوکار', year: '2008', type: 'Animation', character: 'Po', contribution: 'Persian voice of Po', source: 'https://www.tasnimnews.ir/fa/news/1397/02/01/1705430/', sourceLabel: 'Tasnim interview', poster: posters.kungFuPanda, posterSource: posterSources.kungFuPanda },
      { id: 'elephant-king-ha', title: 'The Elephant King', titleFa: 'فیلشاه', year: '2018', type: 'Animation', character: 'Shadfil', contribution: 'Voice of Shadfil', source: 'https://www.tasnimnews.ir/fa/news/1397/02/01/1705430/', sourceLabel: 'Tasnim interview', poster: posters.elephantKing, posterSource: posterSources.elephantKing },
      { id: 'kung-fu-panda-2-ha', title: 'Kung Fu Panda 2', titleFa: 'پاندای کونگ‌فوکار ۲', year: '2011', type: 'Animation', character: 'Po', contribution: 'Voice of Po and dubbing director in the cited dub', source: 'https://dubdb.fandom.com/wiki/%D9%BE%D8%A7%D9%86%D8%AF%D8%A7%DB%8C_%DA%A9%D9%88%D9%86%DA%AF%E2%80%8C%D9%81%D9%88%DA%A9%D8%A7%D8%B1_%DB%B2_(Qualima)', sourceLabel: 'The Dubbing Database', poster: posters.kungFuPanda2, posterSource: posterSources.kungFuPanda2 }
    ]
  },
  {
    id: 'majid-habibi',
    nameFa: 'مجید حبیبی',
    nameEn: 'Majid Habibi',
    career: 'Voice Actor · Dubbing Director',
    bio: 'صداپیشه و دوبلور ایرانی که با نقش‌های پرانرژی و بم در انیمیشن‌های دوبله‌شده شناخته می‌شود.',
    bioSource: 'https://robeka.ir/%D8%A8%DB%8C%D9%88%DA%AF%D8%B1%D8%A7%D9%81%DB%8C-%D9%85%D8%AC%DB%8C%D8%AF-%D8%AD%D8%A8%DB%8C%D8%A8%DB%8C/',
    accent: '#dca85a',
    works: [
      { id: 'barnyard-mh', title: 'Barnyard', titleFa: 'رئیس مزرعه', year: '2006', type: 'Animation', character: 'Otis', contribution: 'Persian voice of Otis', source: 'https://www.youtube.com/watch?v=VFSPJASSvRE', sourceLabel: 'Majid Habibi official YouTube', poster: posters.barnyard, posterSource: posterSources.barnyard },
      { id: 'avatar-mh', title: 'Avatar: The Last Airbender', titleFa: 'آواتار: آخرین بادافزار', type: 'Series', character: 'Zuko', contribution: 'Persian voice of Zuko in the cited dub', source: 'https://www.youtube.com/watch?v=VFSPJASSvRE', sourceLabel: 'Majid Habibi official YouTube', poster: posters.avatar, posterSource: posterSources.avatar },
      { id: 'cars-mh', title: 'Cars', titleFa: 'ماشین‌ها', year: '2006', type: 'Animation', character: 'Lightning McQueen', contribution: 'Persian voice of Lightning McQueen in the cited dub', source: 'https://www.youtube.com/watch?v=VFSPJASSvRE', sourceLabel: 'Majid Habibi official YouTube', poster: posters.cars, posterSource: posterSources.cars }
    ]
  },
  {
    id: 'mohammad-reza-solati',
    nameFa: 'محمدرضا صولتی',
    nameEn: 'Mohammad Reza Solati',
    career: 'Voice Actor · Actor · Dubbing Director',
    bio: 'بازیگر و صداپیشه ایرانی که به‌ویژه با دوبله باب‌اسفنجی و تیپ‌سازی برای چندین شخصیت در یک اثر شناخته می‌شود.',
    bioSource: 'https://mdcartoon.blogfa.com/post/84',
    accent: '#ffc875',
    works: [
      { id: 'spongebob-mrs', title: 'SpongeBob SquarePants', titleFa: 'باب‌اسفنجی شلوارمکعبی', type: 'Series', character: 'SpongeBob, Patrick and other male characters in cited versions', contribution: 'Multiple character voices and dubbing direction in cited Persian versions', source: 'https://mdcartoon.blogfa.com/post/84', sourceLabel: 'Interview archive', poster: posters.spongebob, posterSource: posterSources.spongebob },
      { id: 'cars-mrs', title: 'Cars', titleFa: 'ماشین‌ها', year: '2006', type: 'Animation', character: 'Mater', contribution: 'Persian voice of Mater and dubbing direction', source: 'https://mdcartoon.blogfa.com/post/84', sourceLabel: 'Interview archive', poster: posters.cars, posterSource: posterSources.cars },
      { id: 'ice-age-mrs', title: 'Ice Age', titleFa: 'عصر یخبندان', type: 'Animation', character: 'Sid', contribution: 'Persian voice of Sid in cited productions', source: 'https://mdcartoon.blogfa.com/post/84', sourceLabel: 'Interview archive', poster: posters.iceAge, posterSource: posterSources.iceAge }
    ]
  },
  {
    id: 'ebrahim-shafiei',
    nameFa: 'ابراهیم شفیعی',
    nameEn: 'Ebrahim Shafiei',
    portrait: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%DB%8C%D9%85_%D8%B4%D9%81%DB%8C%D8%B9%DB%8C_Ebrahim_Shafiei_02.jpg',
    portraitSource: 'https://commons.wikimedia.org/wiki/File:%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%DB%8C%D9%85_%D8%B4%D9%81%DB%8C%D8%B9%DB%8C_Ebrahim_Shafiei_02.jpg',
    portraitCredit: 'Mostafa Meraji · CC BY-SA 4.0',
    career: 'Voice Actor · Actor · Director',
    bio: 'بازیگر و دوبلور ایرانی؛ فعالیت حرفه‌ای او در دوبله از اوایل دهه ۱۳۸۰ ادامه داشته و در چندین نقش انیمیشنی محبوب شنیده شده است.',
    bioSource: 'https://commons.wikimedia.org/wiki/File:%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%DB%8C%D9%85_%D8%B4%D9%81%DB%8C%D8%B9%DB%8C_Ebrahim_Shafiei_02.jpg',
    accent: '#efa34a',
    works: [
      { id: 'spongebob-es', title: 'SpongeBob SquarePants', titleFa: 'باب‌اسفنجی', type: 'Series', character: 'Patrick', contribution: 'Persian voice of Patrick in cited productions', source: 'https://www.youtube.com/watch?v=FpNdPpzdu3U', sourceLabel: 'AnimotionArt interview', poster: posters.spongebob, posterSource: posterSources.spongebob },
      { id: 'alvin-es', title: 'Alvin and the Chipmunks', titleFa: 'آلوین و سنجاب‌ها', type: 'Film', character: 'Theodore', contribution: 'Persian voice of Theodore', source: 'https://www.youtube.com/watch?v=FpNdPpzdu3U', sourceLabel: 'AnimotionArt interview', poster: posters.alvin, posterSource: posterSources.alvin },
      { id: 'shrek-es', title: 'Shrek', titleFa: 'شرک', type: 'Animation', character: 'Puss in Boots and additional roles', contribution: 'Voice performance in cited Persian-dub productions', source: 'https://www.youtube.com/watch?v=FpNdPpzdu3U', sourceLabel: 'AnimotionArt interview', poster: posters.shrek, posterSource: posterSources.shrek }
    ]
  },
  {
    id: 'hooman-khayyat',
    nameFa: 'هومن خیاط',
    nameEn: 'Hooman Khayyat',
    portrait: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Hooman_Khaiyat.png',
    portraitSource: 'https://commons.wikimedia.org/wiki/File:Hooman_Khaiyat.png',
    portraitCredit: 'Student News Agency · CC BY 4.0',
    career: 'Voice Actor · Dubbing Director · Presenter',
    bio: 'صداپیشه و مدیر دوبلاژ ایرانی و مدیر گروه تهران دابشو؛ در پروژه‌های دوبله، اجرا و روایت صوتی فعالیت داشته است.',
    bioSource: 'https://podcasts.apple.com/us/podcast/%D9%87%D9%88%D9%85%D9%86-%D8%AE%DB%8C%D8%A7%D8%B7/id1519582898',
    accent: '#ffb55a',
    works: [
      { id: 'pink-panther-hk', title: 'The Pink Panther', titleFa: 'پلنگ صورتی', year: '2020', type: 'Audio', contribution: 'Narrated audio adaptation for Radio Savina', source: 'https://podcasts.apple.com/us/podcast/%D9%87%D9%88%D9%85%D9%86-%D8%AE%DB%8C%D8%A7%D8%B7/id1519582898', sourceLabel: 'Apple Podcasts', poster: posters.pinkPanther, posterSource: posterSources.pinkPanther },
      { id: 'kung-fu-panda-hk', title: 'Kung Fu Panda', titleFa: 'پاندای کونگ‌فوکار', year: '2008', type: 'Animation', character: 'Tai Lung', contribution: 'Persian voice of Tai Lung in the Glory dub', source: 'https://dubdb.fandom.com/wiki/%D9%BE%D8%A7%D9%86%D8%AF%D8%A7%DB%8C_%DA%A9%D9%88%D9%86%DA%AF%E2%80%8C%D9%81%D9%88%DA%A9%D8%A7%D8%B1_(Glory_Entertainment)', sourceLabel: 'The Dubbing Database', poster: posters.kungFuPanda, posterSource: posterSources.kungFuPanda },
      { id: 'inside-out-hk', title: 'Inside Out', titleFa: 'درون و بیرون', year: '2015', type: 'Animation', contribution: 'Listed among Tehran Dubshow dubbing-direction credits', source: 'https://lilit.ir/373873/', sourceLabel: 'Lilit artist archive', poster: posters.insideOut, posterSource: posterSources.insideOut }
    ]
  }
];

export const getArtist = (id: string) => artists.find((artist) => artist.id === id);
export const allWorks = artists.flatMap((artist) => artist.works.map((work) => ({ ...work, artistId: artist.id, artistNameFa: artist.nameFa, artistNameEn: artist.nameEn })));