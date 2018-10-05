import axios from 'axios'

export async function predictIBDRemission(surveyResults) {
  return axios.post('http://localhost:5000/api/ibd_remission/predict', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }).then(function (response) {
    console.log('IBM remission prediction response:', response);
    return response.data;
  }).catch(function (error) {
    console.log('IBD remission prediction error:', error);
  });
}