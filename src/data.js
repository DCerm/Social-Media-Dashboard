import fb from './images/icon-facebook.svg';
import ig from './images/icon-instagram.svg';
import tw from './images/icon-twitter.svg';
import yt from './images/icon-youtube.svg';
import caretup from './images/icon-up.svg';
import caretdown from './images/icon-down.svg';

const SummaryData = [
  {
    icon: fb,
    username: '@nathanf',
    number: '1987',
    param: 'followers',
    caret: caretup,
    figure: '12',
  },
  {
    icon: tw,
    username: '@nathanf',
    number: '1044',
    param: 'followers',
    caret: caretup,
    figure: '99',
    day: 'Today'  
  },
  {
    icon: ig,
    username: '@realnathanf',
    number: '11k',
    param: 'followers',
    caret: caretup,
    figure: '1099',
  },
  {
    icon: yt,
    username: 'Nathan F.',
    number: '8239',
    param: 'subscribers',
    caret: caretdown,
    figure: '144',
  }
]

const OverviewData = [
  {
    param: 'Page Views',
    icon: fb,
    number: '87',
    caret: caretup,
    figure: '3',
  },
  {
    param: 'Likes',
    icon: fb,
    number: '52',
    caret: caretdown,
    figure: '2',
  },
  {
    param: 'Likes',
    icon: ig,
    number: '5462',
    caret: caretup,
    figure: '2257',
  },
  {
    param: 'Profile Views',
    icon: ig,
    number: '52k',
    caret: caretup,
    figure: '1375',
  },
  {
    param: 'Retweets',
    icon: tw,
    number: '117',
    caret: caretup,
    figure: '303',
  },
  {
    param: 'Likes',
    icon: tw,
    number: '507',
    caret: caretup,
    figure: '553',
  },
  {
    param: 'Likes',
    icon: yt,
    number: '107',
    caret: caretdown,
    figure: '10',
  },
  {
    param: 'Total Views',
    icon: yt,
    number: '1407',
    caret: caretdown,
    figure: '12',
  },
]

export { SummaryData, OverviewData }