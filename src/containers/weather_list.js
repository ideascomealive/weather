import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderWeather(weatherData) {
		const name = weatherData.name;
		const icon = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
		return (
			<tr key={name}>
				<td>{name}</td>
				<td><img src={icon} /></td>
				<td>{weatherData.main.temp}</td>
				<td>{weatherData.main.temp_max}</td>
				<td>{weatherData.main.temp_min}</td>
				<td>{weatherData.weather[0].description}</td>
			</tr>


		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Icon</th>
						<th>Current Temp</th>
						<th>High</th>
						<th>Low</th>
						<th>Condition</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; // weather: weather
}

export default connect(mapStateToProps)(WeatherList);