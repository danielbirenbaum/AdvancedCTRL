// generalização das páginas principais (tais como a página da CPU , GPU etc)
interface MainPageProps {
  name: string;
}

function MainPage(props: MainPageProps) {
  return (
    <div id="mainpage">
      <div id="mainpage-title">
        <h1>{props.name}</h1>
      </div>

      <hr className="separator" />

      <div id="mainpage-content"></div>
    </div>
  );
}

export default MainPage;
