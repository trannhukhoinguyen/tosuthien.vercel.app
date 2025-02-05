import koanBooks from "@/db/books/koanBooks.tsx";

export interface IKoan {
  id: string;
  title: string;
  author: string;
  hashTag: string;
  imageOriginal: string;
  image: string;
  intro?: string;
  main: string;
  commentBefore?: string;
  commentBeforeVerseExtra?: string;
  verseExtraOriginal?: string;
  verseExtra?: string;
  commentAfterVerseExtra?: string;
  commentBeforeVerse?: string;
  verseOriginal?: string;
  verse?: string;
  commentAfterVerse?: string;
}
export interface IMaster {
  id: string,
  hasContent: boolean,
  name_en: string,
  other_name_en?: string,
  name_es: string,
  name_de: string,
  name_fr: string,
  name_ru: string,
  name_ko: string,
  name_ar: string,
  name_ja: string,
  name_zh: string,
  other_name_zh?: string,
  name_vi: string,
  other_name_vi?: string,
  nickname_vi?: string,
  worship_tower?: '',
  birth_death_time: string[],
  epoch: string,
  records: string,
  sect: string[],
  country: string,
  place: string,
  teachers: string[],
  successors: string[],
  disciples: string[],
  image: string,
  reference?: string[],
}

export interface IBook {
  id: string,
  cover: string,
  title?: string,
  author: string,
  description: string,
  link?: string,
  linkWeb1?: string,
  linkWeb2?: string,
  linkWeb3?: string,
  linkPdf?: string,
  linkAudio?: string,
  saveAudio?: string,
  link1?: string,
  link2?: string,
  youtube?: '',
  koan: IKoan[]
}


