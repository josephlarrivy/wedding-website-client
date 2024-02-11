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
		// console.log(url)
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
			return { status: 404, message: 'Not Found' };
		}
	}

	async getInvitationInfo(invitationId) {

		const capitalizeFirstLetter = (name) => {
			// Check if the name is a non-empty string
			if (typeof name !== 'string' || name.length === 0) {
				return name; // Return unchanged if not a valid string
			}

			// Capitalize the first letter and concatenate with the rest of the string
			return name.charAt(0).toUpperCase() + name.slice(1);
		}

		try {
			const result = await this.makeRequest(`/rsvp/info/${invitationId}`, 'GET', '');
			if (result) {
				const capitalizedResult = result.map(entry => ({
					...entry,
					first_name: capitalizeFirstLetter(entry.first_name),
					last_name: capitalizeFirstLetter(entry.last_name),
				}));

				console.log(capitalizedResult);
      // Return the modified array of objects
      return { status: 200, data: capitalizedResult };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			return { status: 404, message: 'Not Found' };
		}
	}

	async sendConfirmAttendance(personId, value) {
		// console.log(personId, value);
		try {
			const result = await this.makeRequest(`/rsvp/confirm/${personId}/${value}`, 'GET', '');
			if (result) {
				console.log(result)
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			return { status: 404, message: 'Not Found' };
		}
	}

	async sendConfirmChildren(invitationId, value) {
		const valToSend = value == true ? 'yes' : 'no'
		try {
			const result = await this.makeRequest(`/rsvp/confirmChildren/${invitationId}/${valToSend}`, 'GET', '');
			if (result) {
				console.log(result)
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			return { status: 404, message: 'Not Found' };
		}
	}

	async checkIfBringingChildren(invitationId) {
		try {
			const result = await this.makeRequest(`/rsvp/checkIfChildren/${invitationId}`, 'GET', '');
			if (result) {
				console.log(result)
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			return { status: 404, message: 'Not Found' };
		}
	}

	async sendConfirmGuest(invitationId, value) {
		const valToSend = value == true ? 'yes' : 'no'
		try {
			const result = await this.makeRequest(`/rsvp/confirmGuest/${invitationId}/${valToSend}`, 'GET', '');
			if (result) {
				console.log(result)
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			return { status: 404, message: 'Not Found' };
		}
	}

	async checkIfBringingGuest(invitationId) {
		try {
			const result = await this.makeRequest(`/rsvp/checkIfGuest/${invitationId}`, 'GET', '');
			if (result) {
				console.log(result)
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			return { status: 404, message: 'Not Found' };
		}
	}

	async setInvitationAsViewed(invitationId) {
		try {
			const result = await this.makeRequest(`/rsvp/setInvitationAsViewed/${invitationId}`, 'GET', '');
			if (result) {
				console.log(result)
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			return { status: 404, message: 'Not Found' };
		}
	}

	async viewRsvps() {
		const capitalizeFirstLetter = (name) => {
			// Check if the name is a non-empty string
			if (typeof name !== 'string' || name.length === 0) {
				return name; // Return unchanged if not a valid string
			}

			// Capitalize the first letter and concatenate with the rest of the string
			return name.charAt(0).toUpperCase() + name.slice(1);
		}

		try {
			const result = await this.makeRequest(`/rsvp/getAllData`, 'GET', '');
			if (result) {
				const capitalizedResult = result.map(entry => ({
					...entry,
					people: entry.people.map(person => ({
						...person,
						first_name: capitalizeFirstLetter(person.first_name),
						last_name: capitalizeFirstLetter(person.last_name),
					})),
				}));
				console.log(capitalizedResult)
				return { status: 200, data: capitalizedResult };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			return { status: 404, message: 'Not Found' };
		}
	}

	async sendNewSubmissionEmail(data) {
		console.log(data);
		try {
			const result = await this.makeRequest('/rsvp/alertRsvpSubmission', 'POST', data);
			// Check if the result is truthy (i.e., not null or undefined)
			if (result) {
				console.log(result)
				return { status: 200, data: result };
			} else {
				return { status: 404, message: 'Not Found' };
			}
		} catch (error) {
			return { status: 404, message: 'Not Found' };
		}
	}


}


export default ApiClient;