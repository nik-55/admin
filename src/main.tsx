import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { CustomRouter } from '@/routes/base';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomRouter />
  </StrictMode>
);
