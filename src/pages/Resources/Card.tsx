import { Flex } from '@chakra-ui/react';
import CardItem from './CardItem';

const CARD_ITEMS = [
  {
    image: 'image/1.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/work.webp',
    title: 'Results summary component',
    techs: ['HTML', 'CSS'],
    level: 1,

    description:
      'This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS.',
    price: 'FREE'
  },
  {
    image: 'image/3.webp',
    title: 'Dictionary web app',
    techs: ['HTML', 'CSS', 'JS', 'API'],
    level: 3,

    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/4.webp',
    title: 'Multi-step form',
    techs: ['HTML', 'CSS', 'JS'],
    level: 4,

    description:
      'An excellent test for your form-building and JS skills, this project will pose many challenges along the way to completion.',
    price: 'FREE'
  },
  {
    image: 'image/5.webp',
    title: 'Single-page developer portfolio',
    techs: ['HTML', 'CSS', 'JS'],
    level: 2,

    description:
      'Test your HTML and CSS skills with this portfolio site. Basic JS knowledge is needed for the form validation. You can even customize and use this as your own site!',
    price: 'PREMIUM'
  },
  {
    image: 'image/6.webp',
    title: 'News homepage',
    techs: ['HTML', 'CSS', 'JS'],
    level: 2,

    description:
      'This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!',
    price: 'FREE'
  },
  {
    image: 'image/7.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/8.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/9.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/10.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/11.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/12.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/13.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/14.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/15.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/16.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/17.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/18.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/19.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/20.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/21.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/22.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/23.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  },
  {
    image: 'image/24.webp',
    title: 'Workit landing page',
    techs: ['HTML', 'CSS'],
    level: 1,
    description:
      'This HTML and CSS-only landing page will be an excellent test of your UI and responsive skills. There’s also some fun to be had creating the curved section borders!',
    price: 'PREMIUM'
  }
];

function Card() {
  return (
    <>
      <Flex mb="80px" wrap="wrap" mx="20" gap="30">
        {CARD_ITEMS.map((item) => (
          <CardItem
            key={item.title}
            image={item.image}
            title={item.title}
            techs={item.techs}
            level={item.level}
            description={item.description}
            price={item.price}
          />
        ))}
      </Flex>
    </>
  );
}

export default Card;
