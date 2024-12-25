import NavBar from "./components/NavBar";
import CardContainer from "./components/CardContainer";

function App() {

  let title1 = 'Devlog #1'
  let content1 = 'Discussing the development of the game up until alpha v1.1, and plans for the future.'
  let title2 = 'Devlog #2'
  let content2 = 'Discussing the development of alpha v1.2, and plans for future releases.'
  let title3 = 'Devlog #3'
  let content3 = 'Discussing the development of alpha v1.3, and plans for future releases.'
  let title4 = 'Devlog #4'
  let content4 = 'Discussing the development of alpha v1.4, and plans for future releases.'
  let image = '../assets/images/BB-icon'
  let cards = [[image, title1, content1], [image, title2, content2], [image, title3, content3], [image, title4, content4]]

  return (
    <>
      <NavBar />
      <CardContainer cards={cards}/>
    </>
  );
}

export default App;
