import { useSearchParams } from 'react-router-dom';
import DefaultLayout from '../layouts/default.layout'
import moment from 'moment-timezone';
import { useEffect } from 'react';

import { TimePicker, Select } from "antd";

function TimezonePage() {

    let timezoneOptions = moment.tz.names().map(tz => {
        const [country, city] = tz.split("/")
        const abbr = moment.tz(tz).format("z")
        const label = country && city ? `${country} - ${city} (${abbr})` : tz;
        return { value: tz, label };
    })

    // useEffect(() => {
    //     let timeZones =
    //     timezoneOptions = timeZones
    // }, []);

    console.log(moment.tz.names().filter(tz => !tz.includes("/")))

    return (
        <DefaultLayout>
            <div className='flex m-16'>

                <Select
                    showSearch
                    placeholder="Select a timezone"
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={timezoneOptions}
                    className='w-full mr-4'
                />

                <TimePicker />
            </div>
        </DefaultLayout>
    )
}

export default TimezonePage;