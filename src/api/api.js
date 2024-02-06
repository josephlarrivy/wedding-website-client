import axios from 'axios';

class ApiClient {
	constructor(environment = 'dev') {
		this.baseURL = this.getBaseURL(environment);
	}

	getBaseURL(environment) {
		if (environment === 'dev') {
			return 'http://localhost:3001';
		} else if (environment === 'production') {
			// Replace 'your-heroku-app' with the actual name of your Heroku app
			return 'https://your-heroku-app.herokuapp.com';
		} else {
			throw new Error('Invalid environment. Use "dev" or "production".');
		}
	}

	async test() {
		return 'api getting hit';
	}

	async makeRequest(endpoint, method = 'GET', data = null) {
		const url = `${this.baseURL}${endpoint}`;
		const headers = { 'Content-Type': 'application/json' };

		try {
			const response = await axios({ method, url, headers, data });
			return response.data;
		} catch (error) {
			console.error('API Request Error:', error.message);
			throw error;
		}
	}

	async checkForName(data) {
		console.log(data);
		try {
			const result = await this.makeRequest('/rsvp/check', 'POST', data);
			// Check if the result is truthy (i.e., not null or undefined)
			if (result) {
				console.log(result)
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			// Handle error if needed
			// console.error('Error in checkForName:', error.message);
			// You can throw the error if you want to propagate it further
			// throw error;
			return { status: 404, message: 'Not Found' };
		}
	}

	async getInvitationInfo(invitationId) {
		// console.log(id);
		try {
			const result = await this.makeRequest(`/rsvp/info/${invitationId}`, 'GET', '');
			if (result) {
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			// Handle error if needed
			// console.error('Error in checkForName:', error.message);
			// You can throw the error if you want to propagate it further
			// throw error;
			return { status: 404, message: 'Not Found' };
		}
	}

	async sendConfirmAttendance(personId, value) {
		// console.log(id);
		try {
			const result = await this.makeRequest(`/rsvp/confirm/${personId}/${value}`, 'GET', '');
			if (result) {
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			// Handle error if needed
			// console.error('Error in checkForName:', error.message);
			// You can throw the error if you want to propagate it further
			// throw error;
			return { status: 404, message: 'Not Found' };
		}
	}
	


}


export default ApiClient;