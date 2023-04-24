import {createRoot} from "react-dom/client";
import App from "./App";
const rootEl = document.getElementByIdI("root");
const root = createRoot(rootEl);

root.render(<App/>)