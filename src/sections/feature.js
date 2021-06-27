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
      'To gain practical knowledge, you need to explore various options and see what works the best.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Interaction With Expert',
    title: 'Interaction With Expert',
    text:
      'Interactive one to one sessions with Expert will provide you with a great opportunity to plan out your time and efforts to make the most of it.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Quizzes',
    title: 'Quizzes',
    text:
      'The Best way to grow strong is to work on your weaknesses Quizzes will help you to know your weaknesses and can work on them accordingly',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Real-time Assignments',
    title: 'Real-time Assignments',
    text:
      'Work on real-life projects which will help you get hands-on experience in building applications that are up to the standard of the industry ',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Doubt Checking',
    title: 'Doubt Checking',
    text:
      'The road to learning a new skill is not that easy you make come across a lot of problems with are letting you down and you are stuck. We wont let that happen.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Internships',
    title: 'Internships',
    text:
      'When it comes down to practice your skill and make it more useful the best way to get pass it by working in a real-life environment in which our internship program helps you to shapen your skills',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Best Benefits"
          title="Meet exciting features"
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
