const sectDb = [
  {
    id: 1,
    label: 'Guiyang',
    color: 'red',
    founder: 'Shishan Lingyou - Yangshan Huiji',
    history: 'Among 5 schools, Weiyangzong was founded the earliest), was a branch of Hongzhouzong . Because the founder of this school, Master Lingyou, and his disciple Huiji, successively promoted the school\'s style in Tanzhou \'s Yunshan (in Ningxiang City, Changsha , Hunan ) and Yuanzhou \'s Yangshan (in Yichun , Jiangxi ), later generations called it Yunyangzong.\n' +
      'The master of Tang Dynasty , Lingyou, was a successor of Baizhang Huaihai . The master of Yichun Yangshan , Huiji, was a successor of Lingyou. The teachers and students were of different schools, and the Dharma was very prosperous. Thus, the reputation of Weiyang Sect came into being. See Jigu Lue San. The theory of practice of Weiyang Sect believes that all sentient beings have Buddha nature. If people can see their nature, they can become Buddhas.\n' +
      'According to records in "Records of the Authentic Transmission of the Dharma" and other materials, there are about 99 people in the Weiyang Sect whose biographies, quotations and deeds can be verified.',
    relation: '',
    doctrine: '',
    reference: ['https://zh.wikipedia.org/wiki/%E6%B2%A9%E4%BB%B0%E5%AE%97'],
  },
  {
    id: 2,
    label: 'Linji',
    color: 'green',
    founder: 'Linji Yixuan',
    history: 'It branched off from the Hongzhou Sect and started with the master Yixuan of Linji (?-866) in the Tang Dynasty. Yi Xuan studied Dharma with Zen Master Huang Xiyun for 33 years, and then went to Zhenzhou (now Zhengding, Shijiazhuang , Hebei Province ) to build Linji Temple on the bank of the Hutuo River , carrying forward the teachings of "Prajna as the foundation, taking emptiness to capture existence, and emptiness having appearances" advocated by Zen Master Xiyun. The new Zen method of "integration" spread throughout the world, and later generations called it the "Linji Sect", and Linji Temple also became the ancestral hall of the Linji Sect. Because of his relatively strong Zen style, later generations were called "General Linji, Scholar and People of Caodong" compared with the Caodong Sect , which had more detailed theories .',
    relation: '',
    doctrine: '',
    reference: ['https://zh.wikipedia.org/wiki/%E4%B8%B4%E6%B5%8E%E5%AE%97'],
  },
  {
    id: 3,
    label: 'Caodong',
    color: 'blue',
    founder: 'Dongshan Liangjie - Caoshan Benji',
    history: 'It branched off from the Shitou school and was founded by Dongshan Liangjie and Caoshan Benji . It was later passed down to the Zen master Hongzhi Zhengjue , who created the silent illumination Zen . Together with the koan Zen advocated by Dahui Zonggao , they became the two major schools of Zen Buddhism in later generations. Because of its detailed doctrine, it was compared with the more radical Linji school in later generations , and was called "Linji General, Caodong Scholar".',
    relation: '',
    doctrine: '',
    reference: ['https://zh.wikipedia.org/wiki/%E6%9B%B9%E6%B4%9E%E5%AE%97'],
  },
  {
    id: 4,
    label: 'Fayan',
    color: 'orange',
    founder: 'Fayan Wenyi',
    history: 'Its founder is Fayan Wenyi. It is the latest of the five schools of Zen Buddhism, and is derived from the lineage of Qingyuan Xingsi, a disciple of the Sixth Patriarch Huineng. The Fayan School was greatly developed during the Southern Tang and Wuyue periods, becoming the most influential school in the late Five Dynasties, with Zhejiang and Fujian as its central dioceses. In the early Song Dynasty, it reached its peak during the reign of Yongming Yanshou . After the middle of the Song Dynasty, the Fayan School gradually declined and its lineage was cut off, but it was still passed down in Goryeo . In modern times, Monk Xuyun revived Zen Buddhism and continued the lineage of the five schools, and the Fayan School was able to resume its inheritance.',
    relation: '',
    doctrine: '',
    reference: ['https://zh.wikipedia.org/wiki/%E6%B3%95%E7%9C%BC%E5%AE%97'],
  },
  {
    id: 5,
    label: 'Yunmen',
    color: 'violet',
    founder: 'Yunmen Wenyan',
    history: 'The Guangtai Zen Temple in Yunmen Mountain, Shaozhou (in the north of today\'s Ruyuan Yao Autonomous County , Guangdong ) was the ancestral temple, hence the name Yunmen Sect. ' +
      'It is generally believed that the Yunmen School originated from Shitou Zen , and was a lineage of Qingyuan Xingsi and Shitou Xiqian.' +
      'Shitou Xiqian passed on the teachings to Tianhuang Daowu , who passed them on to Longtan Chongxin , who passed them on to Deshan Xuanjian , who passed them on to Xuefeng Yicun. ' +
      'Xuefeng Yicun\'s disciples were divided into two branches: one passed on to Yunmen Wenyan, which was the Yunmen School; the other passed on to Xuansha Shibei , who passed on the teachings to Luohan Guichen , who passed on the teachings to Fayan Wenyi , which was the Fayan School . ' +
      'Jiugu Lue San said: "The master inherited the teachings of Zen Master Xuefeng Cun, who inherited the teachings of Zen Master Deshan Jian, who inherited the teachings of Zen Master Longtan Xin. ' +
      'The master\'s teachings were admired by Emperor Shizong. They were called the Yunmen School." Another theory is that Yunmen Wenyan came from the Hongzhou Sect , so the Yunmen Sect should be affiliated with the Hongzhou Sect.',
    relation: '',
    doctrine: 'His Zen style is known as the Three Sentences of Yunmen: "Encompassing the heaven and the earth", "Cutting off all streams", and "Go with the flow".',
    reference: ['https://zh.wikipedia.org/wiki/%E4%BA%91%E9%97%A8%E5%AE%97'],
  },
  {
    id: 6,
    label: 'Yangqi',
    color: 'green',
    founder: 'Yangqi Fanghui',
    history: 'Its ancestral temple is the Yangqi Mountain Pu Tong Temple in Pingxiang City, Jiangxi Province. It was founded by Zen Master Yangqi Fanghui during the Qingli period of the Song Dynasty (1041). It was later passed on to Dahui Zonggao in the Southern Song Dynasty , who advocated koan Zen and made it the mainstream of Zen Buddhism.\n',
    relation: 'It is a branch of the Linji School. In 1246, the Chinese monk Lanxi Daolong introduced the Yangqi School to Japan. It is still one of the major schools of Japanese Buddhism, with more than one million followers. There are also many followers in many countries in East Asia , Southeast Asia and Taiwan',
    doctrine: '',
    reference: ['https://zh.wikipedia.org/wiki/%E6%9D%A8%E5%B2%90%E5%AE%97', 'https://vi.wikipedia.org/wiki/D%C6%B0%C6%A1ng_K%C3%AC_ph%C3%A1i'],
  },
  {
    id: 7,
    label: 'Huanglong',
    color: 'green',
    founder: 'Huanglong Huinan',
    history: 'It was founded by Zen Master Huanglong Huinan. In the third year of Song Jingyou (1036), Huanglong Huinan became the first ancestor of the Huanglong School at Chong\'en Temple on Huanglong Mountain in Longxing, Jiangxi (now Huanglong Township, Xiushui County, Jiujiang City, Jiangxi Province).',
    relation: 'It is a branch of the Linji School. The Japanese monk Myoan Eisai brought this sect to Japan, which was the origin of the Japanese Zen sect Rinzai.',
    doctrine: '',
    reference: ['https://zh.wikipedia.org/wiki/%E9%BB%83%E9%BE%8D%E5%AE%97'],
  },
  {
    id: 100,
    label: 'others',
    color: 'indigo',
    reference: ['https://zh.wikipedia.org/wiki/%E7%A6%85%E5%AE%97'],
  },
  {
    id: 101,
    label: 'none',
    color: 'gray',
  },
]
export default sectDb;
