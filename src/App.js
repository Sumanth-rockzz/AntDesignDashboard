import AppHeader from "./components/AppHeader/AppHeader";
import PageContent from "./components/PageContent/PageContent";
import SideMenu from "./components/SideMenu/SideMenu";
import AppFooter from "./components/AppFooter/AppFooter";
function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <div className="SideMenuContainer">
          <SideMenu />
        </div>
        <div className="PageContentContainer">
          <PageContent />
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
