import React from "react";
import AppRoutes from "./AppRoutes";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterMoment}><AppRoutes /></LocalizationProvider>
  );
}

export default App;
