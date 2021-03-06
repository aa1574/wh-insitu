/*
-- WH judgement task
-- Key for Items:
    formal -
    informal -
    filler -
*/

var shuffleSequence = seq(shuffle(randomize(startsWith("filler")), shuffle(randomize(startsWith("formal")), randomize(startsWith("informal")))));
var centerItems = true;


var defaults = [

  "Separator", {
      transfer: 1000, //wait for 1000ms
        //other options: "keypress", "click"
      normalMessage: "Please wait for the next sentence.", //message to be displayed
      // errorMessage: "Wrong. Please wait for the next sentence." //message to be displayed in red
  },

  "Question", {
      //"as" option is obligatory
      hasCorrect: false,
      randomOrder: false,
      showNumbers: true,
      instructions: "S'il vous plaît, lisez la réplique et choisissez la réponse qui vous semble la plus naturelle."
        //if a question has a correct answer,
          //keep it as the first element of the "as" option
  },

  "Form", {
      //"html" option is obligatory
      hideProgressBar: true,
      continueOnReturn: true,
      saveReactionTime: true
  }
];

var items = [
  /*
  Do we need separators?
  Is there a way to import from CSV?
  */

  //ends after timer (1000ms)
  ["sep", "Separator", {transfer: 1000, normalMessage: "Merci d'attendre la prochaine phrase."}],

  //ends when key is press
  ["sep", "Separator", {transfer: "keypress", normalMessage: "Please press any key to continue."}],


  /*
  INTRODUCTION
  */

  ["intro",
    //type
    "Form",
    //obligatory option that includes a HTML file that is a questionnaire
    {html: { include: "example_intro.html" },
    //fields that need to have the right format when taking input from user
    validators: {
      //age has to be a number
      age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
      }
  } ],

  //PRACTICE Items

  ["practice", "DashedSentence", {s: "This is a practice sentence before the experiment begins."}],

  // TARGET ITEMS

  /*
  TEMPLATE for all items
  ["type", "Question", {
    q: "...",
    as: [ "Option 1",
          "Option 2"]
        }
      ],
  */

  // FORMAL
  ["formal01", "Question", {
    q: "formal",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["formal02", "Question", {
    q: "formal",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  // INFORMAL
  ["informal01", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["informal02", "Question", {
    q: "informal1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  // NEGATIVE FILLERS
  ["filler01", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler02", "Question", {
    q: "filler1",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  // UNIVERSAL QUANT FILLERS
  ["filler03", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ],

  ["filler04", "Question", {
    q: "filler2",
    as: [ "Option 1",
          "Option 2"]
        }
      ]

];
