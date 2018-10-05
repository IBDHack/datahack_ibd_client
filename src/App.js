import React, { Component } from 'react'
import logo from './ibd2.png'

import sesCd0 from './sesCd0.jpg'
import sesCd1 from './sesCd1.jpg'
import sesCd2 from './sesCd2.jpg'
import sesCd3 from './sesCd3.jpg'
import sesCd4 from './sesCd4.jpg'
import sesCd5 from './sesCd5.jpg'
import sesCd6 from './sesCd6.jpg'
import sesCd7 from './sesCd7.jpg'
import sesCd8 from './sesCd8.jpg'
import sesCd9 from './sesCd9.jpg'
import sesCd10 from './sesCd10.jpg'
import sesCd11 from './sesCd11.jpg'
import sesCd12 from './sesCd12.jpg'
import sesCd13 from './sesCd13.jpg'
import sesCd14 from './sesCd14.jpg'
import sesCd15 from './sesCd15.jpg'
import sesCd16 from './sesCd16.jpg'

import * as Survey from 'survey-react'
import 'survey-react/survey.css'
import 'bootstrap/dist/css/bootstrap.css'

import 'jquery-ui/themes/base/all.css'
import 'nouislider/distribute/nouislider.css'
import 'select2/dist/css/select2.css'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'

import 'jquery-bar-rating/dist/themes/css-stars.css'

import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker.js'
import 'select2/dist/js/select2.js'
import 'jquery-bar-rating'

import { predictIBDRemission } from './Client'

import * as widgets from 'surveyjs-widgets'

// import 'icheck'

// widgets.icheck(Survey, $)
widgets.select2(Survey, $)
widgets.inputmask(Survey)
widgets.jquerybarrating(Survey, $)
widgets.jqueryuidatepicker(Survey, $)
widgets.nouislider(Survey)
widgets.select2tagbox(Survey, $)
widgets.signaturepad(Survey)
widgets.sortablejs(Survey)
widgets.ckeditor(Survey)
widgets.autocomplete(Survey, $)
widgets.bootstrapslider(Survey)

Survey.StylesManager.applyTheme('darkrose')

