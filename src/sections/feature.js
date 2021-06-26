/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/video-tutorials.png';
import Winner from 'assets/feature/teaching.png';
import Cloud from 'assets/feature/quiz.png';
import Setting from 'assets/feature/assignment.png';
import Design from 'assets/feature/question.png';
import Chat from 'assets/feature/businessman.png';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Practical Learning',
    title: 'Practical Learning',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Interaction With Expert',
    title: 'Interaction With Expert',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Quizzes',
    title: 'Quizzes',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Real-time Assignments',
    title: 'Real-time Assignments',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Doubt Checking',
    title: 'Doubt Checking',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Internships',
    title: 'Internships',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
