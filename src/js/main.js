import Tomato from './modules/tomato';
import RenderTomato from './modules/renderTomato';
import {ControllerTomato} from './modules/controller';

const page = new RenderTomato();
const tomato = new Tomato(page);
const controllerTomato = new ControllerTomato(tomato, page);