const surveyDict = {
  title: 'The Short Inflammatory Bowel Disease Questionnaire',
  showProgressBar: 'top',
  pages: [

    {
      questions: [
        {
          type: "dropdown",
          name: "ibdType",
          title: "What type of IBD (Inflammatory bowel disease) do you have? ",
          choices: [
            {
              value: "cd",
              text: "Crohn's disease"
            },
            {
              value: "uc",
              text: "Ulcerative colitis"
            }
          ]
        }
      ]
    },

    // Short Inflammatory Bowel Disease Questionnaire (SIBDQ_
    {
      questions: [
        {
          type: 'matrix',
          name: 'SIBDQ_frequency',
          title:
            'Please indicate the answer to the following questions.',
          columns: [
            {
              value: 7,
              text: 'None of the time',
            },
            {
              value: 6,
              text: 'Hardly any of the time',
            },
            {
              value: 5,
              text: 'A little of the time',
            },
            {
              value: 4,
              text: 'Some of the time',
            },
            {
              value: 3,
              text: 'A good bit of the time',
            },
            {
              value: 2,
              text: 'Most of the time',
            },
            {
              value: 1,
              text: 'All of the time',
            },
          ],
          rows: [
            {
              value: 'q1',
              text: 'How often has the feeling of fatigue or of being tired and worn out been a problem for you during the last two weeks?',
            },
            {
              value: 'q2',
              text: 'How often during the last 2 weeks have you had to delay or cancel a social engagement because of your bowel problem?',
            },
            {
              value: 'q4',
              text: 'How often during the last 2 weeks have you been troubled by pain in the abdomen?',
            },
            {
              value: 'q5',
              text: 'How often during the last 2 weeks have you felt depressed or discouraged?',
            },
            {
              value: 'q8',
              text: 'How often during the last 2 weeks have you felt relaxed and free of tension?',
            },
            {
              value: 'q9',
              text: 'How much of the time during the last 2 weeks have you been troubled by a feeling of having to go to the toilet even though your bowels were empty?',
            },
            {
              value: 'q10',
              text: 'How much of the time during the last 2 weeks have you felt angry as a result of your bowel problem?',
            },
          ],
        },
      ],
    },
    {
      questions: [
        {
          type: 'matrix',
          name: 'SIBDQ_severity',
          title:
            'Please indicate the answer to the following questions.',
          columns: [
            {
              value: 7,
              text: 'No trouble',
            },
            {
              value: 6,
              text: 'Hardly any trouble',
            },
            {
              value: 5,
              text: 'A little trouble',
            },
            {
              value: 4,
              text: 'Some trouble',
            },
            {
              value: 3,
              text: 'A significant problem',
            },
            {
              value: 2,
              text: 'A big problem',
            },
            {
              value: 1,
              text: 'A major problem',
            },
          ],
          rows: [
            {
              value: 'q6',
              text: 'Overall, in the last 2 weeks, how much of a problem have you had passing large amounts of gas?',
            },
            {
              value: 'q7',
              text: 'Overall, in the last 2 weeks, how much of a problem have you had maintaining or getting to the weight you would like to be?',
            },
          ],
        },
        {
          type: 'radiogroup',
          name: 'SIBDQ_q3',
          title: 'How much difficulty have you had, as a result of your bowel problems, doing leisure or sports activities you would have liked to have done during the last 2 weeks?',
          choices: [
            {
              value: 7,
              text: 'No difficulty',
            },
            {
              value: 6,
              text: 'Hardly any difficulty',
            },
            {
              value: 5,
              text: 'A little difficulty',
            },
            {
              value: 4,
              text: 'Some difficulty',
            },
            {
              value: 3,
              text: 'A fair bit of difficulty',
            },
            {
              value: 2,
              text: 'A lot of difficulty',
            },
            {
              value: 1,
              text: 'A great deal of difficulty, activities made impossible',
            },
          ],
        },
      ],
    },

    // Harvey-Bradshaw Index (HBI) for Crohn’s Disease
    {
      visibleIf: "{ibdType} = 'cd'",
      questions: [
        {
          type: 'rating',
          name: 'HBI_generalWellbeing',
          title: 'General Wellbeing',
          isRequired: false,
          rateValues: [
            {
              value: 0,
              text: 'Very well',
            },
            {
              value: 1,
              text: 'Slightly below par',
            },
            {
              value: 2,
              text: 'Poor',
            },
            {
              value: 3,
              text: 'Very poor',
            },
            {
              value: 4,
              text: 'Terrible',
            },
          ],
          rateMin: 0,
          rateMax: 4,
        },
        {
          type: 'rating',
          name: 'HBI_abdominalPain',
          title: 'Abdominal Pain',
          isRequired: false,
          rateValues: [
            {
              value: 0,
              text: 'None',
            },
            {
              value: 1,
              text: 'Mild',
            },
            {
              value: 2,
              text: 'Moderate',
            },
            {
              value: 3,
              text: 'Severe',
            },
          ],
          rateMin: 0,
          rateMax: 3,
        },
        {
          type: 'rating',
          name: 'HBI_liquidStoolsPerDay',
          title: 'Liquid stools, per day',
          isRequired: false,
          rateValues: [
            {
              value: 0,
              text: '0 (none)',
            },
            1,
            2,
            3,
            4,
            5,
            {
              value: 6,
              text: '6 or more',
            },
          ],
          rateMin: 0,
          rateMax: 6,
        },
        {
          type: 'rating',
          name: 'HBI_abdominalMass',
          title: 'Abdominal Mass',
          isRequired: false,
          rateValues: [
            {
              value: 0,
              text: 'None',
            },
            {
              value: 1,
              text: 'Dubious',
            },
            {
              value: 2,
              text: 'Definite',
            },
            {
              value: 3,
              text: 'Definite and tenderness',
            },
          ],
          rateMin: 0,
          rateMax: 3,
        },
        {
          type: 'checkbox',
          name: 'HBI_additionalSymptoms',
          title: 'Have you experienced any of these symptoms in the last month?',
          choices: [
            'Arthralgia',
            'Erythema nodosum',
            'Aphthous ulcers',
            'Pyoderma gangrenous',
            'Anal fissure',
            'New fistula',
            'Abscess',
          ],
        },
      ],
    },

    // Simple Clinical Colitis Activity Index (SCCAI) for Ulcerative Colitis
    {
      visibleIf: "{ibdType} = 'uc'",
      questions: [
        {
          type: "radiogroup",
          name: "SCCAI_bowelFrequencyDay",
          title: "Bowel Frequency (day)",
          choices: [
            {
              value: 0,
              text: "1-3"
            },
            {
              value: 1,
              text: "4-6"
            },
            {
              value: 2,
              text: "7-9"
            },
            {
              value: 3,
              text: ">9"
            }
          ]
        },
        {
          type: "radiogroup",
          name: "SCCAI_bowelFrequencyNight",
          title: "Bowel Frequency (night)",
          choices: [
            {
              value: 0,
              text: "0"
            },
            {
              value: 1,
              text: "1-3"
            },
            {
              value: 2,
              text: "4-6"
            }
          ]
        },
        {
          type: "radiogroup",
          name: "SCCAI_urgencyDefecation",
          title: "Urgency of Defection",
          choices: [
            {
              value: 0,
              text: "None"
            },
            {
              value: 1,
              text: "Hurry"
            },
            {
              value: 2,
              text: "Immediately"
            },
            {
              value: 3,
              text: "Incontinence"
            }
          ]
        },
      ],
    },
    {
      visibleIf: "{ibdType} = 'uc'",
      questions: [
        {
          type: "radiogroup",
          name: "SCCAI_bloodInStool",
          title: "Blood in Stool",
          choices: [
            {
              value: 0,
              text: "None"
            },
            {
              value: 1,
              text: "Trace"
            },
            {
              value: 2,
              text: "Occasionally frank"
            },
            {
              value: 3,
              text: "Usually frank"
            }
          ]
        },
        {
          type: "radiogroup",
          name: "SCCAI_generalWellBeing",
          title: "General Wellbeing",
          choices: [
            {
              value: 0,
              text: "Very well"
            },
            {
              value: 1,
              text: "Slightly below par"
            },
            {
              value: 2,
              text: "Poor"
            },
            {
              value: 3,
              text: "Very poor"
            },
            {
              value: 4,
              text: "Terrible"
            }
          ]
        },
        {
          title: "Extracolonic Features",
          name: "SCCAI_extracolonicFeatures",
          type: "rating",
          isRequired: false,
          rateValues: [
            {
              value: 0,
              text: '0 (None)',
            },
            {
              value: 1,
              text: '1',
            },
            {
              value: 2,
              text: '2',
            },
            {
              value: 3,
              text: '3',
            },
            {
              value: 4,
              text: '4',
            },
            {
              value: 5,
              text: '5',
            },
            {
              value: 6,
              text: '6',
            },
            {
              value: 7,
              text: '7',
            },
            {
              value: 8,
              text: '8 or more',
            },
          ],
          rateMin: 0,
          rateMax: 3,
        },
      ],
    },

    // Microbiome file
    {
      questions: [
        {
          name: 'microbiomeFile',
          title: 'Upload a microbiome result file.',
          type: 'file',
          commentText: 'Comment lala',
          valueName: 'microbiomeFile',
          showPreview: false,
          acceptedTypes: 'csv,txt',
          waitForUpload: true,
          maxSize: 0,
        }
      ],
    },

  ],
}

