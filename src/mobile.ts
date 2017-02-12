
import Plugin from './plugin'; // tsc will give error TS4082 without this import
import { DvaInstance, Hooks, DvaOption, Model } from "./createDva"
import createDva from './createDva';

export default createDva({
	mobile: true,
});
