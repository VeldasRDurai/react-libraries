import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const ReactDatePicker = () => {
    const history = useHistory();
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <Div>
            <div onClick={ () => history.push('/') } > Back </div>    
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                placeholderText={'dd/mm/yyyy'}
                minDate={new Date('Jan 1 1990')}
                maxDate={new Date('Jan 1 2010')} 
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                showYearDropdown
                scrollableYearDropdown
            />
        </Div>
    );
}

export default ReactDatePicker;