const storageName = 'SurveyJS_LoadState'
let timerId = 0

function loadState (survey) {
  let storageSt = window.localStorage.getItem(storageName) || ''

  let res = {}
  if (storageSt) {
    res = JSON.parse(storageSt)
  } else {
    res = {
      currentPageNo: 0,
      data: {},
    }
  }

  // Set the loaded data into the survey.
  if (res.currentPageNo) { survey.currentPageNo = res.currentPageNo }
  if (res.data) { survey.data = res.data }
}

function saveState (survey) {
  let res = {
    currentPageNo: survey.currentPageNo,
    data: survey.data,
  }
  window.localStorage.setItem(storageName, JSON.stringify(res))
}

function clearState (survey) {
  window.localStorage.removeItem(storageName)
}

const surveyModel = new Survey.Model(surveyDict)

surveyModel.onCurrentPageChanged.add(function (survey, options) {
  saveState(survey)
})

surveyModel.onComplete.add(function (survey, options) {
  // kill the timer
  clearInterval(timerId)
  // save the data on survey complete. You may call another function to store the final results
  clearState(survey)
})

// Load the initial state
loadState(surveyModel)

// save the data every 10 seconds, it is a good idea to change it to 30-60 seconds or more.
timerId = window.setInterval(function () {
  saveState(surveyModel)
}, 1000)

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

