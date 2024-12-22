import axios from "axios"

const githubUrl = 'https://api.github.com/users/facebook';
const otherUrl = 'https://jsonplaceholder.typicode.com/posts';

// create async functions here

const fetchBasicData = async () => {
	try {
		const response = await axios.get(githubUrl);
		console.log(response.data);
	} catch(error) {
		console.error('Error Status:', error.response.status);
		console.error('Error Data:', error.response.data);
	}
};




const postData = async () => {
	try {
		const response = await axios.post(otherUrl, {
			hero: 'heman',
			attack: 151,
			defence: 200
		});
		console.log(response.data);
	} catch (error) {
		console.error('Error Status:', error.response.status);
		console.error('Error Data:', error.response.data);
	}
};





const githubAPI = axios.create({
	baseURL: 'https://api.github.com/users',
	// timeout: ,
	// auth: ,
	// onUploadProgress: ,
	// proxy: ,
	// cancelToken: ,	
});
const fetchDataFromAPI = async () => {
	try {
		const response = await githubAPI.get('/apple');
		console.log(response.data);		
	} catch (error) {
		console.error('Error Status:', error.response.status);
		console.error('Error Data:', error.response.data);
	}
};







// call functions here
// fetchBasicData();
// postData();
fetchDataFromAPI();