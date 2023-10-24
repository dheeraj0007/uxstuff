import Faq from "./components/faq";
import Header from "./components/header";
import Info from "./components/info";
import Process from "./components/process";
import Recent from "./components/recent";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function App() {
  return (
    <div className="xl:flex flex-row">
      <button class="bg-[#DF52FF] text-white font-bold py-2 px-4 rounded-full fixed bottom-4 right-4">
        <ChatBubbleOutlineIcon />
      </button>
      <div className="xl:w-[40vw]"><Header /></div>
      <div className="xl:w-[60vw] xl:overflow-y-scroll h-[100vh]">
        <Process />
        <Recent />
        <Info />
        <Faq />
      </div>
    </div>
  );
}

export default App;
