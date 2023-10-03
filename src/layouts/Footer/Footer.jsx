import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../images/logo.svg';
import whatsappLogo from '../../images/whatsapp-logo-light.svg';
import telegramLogo from '../../images/telegram-logo-light.svg';
import instagramLogo from '../../images/instagram-logo-light.svg';
import { Navigation } from '../../components/Navigation';

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__left-container'>
      <Link to='/'>
        <img className='footer__logo' src={logo} alt='логотип сайта' />
      </Link>
      <p className='footer__feedback'>
        Есть идеи как улучшить наш сервис? Оставьте фидбек.
      </p>
      <p className='footer__feedback'>KinderGuide@yandex.ru</p>
    </div>
    <Navigation usedFor='footer' />
    <div className='footer__right-container'>
      <Link to='/' className='footer__documents'>
        Политика конфиденциальности
      </Link>
      <Link to='/' className='footer__documents'>
        Пользовательское соглашение
      </Link>
      <div className='footer__social-network-area'>
        <Link to='/' className='footer__social-network-item'>
          <img src={instagramLogo} alt='ссылка на инстаграм' />
        </Link>
        <Link to='/' className='footer__social-network-item'>
          <img src={telegramLogo} alt='ссылка на телеграм' />
        </Link>
        <Link to='/' className='footer__social-network-item'>
          <img src={whatsappLogo} alt='ссылка на ватсап' />
        </Link>
      </div>
    </div>
  </footer>
);
