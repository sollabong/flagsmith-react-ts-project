import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFlags, useFlagsmith } from 'flagsmith/react';

function App() {

  const flags = useFlags(['feature_1','feature_free_plan']); // only causes re-render if specified flag values / traits change
  const flagsmith = useFlagsmith();
  return (
  <div className="App">
    feature_1_value: {flags.feature_1.value}
    feature_free_plan: {flags.feature_free_plan.enabled}
  </div>
  );
}

export default App;
