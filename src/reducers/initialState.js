// TODO: this store needs to contain all quizzes, so we neet to move quiz: {...} to quizzes: [{...}]
export default {
  quiz: {
    name: 'My awesome quiz',
    topics: [{
      id: 1,
      name: 'Algebra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu efficitur risus. Donec porta eget elit vitae porttitor. In hac habitasse platea dictumst. Etiam dapibus rutrum nisl. Aliquam egestas sapien nec ipsum accumsan, quis placerat ante accumsan. Duis sed lectus nec purus sagittis cursus. Duis ultrices sodales arcu, pulvinar imperdiet nunc fringilla condimentum. Ut risus velit, mollis in nisi nec, elementum tempus diam. In sagittis sapien ac arcu pharetra faucibus. Nunc eget sapien eu justo volutpat efficitur. Integer convallis magna eget diam pulvinar, sit amet condimentum felis euismod. Proin at mattis arcu. Cras faucibus tortor scelerisque purus tempor, id interdum leo dictum.',
      questions: [{
        answer: 1,
        options: [
          '{',
          '[',
          '*',
          '-'
        ],
        question: 'What marks an array in javascript?'
      }]
    }, {
      id: 2,
      name: 'Geometry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu efficitur risus. Donec porta eget elit vitae porttitor. In hac habitasse platea dictumst. Etiam dapibus rutrum nisl. Aliquam egestas sapien nec ipsum accumsan, quis placerat ante accumsan. Duis sed lectus nec purus sagittis cursus. Duis ultrices sodales arcu, pulvinar imperdiet nunc fringilla condimentum. Ut risus velit, mollis in nisi nec, elementum tempus diam. In sagittis sapien ac arcu pharetra faucibus. Nunc eget sapien eu justo volutpat efficitur. Integer convallis magna eget diam pulvinar, sit amet condimentum felis euismod. Proin at mattis arcu. Cras faucibus tortor scelerisque purus tempor, id interdum leo dictum.',
      questions: [{
        answer: 2,
        options: [
          'sin(A) + sin(B)',
          'sin(A) + cos(B)',
          'cos(A)sin(B)',
          'sin(A)sin(B)'
        ],
        question: 'What is sin(A+B)?'
      }]
    }]
  }
};
