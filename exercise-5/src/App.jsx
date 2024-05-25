import { AVAILABLE_IMAGES } from "./data.js";
import RenderImage from "./components/RenderImage.jsx";

function App() {
  return (
    <>
      <ul className="places">
       {
        AVAILABLE_IMAGES.map((image) => (
          <RenderImage key={image.id} props={image} />
        ))
       }
      </ul>
    </>
  );
}

export default App;
