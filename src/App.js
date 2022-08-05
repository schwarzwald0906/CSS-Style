import { InlineStyle } from "./Components/InlineStyle";
import { CssModule } from "./Components/CssModule";
import { StyledJsx } from "./Components/StyledJsx";
import { StyledComponents } from "./Components/StyledComponents";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModule />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
