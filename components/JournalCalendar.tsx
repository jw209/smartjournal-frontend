import React from 'react'
import {Calendar} from 'react-native-calendars'

const JournalCalendars = () => {
    return <Calendar 
    // Specify style for calendar container element. Default = {}
    style={{
      borderWidth: 3,
      borderRadius: 10,
      borderColor: 'gray',
      height: 365,
      width: 350
    }}
    />
}

export default JournalCalendars;