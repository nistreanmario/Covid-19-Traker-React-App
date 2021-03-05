import React from 'react'
import {Cards, Chart, CountryPicker} from '../../index'
import {fetchData} from '../../../api';

class HomePage extends React.Component{
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country})
    }
    render() {
        const { data, country } = this.state;
        return(
            <div style={{
                width: "100%",
            }}>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default HomePage