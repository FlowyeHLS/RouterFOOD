import { useNavigate, useParams } from 'react-router-dom'
import './Category.css'
import { useEffect, useState } from 'react';
import { getFilteredCategory } from '../api';
import { MealList } from './MealList';

export function Category()
{
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    let goBack = () => (navigate(-1));
useEffect
(
    () =>
    {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    },[name]
);

    return(
        <div className='wrap'>
            <MealList meals={meals}/>
            <button className='btn' onClick={goBack}>Go Back</button>
        </div>
    )
}