import { COLORS } from 'constants/globalVariable';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'styles/index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Application({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const root = document.documentElement;

    root?.style.setProperty('--base-color', COLORS.baseColor);
    root?.style.setProperty('--base-grey', COLORS.baseGrey);
    root?.style.setProperty('--base-red', COLORS.baseRed);
    root?.style.setProperty('--base-white', COLORS.baseWhite);
    root?.style.setProperty('--base-black', COLORS.baseBlack);
    root?.style.setProperty('--base-second-color', COLORS.baseSecondColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1298728883821301') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events]);
  
  return (
    <Component {...pageProps} />
  );
}

export default Application;
