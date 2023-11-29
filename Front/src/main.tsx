import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)

