import React , {useEffect , useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import Footer1 from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = ()=>{
    const APP_ID = '';
    const APP_KEY = '';

    const [recipes,setrecipes] = useState([]);
    let [search,setSearch] = useState("");
    let [query,setQuery] = useState('Chicken');
    
    
    useEffect(()=>{
       getrecipes();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query]);

    const getrecipes = async ()=>{
        let response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        let data = await response.json();
        setrecipes(data.hits)
        console.log(data);

    }

    const updateSearch = e =>{
            setSearch(e.target.value);
            // console.log(search);
    }

    const updatequery = e =>{
        e.preventDefault();
        setQuery(search)
    }

        return (

            <div className="App">
            <h1 className="titleh1">Recipe App</h1> 
                <form className="search-form" onSubmit={updatequery}>
                    <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search here  e.g:- paneer , chicken , puddings etc" />
                    <input  className="search-button" type="submit" value="Search" />
                </form>
               
                  <div className="jumbotron">
                    <div className="container">
                      <div className="row">
                      <div className="recipes">
                        
                        {recipes.map(recipe=>(
                            <Recipe key = {recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories} healthLabels={recipe.recipe.healthLabels}
                            ingredients ={recipe.recipe.ingredients} />
                        ))}
                        </div>
                        </div>
                        </div>
                      
                 </div>
                 <footer className="footerd">
                 <Footer1 /></footer>
            </div>
        )
    
}
export default App;
