// Define the layout and order of trials in the experiment
// Configuration
import { Configuration } from "src/configuration";

// Import crossplatform API
import { Experiment } from "neurocog";

// Import jsPsych plugins
import "jspsych/plugins/jspsych-instructions";
import "jspsych/plugins/jspsych-html-keyboard-response";

// Create a new Experiment instance
const experiment = new Experiment(Configuration);

// Timeline setup
const timeline = [];

// Instructions page
timeline.push({
  type: "instructions",
  pages: [`
    <h2>Controller Setup</h2>
    <p>You will be prompted to press controller buttons on the following screens.</p>
    <p>Press the button once, then you will be prompted to press it again for confirmation.</p>
    <p>If the inputs do not match, you will retry the setup of that specific button.</p>
    <p>Click "Start" to begin.</p>
  `],
  show_clickable_nav: true,
  button_label_next: "Start",
});

// Controller buttons 1-4
timeline.push({
  timeline: [{
    type: "html-keyboard-response",
    stimulus: `Press the button corresponding to <b>input controller button 1</b>`,
  },
  {
    type: "html-keyboard-response",
    stimulus: `Press <b>input controller button 1</b> again`,
  }],
  loop_function: function(data: any){
    // Evaluate if the same key was pressed on consecutive trials
    if (jsPsych.pluginAPI.compareKeys(data.values()[0].response, data.values()[1].response)) {
      experiment.getState().set("inputOne", data.values()[1].response);
      return false;
    } else {
      console.warn(`Buttons ${data.values()[0].response} and ${data.values()[1].response} do not match, retrying`);
      return true;
    }
  }
});

timeline.push({
  timeline: [{
    type: "html-keyboard-response",
    stimulus: `Press the button corresponding to <b>input controller button 2</b>`,
  },
  {
    type: "html-keyboard-response",
    stimulus: `Press <b>input controller button 2</b> again`,
  }],
  loop_function: function(data: any){
    // Evaluate if the same key was pressed on consecutive trials
    if (jsPsych.pluginAPI.compareKeys(data.values()[0].response, data.values()[1].response)) {
      experiment.getState().set("inputTwo", data.values()[1].response);
      return false;
    } else {
      console.warn(`Buttons ${data.values()[0].response} and ${data.values()[1].response} do not match, retrying`);
      return true;
    }
  }
});

timeline.push({
  timeline: [{
    type: "html-keyboard-response",
    stimulus: `Press the button corresponding to <b>input controller button 3</b>`,
  },
  {
    type: "html-keyboard-response",
    stimulus: `Press <b>input controller button 3</b> again`,
  }],
  loop_function: function(data: any){
    // Evaluate if the same key was pressed on consecutive trials
    if (jsPsych.pluginAPI.compareKeys(data.values()[0].response, data.values()[1].response)) {
      experiment.getState().set("inputThree", data.values()[1].response);
      return false;
    } else {
      console.warn(`Buttons ${data.values()[0].response} and ${data.values()[1].response} do not match, retrying`);
      return true;
    }
  }
});

timeline.push({
  timeline: [{
    type: "html-keyboard-response",
    stimulus: `Press the button corresponding to <b>input controller button 4</b>`,
  },
  {
    type: "html-keyboard-response",
    stimulus: `Press <b>input controller button 4</b> again`,
  }],
  loop_function: function(data: any){
    // Evaluate if the same key was pressed on consecutive trials
    if (jsPsych.pluginAPI.compareKeys(data.values()[0].response, data.values()[1].response)) {
      experiment.getState().set("inputFour", data.values()[1].response);
      return false;
    } else {
      console.warn(`Buttons ${data.values()[0].response} and ${data.values()[1].response} do not match, retrying`);
      return true;
    }
  }
});

// MRI trigger signal (if required)
timeline.push({
  type: "html-keyboard-response",
  stimulus: `Send the <b>trigger</b> signal if required, or press any button to finish `,
});

// Configure and start the experiment
experiment.start({
  timeline: timeline,
  show_progress_bar: true,
  show_preload_progress_bar: true,
});
