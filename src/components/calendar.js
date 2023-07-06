import React, { Component } from 'react';

class Calendar extends Component {
	constructor(props) {
        super(props)
    }
	state = {};
	render() {
		return (
			<div>
				<iframe
					src='https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23616161&ctz=America%2FChicago&showTitle=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&showDate=0&src=NjMzOTc3MDcyZGNlODY3OGU0MjgxNWIxZWVkNjFkMmI0YzQ5ZWIyOWYzMzUxMWEyM2NlOTFlNjlkMTliMjZiMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E4C441&color=%2333B679&color=%230B8043'
					style={{ border: 0 }}
					width='800'
					height='300'
					frameborder='0'
					scrolling='no'></iframe>
			</div>
		);
	}
}

export default Calendar;