class App extends Component {
  constructor () {
    super()
    this.state = {sesCd: null}
  }

  componentWillMount () {
    window['$'] = window['jQuery'] = $
  }

  onValueChanged = (result) => {
    console.log('value changed!')
  }

  onComplete = async (survey) => {
    console.log('Complete! ', survey)
    const surveyResult = survey.valuesHash;

    const ibdRemissionPrediction = await predictIBDRemission(surveyResult);
    console.log('IDB remission prediction result:', ibdRemissionPrediction);

    this.setState({
      sesCd: getRandomInt(16),
    })
  }

  sesCdToText (sesCd) {
    if (sesCd >= 0 && sesCd <= 2) {
      return 'Remission'
    } else if (sesCd >= 3 && sesCd <= 6) {
      return 'Mild endoscopic activity'
    } else if (sesCd >= 7 && sesCd <= 15) {
      return 'Moderate endoscopic activity\n'
    } else if (sesCd > 15) {
      return 'Severe endoscopic activity\n'
    } else {
      return 'Uncertain'
    }
  }

  sesCdToRecommendation (sesCd) {
    if (sesCd >= 0 && sesCd <= 2) {
      return 'Maintain existing treatment'
    } else if (sesCd >= 3 && sesCd <= 6) {
      return 'Maintain existing treatment; repeat in 3 months'
    } else if (sesCd >= 7 && sesCd <= 15) {
      return 'Consider endoscopic probe\n'
    } else if (sesCd > 15) {
      return 'Endoscopic probe required\n'
    } else {
      return 'Uncertain'
    }
  }

  sesCdToImage (sesCd) {
    const sesCdImages = {
      sesCd0,
      sesCd1,
      sesCd2,
      sesCd3,
      sesCd4,
      sesCd5,
      sesCd6,
      sesCd7,
      sesCd8,
      sesCd9,
      sesCd10,
      sesCd11,
      sesCd12,
      sesCd13,
      sesCd14,
      sesCd15,
      sesCd16,
    }

    let sesCdImageValue = 'sesCd16'
    if (sesCd >= 0 && sesCd <= 15) {
      sesCdImageValue = `sesCd${sesCd}`
    }

    return sesCdImages[sesCdImageValue]
  }

  renderResult () {
    return (<div>
      <div id='whatis' className='class-section info'>
        <div className='wrap-2 a'>
          <div className='left-1'>
            <h2 className='heading-2 black'>Result Calculated</h2>
            <p className='subhead-1 black'>
              <strong className='infotext black'>
                The Simple Endoscopic Score for Crohn Disease (SES-CD) assesses
                the size of mucosal ulcers, the ulcerated surface, the
                endoscopic extension and the presence of stenosis. It has been
                developed as an alternative to CDEIS, it is simpler and
                therefore more suited to a routine use. During the validation
                process, a strong correlation between SES-CD and CDEIS (r =
                0.920) as been seen. In addition, SES-CD correlates with
                clinical parameters and serum levels of C-reactive protein.
                <br/>
                <br/>

                <strong className='infotext black'>
                  A decrease of 50% of the SES-CD score has recently been
                  proposed
                  as prognostically significant.
                  <br/>
                  <br/>
                </strong>

                <br/>
                <br/>


              </strong>

              <strong className='bold-text black'>SES-CD Result:</strong><br/>
              <strong className="bold-text bold-link black">
                {this.sesCdToText(this.state.sesCd)} (score {this.state.sesCd})
              </strong>
              <br/>

              <img src={this.sesCdToImage(this.state.sesCd)}/>

              <br/>
              <br/>

              <strong className='bold-text black'>Recommendation:</strong><br/>
              <strong className="bold-text bold-link black">
                {this.sesCdToRecommendation(this.state.sesCd)}
              </strong>

              <br/>
              <br/>

            </p>

          </div>
        </div>
        <div className='wrap-2 b'/>
      </div>

    </div>)
  }

