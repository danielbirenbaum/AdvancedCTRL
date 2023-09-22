// generalização das páginas principais (tais como a página da CPU , GPU etc)
interface MainPageProps {
    name : string , 
    mainPageContent : Function , 

}

function MainPage (props : MainPageProps){
    return <div id ="mainpage">
        <div id="mainpage-title">
            {//Espanha por favor não me mata eu não queria fazer isso mas js é muito broxa
            }
            <h1>{props.name}</h1>
        </div>

        <hr className="separator"/>

        <div id="mainpage-content">
            {props.mainPageContent()}
        </div>
    </div>
}