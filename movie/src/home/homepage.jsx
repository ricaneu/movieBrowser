
import "./home.scss"
function getPopular(){
    let box=   document.getElementById('popular_cont') 
    let box_2=   document.getElementById('other_cont') 
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.themoviedb.org/3/movie/popular?api_key=291df565a5587bfbe331b3122abe6384", true);
    xhr.onload = function() {
        let collection = JSON.parse( xhr.responseText);
        console.log( collection)
        //this is first movie
         box.innerText=collection.results[0].title
        
        console.log(collection.results[0].title);
let moreTitles=''

//iterate over next 10 movies
        for (let i = 1; i < 11; i++) {
            console.log(collection.results[i].title);
            
            moreTitles +=collection.results[i].title + '; '
          }
          box_2.innerText=moreTitles;
        
    }
    xhr.send();
}

document.addEventListener('DOMContentLoaded', function(event) {
    getPopular();

    //from there
    let title=   document.getElementById('m_title') 
    let realese=   document.getElementById('m_realese') 
        
    // let cont_1=   document.getElementById('cont_1') 
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.themoviedb.org/3/movie/550?api_key=291df565a5587bfbe331b3122abe6384", true);
    xhr.onload = function() {
        let movie = JSON.parse( xhr.responseText);
      
        title.innerText=movie.original_title 
        realese.innerText=movie.release_date 
    }
    xhr.send();
    //ends of exercise
  })


  

const homepage = () => {
    return (
        <div className="home" id='cont_1'>
            <div id="m_title"></div>
            <hr />
            realese date: <div id="m_realese"></div>
            <div className="container" id='popular_cont'></div>
            <div className="container" id='other_cont'></div>
    </div>
    
    )
}

export default homepage
