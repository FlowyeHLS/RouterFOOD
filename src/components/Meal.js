import './Meal.css';
import { Link } from 'react-router-dom';

export function Meal(props)
{
    const {strMeal, strMealThumb, idMeal} = props;
    return(
        <div className='card'>
            <img src={strMealThumb} alt={strMeal} />
            <h2>{strMeal}</h2>

            <div className='card-action'>
                <Link to={`/meal/${idMeal}`}>Watch recipe</Link>
            </div>
        </div>
    )
}