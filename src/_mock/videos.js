import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const VIDEO_TITLES = [
  'video1',
  'video1',
  'video1',
  'video1',
  'video1',
  'video1',
  'video1',
];

const videos = [...Array(6)].map((_, index) => ({
  id: faker.datatype.uuid(),
  thumbnail: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: VIDEO_TITLES[index + 1],
  description:faker.datatype.string(),
  category:faker.datatype.string(),
  url:"/a.mp4",
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
}));

export default videos;
