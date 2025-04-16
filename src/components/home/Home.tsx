import './Home.scss';
import { useTranslation } from 'react-i18next';
import doggy from '../../Assets/images/doggy-2.jpg';

function Home() {

    const { t, i18n } = useTranslation();

    return (
        <div className="home vertical">
            <div className="intro section">
                <div className="column vertical gap">
                    <div>{t('hello')}</div>
                    <div>{t('home.introduction', {name: t('name')})}</div>
                </div>
                <div className="column vertical gap">
                    <img src={doggy} alt='Dog'/>
                </div>
            </div>
            <div className="about section">
                <div className="vertical gap">
                    <div>{t('intro.let-me-introduce-myself')}</div>
                    <div>{t('intro.about-me-1')}</div>
                    <div>{t('intro.about-me-2')}</div>
                    <div>{t('intro.about-me-3')}</div>
                    <div>{t('intro.about-me-4')}</div>
                </div>
            </div>
        </div>
    )
}  

export default Home;