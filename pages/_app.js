import { GlobalStyles } from "twin.macro";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { AppProvider } from "../components/AppContext";
const App = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
