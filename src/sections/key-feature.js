/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/practice (1).png';
import Editing from 'assets/key-feature/help (1).png';
import Speed from 'assets/key-feature/promotion (2).png';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Practical Learning',
    title: 'Practical Learning',
    text:
      'The theory is all about reading a given set of materials and understanding what the materials want to convey. Whereas to gain practical knowledge, you need to explore various options and see what works the best.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: ' 24 *7 Mentor Support',
    title: '24 *7 Mentor Support',
    text:
      'the Path to success can be tough but the right guidance and an expert helping hand can make this path  enjoyable and make your efforts count',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Internships',
    title: 'Internships',
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
