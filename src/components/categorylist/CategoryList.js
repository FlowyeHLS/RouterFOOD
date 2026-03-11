import './CategoryList.css';
import { CategoryItem } from '../categoryitem/CategoryItem';

export function CategoryList({catalog = []})
{
    console.log('-----------------------------');
    console.log(catalog);
    return(
        <div className=''>
            {
                catalog.map
                (
                    el => (<CategoryItem key={el.idCategory} {...el}/>)
                )
                
            }
        </div>
    )
}