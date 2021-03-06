import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import NotFound from './NotFound';

import WhoWeAre from './components/pages/WhoWeAre';
import WhatWeDo from './components/pages/WhatWeDo';
import WantToHelp from './components/pages/WantToHelp';
import CanWeHelpYou from './components/pages/CanWeHelpYou';
import OurVoice from './components/pages/OurVoice';
import WantToLearn from './components/pages/WantToLearn';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={WhoWeAre}/>
    <Route path="WhatWeDo" component={WhatWeDo}/>
    <Route path="WantToHelp" component={WantToHelp}/>
    <Route path="CanWeHelpYou" component={CanWeHelpYou}/>
    <Route path="OurVoice" component={OurVoice}/>
    <Route path="WantToLearn" component={WantToLearn}/>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;