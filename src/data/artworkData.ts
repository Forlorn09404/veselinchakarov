// Central artwork data file - contains all paintings, illustrations, and comics
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

import aQuarterOfInfinity from '../assets/illustrations/a_quarter_of_infinity.jpg';
import aQuarterOfInfinity2 from '../assets/illustrations/a_quarter_of_infinity2.jpg';
import aQuarterOfInfinity3 from '../assets/illustrations/a_quarter_of_infinity3.jpg';
import battleOfAdrianople from '../assets/illustrations/battle_of_adrianople.jpg';
import capturedMoment from '../assets/illustrations/captured_moment.jpg';
import katana1 from '../assets/illustrations/katana_1.jpg';
import katana from '../assets/illustrations/katana.jpg';
import kingKaloyan from '../assets/illustrations/king_kaloyan.jpg';
import seuthesIllustration from '../assets/illustrations/seuthes.jpg';
import shino from '../assets/illustrations/shino.jpg';
import spartacus from '../assets/illustrations/spartacus.jpg';
import spartacus2 from '../assets/illustrations/spartacus2.jpg';
import thePortOfTyrizis from '../assets/illustrations/the_port_of_tyrizis.jpg';
import theUnfinishedDreamIllustration from '../assets/illustrations/the_unfinished_dream.jpg';
import thracianPrincess from '../assets/illustrations/thracian_princess.jpg';
import thracianTales from '../assets/illustrations/thracian_tales.jpg';
import thracianWine from '../assets/illustrations/thracian_wine.jpg';

import moonlake from '../assets/comics/katana_pirates_moon_lake.jpg';
import bluetop from '../assets/comics/katana_sorcerer_bluetop.jpg';
import battle from '../assets/comics/katana_battle_for_valokaan.jpg';

// English titles for paintings
export const paintingsData = [
  { id: 1, enTitle: 'Bendis', year: '2018', image: bendis },
  { id: 2, enTitle: 'Colors of the Sea', year: '2012', image: colorsOfTheSea },
  { id: 3, enTitle: 'Creation', year: '2021', image: creation },
  { id: 4, enTitle: 'Little Girl and the Sea', year: '2012', image: littleGirlAndSea },
  { id: 5, enTitle: 'On the Street', year: '2025', image: onTheStreet },
  { id: 6, enTitle: 'Orpheus', year: '2018', image: orpheus },
  { id: 7, enTitle: 'Rest', year: '2014', image: rest },
  { id: 8, enTitle: 'Seuthes III (Seuthes)', year: '2022', image: seuthes },
  { id: 9, enTitle: 'The Book of Secrets', year: '2017', image: theBookOfSecrets },
  { id: 10, enTitle: 'The Death of the Unicorn', year: '2016', image: theDeathOfTheUnicorn },
  { id: 11, enTitle: 'The Door', year: '2014', image: theDoor },
  { id: 12, enTitle: 'The Good News', year: '2019', image: theGoodNews },
  { id: 13, enTitle: 'The Little Mermaid', year: '2020', image: theLittleMermaid },
  { id: 14, enTitle: 'The Unfinished Dream', year: '2015', image: theUnfinishedDream },
  { id: 15, enTitle: 'The Varangians', year: '2016', image: theVarangians },
  { id: 16, enTitle: 'The World', year: '2021', image: theWorld },
  { id: 17, enTitle: 'Unicorn', year: '2016', image: unicorn },
  { id: 18, enTitle: 'An Angel and a Rose', year: '2018', image: angelAndRose },
  { id: 19, enTitle: 'Winter Guest', year: '2013', image: winterGuest },
];

// English titles for illustrations
export const illustrationsData = [
  { id: 1, enTitle: 'THE SAMURAI CODE', year: '2024', medium: 'Taira Shigesuke • Together Academy', image: katana },
  { id: 2, enTitle: 'KING KALOYAN', year: '2019-2020', medium: 'Illustrated Encyclopedia • Petrov M. • Historical Park', image: kingKaloyan },
  { id: 3, enTitle: 'A Quarter of Infinity', year: '2017', image: aQuarterOfInfinity },
  { id: 4, enTitle: 'A Quarter of Infinity (Interior)', year: '2017', image: aQuarterOfInfinity2 },
  { id: 5, enTitle: 'The Roman Ambush', year: '2017', image: aQuarterOfInfinity3 },
  { id: 6, enTitle: 'Captured Moment', year: '', image: capturedMoment },
  { id: 7, enTitle: 'Katana', year: '', image: katana1 },
  { id: 8, enTitle: 'King Seuthes III', year: '2022', image: seuthesIllustration },
  { id: 9, enTitle: 'Shino', year: '', image: shino },
  { id: 10, enTitle: 'Spartacus in Battle', year: '2018', image: spartacus2 },
  { id: 11, enTitle: 'The Unfinished Dream', year: '', image: theUnfinishedDreamIllustration },
  { id: 12, enTitle: 'Thracian Princess', year: '2018', image: thracianPrincess },
  { id: 13, enTitle: 'Spartacus (The Duel)', year: '2017', image: spartacus },
  { id: 14, enTitle: 'The Port of Tyrizis', year: '2018', image: thePortOfTyrizis },
  { id: 15, enTitle: 'Thracian Ritual (Women Crushing Grapes)', year: '2018', image: thracianWine },
  { id: 16, enTitle: 'Thracian Tales (Man Watching Woman)', year: '2018', image: thracianTales },
  { id: 17, enTitle: 'Battle of Adrianople (King Kaloyan)', year: '2019', image: battleOfAdrianople },
];

// English titles for comics
export const comicsData = [
  { id: 1, enTitle: 'KATANA: The Battle for Valokaan', year: '2023', image: battle },
  { id: 2, enTitle: 'KATANA: The Sorcerer of Bluetop', year: '2021', image: bluetop },
  { id: 3, enTitle: 'KATANA: The Pirates of Moon Lake', year: '2021', image: moonlake },
];
