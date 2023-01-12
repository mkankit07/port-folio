import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </div>
  );
}