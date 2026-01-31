// Blog posts data
export interface BlogPost {
  id: number;
  enTitle: string;
  bgTitle: string;
  date: string;
  category: string;
  enContent: string;
  bgContent: string;
  links?: Array<{
    enText: string;
    bgText: string;
    url: string;
  }>;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    enTitle: 'Painting',
    bgTitle: 'Живопис',
    date: 'November 12, 2025',
    category: 'Uncategorized',
    enContent: 'Painting',
    bgContent: 'Живопис'
  },
  {
    id: 2,
    enTitle: 'Comics Can Have Many Faces',
    bgTitle: 'Комиксът може да има много лица',
    date: 'November 17, 2022',
    category: 'Uncategorized',
    enContent: 'An interview with Veselin Chakarov about his work in historical comics, the KATANA series, and his collaboration with Kenneth White.',
    bgContent: 'Интервю с Веселин Чакъров за работата му в областта на историческите комикси, поредицата „Катана" и сътрудничеството му с Кенет Уайт.',
    links: [
      {
        enText: 'Read the full interview on Urban Magazine',
        bgText: 'Прочети пълното интервю в Градското списание',
        url: 'https://urban-mag.com/%d0%b2%d0%b5%d1%81%d0%b5%d0%bb%d0%b8%d0%bd-%d1%87%d0%b0%d0%ba%d1%8a%d1%80%d0%be%d0%b2-%d0%ba%d0%be%d0%bc%d0%b8%d0%ba%d1%81%d1%8a%d1%82-%d0%bc%d0%bd%d0%be%d0%b3%d0%be-%d0%bb%d0%b8%d1%86%d0%b0.html'
      }
    ]
  },
  {
    id: 3,
    enTitle: 'The Stroy In Comics',
    bgTitle: 'Историята в комикси',
    date: 'November 17, 2022',
    category: 'Uncategorized',
    enContent: 'An interview with Veselin Chakarov about telling Bulgarian history through comics, his work with Historical Park, and the art of comics.',
    bgContent: 'Интервю с Веселин Чакъров за разказването на българската история в комикси, работата му с Исторически парк и изкуството на комикса.',
    links: [
      {
        enText: 'Read the full interview on Urban Magazine',
        bgText: 'Прочети пълното интервю в Градското списание',
        url: 'https://urban-mag.com/%d0%b2%d0%b5%d1%81%d0%b5%d0%bb%d0%b8%d0%bd-%d1%87%d0%b0%d0%ba%d1%8a%d1%80%d0%be%d0%b2-%d0%b8%d1%81%d1%82%d0%be%d1%80%d0%b8%d1%8f%d1%82%d0%b0-%d0%ba%d0%be%d0%bc%d0%b8%d0%ba%d1%81%d0%b8.html'
      }
    ]
  },
  {
    id: 4,
    enTitle: 'Historical Comics',
    bgTitle: 'Исторически комикси',
    date: 'February 3, 2020',
    category: 'Uncategorized',
    enContent: 'A series of historical comics, commissioned by the Vazdigane Foundation.',
    bgContent: 'Поредица от исторически комикси, по поръчка на Фондация „Въздигане".',
    links: [
      {
        enText: 'Khan Omurtag',
        bgText: 'Кан Омуртаг',
        url: 'https://knijnikrile.wordpress.com/2018/07/10/кан-омуртаг-от-мирослав-петров-и-ве/'
      },
      {
        enText: 'Spartacus - Defender of Thrace',
        bgText: 'Спартак - Защитникът на Тракия',
        url: 'https://knijnikrile.wordpress.com/2017/11/24/спартак-защитникът-на-тракия-и/'
      },
      {
        enText: 'King Teres',
        bgText: 'Цар Терез',
        url: 'https://knijnikrile.wordpress.com/2017/11/26/цар-терес-от-веселин-чакъров-и-миросл/'
      },
      {
        enText: 'Khan Krum',
        bgText: 'Кан Крум',
        url: 'https://knijnikrile.wordpress.com/2017/10/25/кан-крум-от-мирослав-петров-и-весел/'
      },
      {
        enText: 'Goodreads',
        bgText: 'Goodreads',
        url: 'https://www.goodreads.com/book/show/34455784'
      }
    ]
  },
  {
    id: 5,
    enTitle: 'Shino',
    bgTitle: 'Шино',
    date: 'February 3, 2020',
    category: 'Uncategorized',
    enContent: 'Reader reviews of the exciting story of a samurai.',
    bgContent: 'Мнения на читатели за вълнуващата история на един самурай.',
    links: [
      {
        enText: 'Goodreads - Shino',
        bgText: 'Goodreads - Шино',
        url: 'https://www.goodreads.com/book/show/33403361'
      },
      {
        enText: 'Knijnikrile',
        bgText: 'Knijnikrile',
        url: 'https://knijnikrile.wordpress.com/2017/06/20/'
      },
      {
        enText: 'Tebeshirche',
        bgText: 'Tebeshirche',
        url: 'http://tebeshirche.blogspot.com/2016/12/blog-post_28.html'
      }
    ]
  },
  {
    id: 6,
    enTitle: 'In the Media',
    bgTitle: 'В медиите',
    date: 'February 2, 2020',
    category: 'Uncategorized',
    enContent: 'Some excerpts from the media space',
    bgContent: 'Малко извадки от медийното пространство'
  },
  {
    id: 7,
    enTitle: 'Quarter of Infinity',
    bgTitle: 'Четвърт безкрайност',
    date: 'February 1, 2020',
    category: 'Uncategorized',
    enContent: '"Quarter of Infinity" becomes a precedent in Bulgarian comic history - two artists create their versions based on the same script with an interval of two decades. You can read the history of this comic here:',
    bgContent: '"Четвърт безкрайност" става прецедент в българската история на комикса – двама художници създават свои версии по един и същ сценарий с интервал от две десетилетия. Историята на този комикс, може да прочетете тук:',
    links: [
      {
        enText: 'Knijnikrile - Quarter of Infinity',
        bgText: 'Knijnikrile - Четвърт безкрайност',
        url: 'https://knijnikrile.wordpress.com/2016/11/21/'
      },
      {
        enText: 'Goodreads - Quarter of Infinity',
        bgText: 'Goodreads - Четвърт безкрайност',
        url: 'https://www.goodreads.com/book/show/33550811?ac=1&from_search=true&qid=6raPS2viMN&rank=1'
      }
    ]
  },
  {
    id: 8,
    enTitle: 'Goodreads',
    bgTitle: 'Goodreads',
    date: 'February 1, 2020',
    category: 'Uncategorized',
    enContent: 'Reviews of books illustrated by Veselin Chakarov on Goodreads can be read at the following link:',
    bgContent: 'Мнения за книгите, който са илюстрирани от Веселин Чакъров в сайта Goodreads, може да прочетете на следният линк:',
    links: [
      {
        enText: 'Veselin Chakarov on Goodreads',
        bgText: 'Веселин Чакъров в Goodreads',
        url: 'https://www.goodreads.com/author/list/16199462._'
      }
    ]
  },
  {
    id: 9,
    enTitle: 'Top 5 of the Biggest Cultural Crimes Against the Bulgarian People and Spirit That I Have Witnessed',
    bgTitle: 'Топ 5 на най-големите културни престъпления срещу българския народ и дух, на които съм бил свидетел',
    date: 'January 29, 2020',
    category: 'Uncategorized',
    enContent: 'Top 5 of the biggest cultural crimes against the Bulgarian people and spirit that I have witnessed:\n\n1. The creation and distribution of chalga as a product. Pouring heaps of money into the idea of ​​brainwashing the common man, blurring the concepts of "folklore", "Bulgarian", "national", manifesting "possession" as a supreme value, exalting carefree and dull material existence to the level of "poetry". A huge blow to generations! Whatever we say, it will still be little..\n\n2. The introduction of delegated budgets in education. Perhaps the most terrible blow, aimed at destroying the quality of education at the primary and junior high school levels, creating limitless conditions for corruption, pseudo-economies, etc.\n\n3. The destruction of the Mausoleum in Sofia. An absolute act of legalized vandalism!\n\n4. The destruction of the monument in front of the National Palace of Culture in Sofia. Another act of vandalism and power in the hands of simpletons!\n\n5. The publication of "Under the Yoke" by a slob. Whatever we say, for me it remains a cheap, thoughtless and brazen marketing ploy - one way or another this is a book that cannot be read. I argued with some friends about this, but in my opinion things here are like the atomic bomb issue - it can be done, but what\'s the point. Needless to say, no other country would do something like this with its classical literature.',
    bgContent: 'Топ 5 на най-големите културни престъпления срещу българския народ и дух, на които съм бил свидетел:\n\n1. Създаването и разпространението на чалгата като продукт. Наливане на купища пари в идеята за промиване на съзнанието на обикновения човек, размиване на понятията "фолклор", "българско", "национално", проявяване на "притежание" като върховна стойност, издигане на безгрижно и тъпо материално съществуване до нивото на "поезия". Огромен удар върху поколенията! Каквото и да кажем, пак ще е малко..\n\n2. Въвеждането на делегирани бюджети в образованието. Може би най-ужасният удар, насочен към унищожаване на качеството на образованието в началното и прогимназиалното ниво, създаване на безгранични условия за корупция, псевдо-икономии и т.н.\n\n3. Унищожаването на Мавзолея в София. Абсолютен акт на легализиран вандализъм!\n\n4. Унищожаването на паметника пред Националния дворец на културата в София. Още един акт на вандализъм и власт в ръцете на простаци!\n\n5. Публикуването на "Под игото" от мърляк. Каквото и да кажем, за мен остава евтин, безмислен и нахален маркетингов трик - така или иначе това е книга, която не може да се чете. Спорил съм с някои приятели за това, но според мен нещата тук са като въпроса с атомната бомба - може да се направи, но какъв е смисълът. Излишно е да казвам, че никоя друга държава не би направила нещо подобно с класическата си литература.'
  }
];
