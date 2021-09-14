Language Category Card:

```js
// type changing language to pyton or c or java
// add customClickEvent for event hadling
<div className="d-flex flex-wrap">
  <LanguageCategoryCard
    languageCode="cpp"
    language="C++"
    vector={1}
    className="mr-5x mb-5x"
  />

  <LanguageCategoryCard
    languageCode="c"
    language="C"
    vector={1}
    className="mr-5x mb-5x"
  />

  <LanguageCategoryCard
    languageCode="python"
    language="Python"
    vector={1}
    className="mr-5x mb-5x"
  />

  <LanguageCategoryCard type="All" display="more" className="mr-5x mb-5x" />

  <LanguageCategoryCard type="All" display="less" />
</div>
```
