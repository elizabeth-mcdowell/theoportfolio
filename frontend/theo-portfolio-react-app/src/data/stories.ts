// src/data/stories.ts
export interface Story {
  id: string;
  title: string;
  type: string;
  format: "Google Doc" | "PDF" | "Article link" | "Video";
  url: string;
  photo: string;
  summary: string;
  date: string;
}

export const stories: Story[] = [
  {
    id:"published-1",
    title:"YDSA Northeastern Launches Campaign to 'Free the T'",
    type:"Published",
    format: "Article link",
    url:"https://www.theburningrose.com/articles/ydsa-northeastern-launches-free-the-t-campaign-as-semester-priority",
    photo:'/stories/freethet.png',
    summary: "An article looking into the YDSA's 'Free the T' campgaign and the motivations and benefits of the movement. ",
    date: "2024-09-26"    
  },
  {
    id: "video-4",
    title: "Port of Chancay: Chinese megaport will transform Peruvian economy",
    type: "Video",
    format: "Article link",
    url: "https://pulseofperu.sites.northeastern.edu/port-of-chancay-chinese-megaport-will-transform-peruvian-economy/",
    photo:'/stories/portofchancay.png',
    summary: "A unique and personal investigation on Chinese investment in Preu.",
    date: "2024-09-10",
  },
  {
    id: "published-3",
    title: "It's time to do whatever you can",
    type: "Published",
    format: "PDF",
    url: "https://drive.google.com/file/d/1dvg9Mrs4eKtinXWShzZtNljcunmiaT09/view?usp=sharing",
    photo:'/stories/dowhatyoucan.png',
    summary: "This Op-Ed, an emotional response to the murder of George Floyd, was published in the Bucks County Herald on June 4, 2020.",
    date: "2020-06-04",
  },
  {
    id:"copywork-1",
    title:"WGSS work",
    type:"Published",
    format: "Google Doc",
    url:"https://docs.google.com/document/d/1oFac-bw-T1_ikcRxIhO51RQD2wPBiZQVlpfW9c9hyfI/edit?tab=t.uh5hgp5nh62g",
    photo:'/stories/wgss.png',
    summary: "Work done for Northeastern University's Women's Gender and Sexual Studies department",
    date: "2023-04-03"    
  },
  {
    id:"book-game-1",
    title:"In her call on objectivity and fairness to save democracy, Margaret Sullivan forgets her own faults",
    type:"Book + Game",
    format: "Google Doc",
    url:"https://docs.google.com/document/d/1YdTnCQHP3DAg9V0KrGtycqUJ5WaLFWMT53fH-QYcHPQ/edit?tab=t.0",
    photo:'/stories/mediamargaret.png',
    summary: "An analysis on Margaret Sullivan's history and her decision on Dean Baquet.",
    date: "2022-03-01"    
  },

  {
    id: "book-game-2",
    title: "Genshin Impact: A Pandemic Success Story",
    type: "Book + Game",
    format: "Google Doc",
    url: "https://docs.google.com/document/d/1wbYXkws4o-c8BB6P5cB3lgKqZW8XmKqKylBd4YPBGyc/edit?tab=t.0",
    photo:'/stories/genshinimpact.png',
    summary: "A review on the success of Genshin Impact.",
    date: "2025-03-01",
  },


  {
    id: "unpublished-1",
    title: "As criticism piles, Musk shifts DOGE toward Social Security",
    type: "Unpublished",
    format: "Google Doc",
    url: "https://docs.google.com/document/d/1Dj8Zn6EU4GwHki62thMZ-uZHIvUCNfw0itj0AR5mhm4/edit?tab=t.0",
    photo:'/stories/doge.png',
    summary: "Looking at Elon Musks decisions on DOGE and Social Security",
    date: "2025-03-16",
  },
  {
    id: "unpublished-2",
    title: "Preparation in an “age of pandemics”",
    type: "Unpublished",
    format: "Google Doc",
    url: "https://docs.google.com/document/d/1xiwoyOh_EiWhmNuXLZX4MPh4vBxAOQhNW12wenDU-YE/edit?tab=t.0",
    photo:'/stories/pandemic.png',
    summary: "Looking at how COVID-19 has changed teh view on public health and vaccine hesitancy",
    date: "2024-05-22",
  },
  {
    id: "unpublished-3",
    title: "Healey’s hardline housing reforms, explained",
    type: "Unpublished",
    format: "Google Doc",
    url: "https://docs.google.com/document/d/1pUAdLXvVraP908wQCdWXmTpwRZuPGc4oUxG4gMkH3EY/edit?tab=t.0",
    photo:'/stories/houses.png',
    summary: "Analyzing the reforms proposed and enacte4d by Maura Healey, Governer of Massachusetts",
    date: "2025-05-4",
  },
  {
    id: "unpublished-4",
    title: "Vinyl Voracity",
    type: "Unpublished",
    format: "Google Doc",
    url: "https://docs.google.com/document/d/1wapMyo3MAdeINFnqMUJCpJUQrT4I_phO5OEOkJFwBSw/edit?tab=t.0",
    photo:'/stories/vinyls.png',
    summary: "Looking at the history of Vinyl's and how they are used today at Northeatern University.",
    date: "2024-03-16",
  },

  {
    id: "video-1",
    title: "Scavenger Hunt 1",
    type: "Video",
    format: "Video",
    url: "https://drive.google.com/file/d/1jHpJETegwBv1y6NuD1TkwgbS4XiLdm79/view?usp=drive_link",
    photo:'/stories/pokebowl.png',
    summary: "Interviewing Students about favorite restaurants.",
    date: "2025-02-14",
  },
  {
    id: "video-2",
    title: "Scavenger Hunt 2",
    type: "Video",
    format: "Video",
    url: "https://drive.google.com/file/d/1np-KOoqN4B5NB1MXs1MxsW-YlLctJjSm/view?usp=drive_link",
    photo:'/stories/scav2.png',
    summary: "Looking at historical art pieces.",
    date: "2025-02-14",
  },
  {
    id: "video-3",
    title: "Scavenger Hunt 3",
    type: "Video",
    format: "Video",
    url: "https://drive.google.com/file/d/1Zt8O36fQidKz7PcAsBS3TOL7n242jL0g/view?usp=drive_link",
    photo:'/stories/scav3.png',
    summary: "Interviewing students and staff at the CAMD Media Center",
    date: "2025-02-14",
  },
];
