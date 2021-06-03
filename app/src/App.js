import { AllLanguagesCard, LanguageCategoryCard } from "./dist/index";
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl">Programiz design</h1>
      <AllLanguagesCard />
      <LanguageCategoryCard languageCode="cpp" language="C++" />
    </div>
  );
}
export default App;
