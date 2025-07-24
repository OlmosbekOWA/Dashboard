// src/main.tsx
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import Root from './routs/AppRoutes';
import { ConfigProvider } from 'antd';
import './index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { AuthProvider } from './contexts/auth-context.tsx';


const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2, retryDelay: 1000 } },
});

createRoot(document.getElementById('root')!).render(
  // <BrowserRouter> {/* Add BrowserRouter here */}
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#050556',
          },
        }}
      >
      
          <Root />
    
      </ConfigProvider>
    </QueryClientProvider>
  // </BrowserRouter>
);