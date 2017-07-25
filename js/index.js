import { app, h } from 'hyperapp';
/** @jsx h */
import { Router } from "@hyperapp/router"
import state from './state';
import actions from './actions';
import view from './views'

import * as d3 from 'd3v4';

app({ state, actions, view, mixins:[Router] })
