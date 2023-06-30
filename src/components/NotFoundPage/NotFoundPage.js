import { Link } from 'react-router-dom';
import './NotFoundPage.css';


function NotFoundPage(props) {
    return (
        <div className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__caption'>Страница не найдена</p>
            <Link className='not-found__button' to='/'>Назад</Link>
        </div>
    )
}

export default NotFoundPage;
