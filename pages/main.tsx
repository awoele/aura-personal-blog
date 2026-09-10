import { hydrateRoot } from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';
import '../app/dimensional.css';

hydrateRoot(document.getElementById('root')!, <Home />);
