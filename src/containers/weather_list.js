import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
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
						<th>Percipitation</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
			);
	}
}

function mapStateToProps({ weater }) {
	return { weather }; // weather: weather
}

export default connect(mapStateToProps)(WeatherList);