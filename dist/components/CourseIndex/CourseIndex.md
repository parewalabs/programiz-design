Course Index:

```js
// add customClickEvent for event hadling

const courseToc = {
  id: 1,
  sections: [
    {
      id: 1,
      step: 1,
      title: 'Introduction',
      sectionContent: [
        {
          id: 8,
          sectionContentType: {
            0: 'Lesson',
          },
          step: 1,
          title: 'Getting Started',
          sectionId: 1,
          count: 3,
        },
        {
          id: 9,
          sectionContentType: {
            0: 'Lesson',
          },
          step: 2,
          title: 'Variables and Literals',
          sectionId: 1,
          count: 8,
        },
        {
          id: 10,
          sectionContentType: {
            0: 'Lesson',
          },
          step: 3,
          title: 'Input and Output',
          sectionId: 1,
          count: 7,
        },
        {
          id: 18,
          sectionContentType: {
            0: 'Lesson',
          },
          step: 4,
          title: 'Type Conversion',
          sectionId: 1,
          count: 9,
        },
        {
          id: 11,
          sectionContentType: {
            0: 'Lesson',
          },
          step: 5,
          title: 'Operators',
          sectionId: 1,
          count: 19,
        },
        {
          id: 1,
          sectionContentType: {
            1: 'Quiz',
          },
          step: 6,
          title: 'Introduction Quiz',
          sectionId: 1,
          count: 10,
        },
        {
          id: 1,
          sectionContentType: {
            3: 'Example',
          },
          step: 7,
          title: 'Hello World',
          sectionId: 1,
          count: 3,
        },
        {
          id: 1,
          sectionContentType: {
            2: 'Challenge',
          },
          step: 8,
          title: 'Number of Days Your Friend has Lived',
          sectionId: 1,
          count: 1,
        },
        {
          id: 1,
          sectionContentType: {
            4: 'Video',
          },
          step: 9,
          title: 'Intro to Python',
          sectionId: 1,
          count: 1,
        },
      ],
    },
    {
      id: 2,
      step: 2,
      title: 'Decision Making & Loop',
      sectionContent: null,
    },
  ],
};
<CourseIndex courseToc={courseToc} />;
```
