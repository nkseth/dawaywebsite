/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: '1 Month Free Plan',
    description: 'For Students Just starting up',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Free access for all kind of Premium courses.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Unlimited Jobs and Internships Applications',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Active Profile and recommedations',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: '1 to 1 Expert guidance',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Live Sessions',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Real life project Experience',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Premium',
    description: 'For achivers to land their Dream Job',
    priceWithUnit: 'Rs499/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Free access for all kind of Premium courses.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Unlimited Jobs and Internships Applications',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Active Profile and recommedations',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '1 to 1 Expert guidance',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Live Sessions',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Real life project Experience',
        isAvailable: true,
      },
    ],
  },
  
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Let’s see how it works"
          slogan="Whats the function"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
