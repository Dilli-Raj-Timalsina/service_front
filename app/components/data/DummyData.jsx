import React from 'react';

const dummyData = [
  {
    id: 1,
    name: 'Jane Doe',
    bio: 'Jane is a dedicated teacher with a passion for teaching English literature. She has a PhD in English and has published several articles on the subject.',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    rating: 4.5,
    courses: [
      {
        id: 1,
        title: 'Shakespearean Tragedies',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 149,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/shakespearean-tragedies',
        rating: 4.5,
      },
      {
        id: 2,
        title: 'Victorian Literature',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 149,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/victorian-literature',
        rating: 4.2,
      },
      {
        id: 3,
        title: 'American Literature',
        level: 'Advanced',
        duration: '12 weeks',
        price: 249,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/american-literature',
        rating: 4.8,
      },
    ],
  },
  {
    id: 2,
    name: 'John Smith',
    bio: 'John is a highly experienced teacher with a PhD in history. He has taught at several universities and has authored several books on the subject.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 4.7,
    courses: [
      {
        id: 1,
        title: 'World War II',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 199,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/world-war-ii',
        rating: 4.6,
      },
      {
        id: 2,
        title: 'Ancient Civilizations',
        level: 'Advanced',
        duration: '12 weeks',
        price: 299,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/ancient-civilizations',
        rating: 4.9,
      },
      {
        id: 3,
        title: 'Renaissance Art',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 149,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/renaissance-art',
        rating: 4.4,
      },
    ],
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    bio: 'Sarah is a passionate teacher with a focus on teaching biology. She has a PhD in Biology and has taught at various schools and colleges.',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
    rating: 4.3,
    courses: [
      {
        id: 1,
        title: 'Genetics',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 149,
      },
    ],
  },
  {
    id: 4,
    name: 'Emily Davis',
    bio: 'Emily is a certified nutritionist with years of experience. She has helped numerous clients achieve their health goals through personalized meal plans and consultations.',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    rating: 4.8,
    courses: [
      {
        id: 1,
        title: 'Healthy Eating Habits',
        level: 'Beginner',
        duration: '4 weeks',
        price: 49.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/healthy-eating-habits',
        rating: 4.7,
      },
      {
        id: 2,
        title: 'Sports Nutrition',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 89.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/sports-nutrition',
        rating: 4.9,
      },
    ],
  },
  {
    id: 5,
    name: 'Robert Lee',
    bio: 'Robert is a seasoned software developer with expertise in web development. He has worked on various projects and contributed to open source software.',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    rating: 4.6,
    courses: [
      {
        id: 1,
        title: 'Web Development with React',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 149.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/web-development-react',
        rating: 4.5,
      },
      {
        id: 2,
        title: 'Full Stack Development with Node.js',
        level: 'Advanced',
        duration: '12 weeks',
        price: 249.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/full-stack-development-nodejs',
        rating: 4.8,
      },
    ],
  },
  {
    id: 6,
    name: 'Sophie Thompson',
    bio: 'Sophie is an award-winning author and writing coach. She has published several books and helped aspiring writers improve their craft.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    rating: 4.9,
    courses: [
      {
        id: 1,
        title: 'Creative Writing',
        level: 'Beginner',
        duration: '4 weeks',
        price: 49.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/creative-writing',
        rating: 4.7,
      },
      {
        id: 2,
        title: 'Memoir Writing',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 89.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/memoir-writing',
        rating: 4.9,
      },
    ],
  },

  {
    id: 11,
    name: 'David Lee',
    bio: "David is an experienced computer science teacher. He has a master's degree in computer science and has worked as a software engineer for several years.",
    image: 'https://randomuser.me/api/portraits/men/24.jpg',
    rating: 4.9,
    courses: [
      {
        id: 1,
        title: 'Introduction to Python',
        level: 'Beginner',
        duration: '6 weeks',
        price: 99.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/intro-to-python',
        rating: 4.8,
      },
      {
        id: 2,
        title: 'Data Structures and Algorithms',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 149.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/data-structures-and-algorithms',
        rating: 4.9,
      },
      {
        id: 3,
        title: 'Machine Learning Fundamentals',
        level: 'Advanced',
        duration: '12 weeks',
        price: 299.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/machine-learning-fundamentals',
        rating: 4.7,
      },
    ],
  },
  {
    id: 12,
    name: 'Maria Rodriguez',
    bio: 'Maria is a passionate language teacher with a degree in linguistics. She has taught Spanish, French, and Italian to students of all ages and levels.',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    rating: 4.6,
    courses: [
      {
        id: 1,
        title: 'Spanish for Beginners',
        level: 'Beginner',
        duration: '6 weeks',
        price: 99.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/spanish-for-beginners',
        rating: 4.5,
      },
      {
        id: 2,
        title: 'French Conversation',
        level: 'Intermediate',
        duration: '8 weeks',
        price: 149.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/french-conversation',
        rating: 4.7,
      },
      {
        id: 3,
        title: 'Italian Grammar',
        level: 'Advanced',
        duration: '12 weeks',
        price: 299.99,
        image: 'https://placeimg.com/290/190/tech',
        url: 'https://example.com/italian-grammar',
        rating: 4.3,
      },
    ],
  },
];

export default dummyData;