  renderSurvey () {
    return (<div className='surveyjs'>
        <Survey.Survey
          model={surveyModel}
          onComplete={this.onComplete}
          onValueChanged={this.onValueChanged}
        />
      </div>
    )
  }

  renderSurveyOrResult () {
    if (this.state.sesCd !== null) {
      return this.renderResult()
    } else {
      return this.renderSurvey()
    }
  }

  render () {
    return (
      <div className='App'>

        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
          <div className='heading-container'>
            <div className='heading-ibd'>IBD</div>
            <div>
              <div className='heading-hack'>HACK</div>
              <div className='div-block-9'/>
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>

        <div className='hero-wrap'>
          <div className='hero-left'>
            <h1 className='heading-1'>An alternative to <span
              className='thiner text-span'/></h1>
            <h1
              className='heading-1 heading-color heading-hero-spinner'>endoscopy</h1>
            <h1
              className='heading-1 buttom'>3-5.10.2018<span
              className='thiner text-span'/></h1></div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div id='whatis' className='class-section home dark'>
          <div className='wrap-2 a'>
            <div className='left-1'>
              <h2 className='heading-2'>What is IBD Hack!?</h2>
              <p className='subhead-1'>
                <strong
                  className='bold-text'>
                  The term inflammatory bowel disease (IBD) covers a group of
                  disorders in which the intestines become inflamed (red and
                  swollen), probably as a result of an immune reaction of the
                  body against its own intestinal tissue.
                  <br/>
                  <br/>

                  Two major types of IBD are described: ulcerative colitis and
                  Crohn's disease. As the name suggests, ulcerative colitis is
                  limited to the colon (large intestine). Although Crohn's
                  disease can involve any part of the gastrointestinal tract
                  from the mouth to the anus, it most commonly affects the small
                  intestine and/or the colon.
                  <br/>
                  <br/>

                  Both ulcerative colitis and Crohn's disease usually run a
                  waxing and waning course in the intensity and severity of
                  illness. When there is severe inflammation, the disease is
                  considered to be in an active stage, and the person
                  experiences a flare-up of the condition. When the degree of
                  inflammation is less (or absent), the person usually is
                  without symptoms, and the disease is considered to be in
                  remission.
                  <br/>
                  <br/>

                  <a
                    href='https://www.webmd.com/ibd-crohns-disease/default.htm'>
                    <strong className='bold-text bold-link'>More info about
                      IBD.</strong>
                  </a>
                  <br/>
                  <br/>

                  This questionnaire is designed to find out how you have been
                  feeling
                  during the past TWO WEEKS. You will be asked about symptoms
                  you have
                  been having as a result of your inflammatory bowel disease,
                  the way
                  you have been feeling in general, and how your mood has been.
                  Answer
                  every question by marking the answer as indicated. If you are
                  unsure
                  about how to answer a question, please give the best answer
                  you can.
                  <br/>
                  <br/>

                  The goal is to discover your Simple Endoscopic Score for
                  Crohn’s Disease (SES-CD) score, and <u>save you from having to
                  suffer a colonoscopy!</u>
                  <br/>
                  <br/>

                </strong>
                <a href='https://www.igibdscores.it/en/info-sescd.html'>
                  <strong className='bold-text bold-link'>More info about
                    SES-CD.</strong>
                </a>
                <br/>
                <br/>

                <strong className='bold-text'>
                  Please fill in the survey below.
                </strong>
              </p>

            </div>
          </div>
          <div className='wrap-2 b'/>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


        {this.renderSurveyOrResult()}
        <p className='App-intro'/>
      </div>
    )
  }
}

export default App
