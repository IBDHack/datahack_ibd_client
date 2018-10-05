import axios from 'axios'

const host = "http://ibd-ibdserver.datah-Route-B0WNJ1B639RE-1206570512.eu-west-1.convox.site";
// const localhost = "http://localhost:5000";

export async function predictIBDRemission(surveyResults) {
  return axios.post(`${host}/api/ibd_remission/predict`,
    surveyResults).then(function (response) {
    console.log('IBM remission prediction response:', response);
    return response.data;
  }).catch(function (error) {
    console.log('IBD remission prediction error:', error);
  });
}