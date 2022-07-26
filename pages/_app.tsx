import { COLORS } from 'constants/globalVariable';
import { useEffect } from 'react';
import 'styles/index.scss';

function Application({ Component, pageProps }) {
  useEffect(() => {
    const root = document.documentElement;

    root?.style.setProperty('--base-color', COLORS.baseColor);
    root?.style.setProperty('--base-white', COLORS.baseWhite);
    root?.style.setProperty('--base-black', COLORS.baseBlack);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Component {...pageProps} />
  );
}

export default Application;
