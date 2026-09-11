export type VerifiedPortrait = {
  url: string;
  source: string;
  credit: string;
};

export const verifiedPortraits: Record<string, VerifiedPortrait> = {
  'mehrdad-raeisi': {
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Raissi.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Raissi.jpg',
    credit: 'Hamid Laziri / irdub.com · CC BY-SA 3.0'
  },
  'nima-raeisi': {
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nima%20Reiisi.JPG',
    source: 'https://commons.wikimedia.org/wiki/File:Nima_Reiisi.JPG',
    credit: 'Mostafa Azizi · Public Domain'
  },
  'majid-habibi': {
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Majid%20Habibi.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Majid_Habibi.jpg',
    credit: 'Megamind&k · CC BY-SA 3.0 / GFDL'
  }
};

export function getVerifiedPortrait(id: string) {
  return verifiedPortraits[id];
}
