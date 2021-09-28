import { Flex } from '@chakra-ui/layout';
import { MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';

const StarRating = ({ rating }) => {
  const starTexts = [];
  // whole stars
  const fullStars = parseInt(rating);
  for (let i = 0; i < fullStars; i++) {
    starTexts.push('full');
  }
  // half stars
  const halfStars = parseFloat(rating) - fullStars > 0 ? 1 : 0;
  if (halfStars > 0) {
    starTexts.push('half');
  }
  // empty stars
  const emptyStars = 5 - (halfStars + fullStars);
  for (let i = 0; i < emptyStars; i++) {
    starTexts.push('empty');
  }

  return (
    <IconContext.Provider value={{ color: '#ecc94b' }}>
      <Flex _hover={{ cursor: 'pointer' }}>
        {starTexts.map((s) => {
          if (s === 'full') return <MdStar />;
          if (s === 'half') return <MdStarHalf />;
          if (s === 'empty') return <MdStarBorder />;
        })}
      </Flex>
    </IconContext.Provider>
  );
};

export default StarRating;
