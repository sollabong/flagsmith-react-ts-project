import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import { IFlagsmith } from 'flagsmith/types';
import CardComponent from './components/card/card';
import HeroComponent from './components/hero/hero';

function App() {

  const flags = useFlags(['feature_free_plan']); // only causes re-render if specified flag values / traits change
  const flagsmith: IFlagsmith<string, string> = useFlagsmith();
  const [isFreePlanEnabled, setIsFreePlanEnabled] = useState<boolean>(flags.feature_free_plan.enabled);

  useEffect(() => {
    setIsFreePlanEnabled(flags.feature_free_plan.enabled)
  }, [flags, flagsmith]);

  
  return (
  <div className="root">
    <section className="bg-white dark:bg-gray-900 h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <HeroComponent></HeroComponent>
            <div id="pricing-table" className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
                {isFreePlanEnabled ? <CardComponent price= {0}></CardComponent> : "ASD"}
                <CardComponent price= {19}></CardComponent>
                <CardComponent price= {29}></CardComponent>
                <CardComponent price= {49}></CardComponent>
            </div>
        </div>
      </section>
  </div>
  );
}

export default App;
