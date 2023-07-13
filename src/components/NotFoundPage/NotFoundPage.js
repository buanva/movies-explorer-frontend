import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <div className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__caption'>Страница не найдена</p>
            <button className='not-found__button' onClick={() => navigate(-1)}>Назад</button>
        </div>
    )
}

export default NotFoundPage;
