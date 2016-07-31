export default {
  topics: [{
    id: 1,
    name: 'Algebra',
    questions: [1, 2],
  }, {
    id: 2,
    name: 'Geography',
    questions: [],
  }, {
    id: 3,
    name: 'Common Sense',
    questions: [3],
  }],

  quizzes: [{
    id: 1,
    name: 'My first Quiz',
    topics: [1, 3]
  }],

	questions: [{
    id: 1,
		answer: 2,
		options: [
			'sin(A) + sin(B)',
			'sin(A) + cos(B)',
			'cos(A)sin(B)',
			'sin(A)sin(B)'
		],
		question: 'What is sin(A+B)?'
	}, {
    id: 2,
    answer: 0,
    options: [
      '0',
      '3',
      '5',
      '15'
    ],
    question: 'What is (6 - (2 * 2)) * 3 * 5?'
  }, {
    id: 3,
    answer: 0,
    options: [
      '0',
      '3',
      '42',
      '15'
    ],
    question: 'What is the one answer?'
  }]
};
