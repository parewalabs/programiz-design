Course Index:

```js
// add customClickEvent for event hadling

const courseToc = {
  id:2,
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
      },
    ],
  },
  {
    id: 1,
    step: 1,
    title: 'Introduction2',
    sectionContent: [
      {
        id: 8,
        sectionContentType: {
          0: 'Lesson',
        },
        step: 1,
        title: 'Getting Started',
        sectionId: 1,
      },
    ],
  }
]};
<CourseIndex courseToc={courseToc} />
```
