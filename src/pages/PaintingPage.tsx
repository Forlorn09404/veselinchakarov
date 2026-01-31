import { FantasyHeader } from '../components/FantasyHeader';
import { FantasyFooter } from '../components/FantasyFooter';
import { HeroSection } from '../components/HeroSection';
import { GalleryGrid } from '../components/GalleryGrid';
import { useLanguage } from '../contexts/LanguageContext';
import deathOfTheUnicorn from '../assets/paintings/death_of_the_unicorn.jpg';
import bendis from '../assets/paintings/bendis.jpg';
import colorsOfTheSea from '../assets/paintings/colors_of_the_sea.jpg';
import creation from '../assets/paintings/creation.jpg';
import littleGirlAndSea from '../assets/paintings/little_girl_and_sea.jpg';
import onTheStreet from '../assets/paintings/on_the_street.jpg';
import orpheus from '../assets/paintings/orpheus.jpg';
import rest from '../assets/paintings/rest.jpg';
import seuthes from '../assets/paintings/seuthes.jpg';
import theBookOfSecrets from '../assets/paintings/the_book_of_secrets.jpg';
import theDeathOfTheUnicorn from '../assets/paintings/the_death_of_the_unicorn.jpg';
import theDoor from '../assets/paintings/the_door.jpg';
import theGoodNews from '../assets/paintings/the_good_news.jpg';
import theLittleMermaid from '../assets/paintings/the_little_mermaid.jpg';
import theUnfinishedDream from '../assets/paintings/the_unfinished_dream.jpg';
import theVarangians from '../assets/paintings/the_varangians.jpg';
import theWorld from '../assets/paintings/the_world.jpg';
import unicorn from '../assets/paintings/unicorn.jpg';
import angelAndRose from '../assets/paintings/angel_and_rose.jpg';
import winterGuest from '../assets/paintings/winter_guest.jpg';


export function PaintingPage() {
  const {
    t,
    language
  } = useLanguage();
  const getTitle = (enTitle: string) => {
    if (language === 'bg') {
      return t.artwork.paintings[enTitle as keyof typeof t.artwork.paintings] || enTitle;
    }
    return enTitle;
  };
  const paintings = [{
    id: 1,
    title: getTitle('Bendis'),
    year: '2018',
    image: bendis
  }, {
    id: 2,
    title: getTitle('Colors of the Sea'),
    year: '2012',
    image: colorsOfTheSea
  }, {
    id: 3,
    title: getTitle('Creation'),
    year: '2021',
    image: creation
  }, {
    id: 4,
    title: getTitle('Little Girl and the Sea'),
    year: '2012',
    image: littleGirlAndSea
  }, {
    id: 5,
    title: getTitle('On the Street'),
    year: '2025',
    image: onTheStreet
  }, {
    id: 6,
    title: getTitle('Orpheus'),
    year: '2018',
    image: orpheus
  }, {
    id: 7,
    title: getTitle('Rest'),
    year: '2014',
    image: rest
  }, {
    id: 8,
    title: getTitle('Seuthes III (Seuthes)'),
    year: '2022',
    image: seuthes
  }, {
    id: 9,
    title: getTitle('The Book of Secrets'),
    year: '2017',
    image: theBookOfSecrets
  }, {
    id: 10,
    title: getTitle('The Death of the Unicorn'),
    year: '2016',
    image: theDeathOfTheUnicorn
  }, {
    id: 11,
    title: getTitle('The Door'),
    year: '2014',
    image: theDoor
  }, {
    id: 12,
    title: getTitle('The Good News'),
    year: '2019',
    image: theGoodNews
  }, {
    id: 13,
    title: getTitle('The Little Mermaid'),
    year: '2020',
    image: theLittleMermaid
  }, {
    id: 14,
    title: getTitle('The Unfinished Dream'),
    year: '2015',
    image: theUnfinishedDream
  }, {
    id: 15,
    title: getTitle('The Varangians'),
    year: '2016',
    image: theVarangians
  }, {
    id: 16,
    title: getTitle('The World'),
    year: '2021',
    image: theWorld
  }, {
    id: 17,
    title: getTitle('Unicorn'),
    year: '2016',
    image: unicorn
  }, {
    id: 18,
    title: getTitle('An Angel and a Rose'),
    year: '2018',
    image: angelAndRose
  }, {
    id: 19,
    title: getTitle('Winter Guest'),
    year: '2013',
    image: winterGuest
  }];
  return <div className="min-h-screen bg-fantasy-bg text-white selection:bg-fantasy-accent selection:text-fantasy-bg">
      <FantasyHeader />
      <main>
        <HeroSection title={t.pages.painting.title} subtitle={t.pages.painting.subtitle} backgroundImage={deathOfTheUnicorn} fullHeight={false} />
        <GalleryGrid items={paintings} aspectRatio="square" />
      </main>
      <FantasyFooter />
    </div>;
}