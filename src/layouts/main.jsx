import { Header } from './Header';
import { Footer } from './Footer';
import { OnTopButton } from '../components/OnTopButton';

/**
 * Компонент Layout.
 * Испуользуется на каждой странице и включает в себя Хедер и Футер
 */

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <OnTopButton />
    <Footer />
  </>
);

export default Layout;
