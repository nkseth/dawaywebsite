/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Exceptional Faculty ',
    title: 'Exceptional Faculty',
    text:
      'Our faculty is from the best institutes. They also have work experience in tech giants which makes them exceptional.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Mentor Support',
    title: 'Mentor Support',
    text:
      'An incredible mentor support is provided where 1 teaching assistant is assigned to 10 students. The TA’s are top performers alumni dedicated to support and clear doubts at any point of time.',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Course curriculum',
    title: 'Course curriculum',
    text:
      'Industry leading curriculum designed by expert developers turned educators who have invested time to create quality content infused with unique teaching methodology.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="EXCLUSIVE FEATURES"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
