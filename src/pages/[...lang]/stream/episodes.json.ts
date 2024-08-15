export interface Template {
  title: string;
  image: string;
  episode: string;
  date: string;
  audio: string;
  description: string;
};
const one: Template = {
  title: "Unearthing History",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
  episode: "Episode 1",
  description: "Join us in exploring the depths of inner adventures and the intricacies of the human mind and emotions.",
  date: " February 24, 2022",
  audio: ""
};
const two: Template = {
  title: "Mysteries Explored",
  image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  episode: "Episode 2",
  description: "Unveil captivating conversations with insightful guests who share their unique perspectives and life stories.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const three: Template = {
  title: "Creative Sparks",
  image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  episode: "Episode 3",
  description: "Join us as we dig into the past to uncover forgotten tales and historical gems that shape our present.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const four: Template = {
  title: "Journey of Discovery",
  image: "https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1068&q=80",
  episode: "Episode 4",
  description: "In this episode, we delve into enigmatic phenomena and puzzling questions, exploring the mysteries that intrigue us.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const five: Template = {
  title: "Conversations Unveiled",
  image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80",
  episode: "Episode 5",
  description: "Discover the sparks of creativity that fuel artistic minds as we talk to innovative thinkers from various fields.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const six: Template = {
  title: "Adventures Within",
  image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80",
  episode: "Episode ",
  description: "Embark on a journey of self-discovery and exploration as we discuss personal growth and transformative experiences.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
export const bytitle = {
  one,
  two,
  three,
  four,
  five,
  six,
};
export const episodes = Object.values(bytitle);
