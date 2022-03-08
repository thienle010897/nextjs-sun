import '../styles/globals.css'
import "../styles/slickSlide.css"
import store from './store';
import { Provider } from 'react-redux';
import HeaderSun from './components/HeaderSun';
import { createWrapper } from "next-redux-wrapper";
import FooterSun from './components/FooterSun';
import Layout from '../Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}


const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);
