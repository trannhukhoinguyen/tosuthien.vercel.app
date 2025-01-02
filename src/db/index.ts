import koanBooks from "@/db/books/koanBooks.tsx";

export interface koan {
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

export interface koanBook {
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
  koan: koan[]
}
