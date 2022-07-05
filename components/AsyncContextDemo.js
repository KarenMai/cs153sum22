import React from "react";

import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {
 

  let data = {name:'Karen', injuiry: "ACL", painLevel: "5"};

  return (
    <ValueProvider value={data}>
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;
