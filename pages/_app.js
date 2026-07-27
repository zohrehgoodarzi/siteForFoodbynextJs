import LayOut from "@/components/layOut/LayOut";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <LayOut><Component {...pageProps} /></LayOut>;
}
