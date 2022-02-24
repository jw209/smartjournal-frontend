import React from 'react'
import {Calendar} from 'react-native-calendars'

const JournalCalendars = () => {
    return <Calendar
    style={{
        width: 350,
        height: 355,
        borderRadius: 10
    }}
    theme={{
        dayTextColor: '#FFFFFF',
        todayTextColor: '#00adf5',
        backgroundColor: '#000000',
        calendarBackground: '#000000',
        monthTextColor: '#FFFFFF'
    }}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={day => {
      console.log('selected day', day);
    }}
    hideExtraDays={true}
  />
}

export default JournalCalendars;