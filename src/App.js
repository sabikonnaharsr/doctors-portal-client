import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router/Router';



function App() {
  return (
    <div  className="max-w-[1560px]">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
