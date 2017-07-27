import { h } from 'hyperapp';
import Kendal from './Kendal/index';
import Main from './Main/index';

const views = [

    ['/kendal', (state, actions) => <Kendal state={state} actions={actions}/>],
    ['/', (state, actions) => <Main state={state} actions={actions}/>],
     ['/eh', (state, actions) => <Main state={state} actions={actions}/>],


    ['*', (state, actions) => <div>404</div>]
]

module.exports = views
