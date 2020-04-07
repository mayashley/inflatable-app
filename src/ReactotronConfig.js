import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.configure({ name: "Inflatables" })
  .use(reactotronRedux()) //  <- here i am!
  .connect(); //Don't forget about me!

export default reactotron;
