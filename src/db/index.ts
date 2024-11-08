import koanBooks from "@/db/books/koanBooks.tsx";

export interface koan {
  id: string;
  title: string;
  image: string;
  intro?: string;
  main: string;
  commentBefore?: string;
  verse?: string;
  verseTranslated?: string;
  commentAfter?: string;
}

export interface koanBook {
  id: string,
  cover: string,
  title?: string,
  titleEn: string,
  titleZh?: string,
  titleJa?: string,
  titleKo?: string,
  titleVi: string,
  author: string,
  description: string,
  linkWeb1?: string,
  linkWeb2?: string,
  linkWeb3?: string,
  linkPdf?: string,
  linkAudio?: string,
  youtube?: '',
  koan: koan[]
}
