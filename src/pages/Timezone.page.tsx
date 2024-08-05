import DefaultLayout from "../layouts/default.layout"
import moment from "moment-timezone"
import dayjs from "dayjs"
import { useEffect, useState } from "react"

import { TimePicker, Select } from "antd"

function TimezonePage() {
  let timezoneOptions = moment.tz.names().map((tz) => {
    const [country, city] = tz.split("/")
    const abbr = moment.tz(tz).format("z")
    const label = country && city ? `${country} - ${city} (${abbr})` : tz
    return { value: tz, label }
  })
  const timeFormat = "h:mm A"

  const [srcTimezone, setSrcTimezone] = useState<string | undefined>(
    localStorage.getItem("srcTimezone") || undefined
  )
  const [srcTime, setSrcTime] = useState<string | undefined>(
    localStorage.getItem("srcTime") || undefined
  )
  const [destTimezone, setDestTimezone] = useState<string | undefined>(
    localStorage.getItem("destTimezone") || undefined
  )
  const [destTime, setDestTime] = useState<string | undefined>(
    localStorage.getItem("destTime") || undefined
  )

  const handleChange = (srcChanged = true) => {
    if (srcChanged) {
      if (srcTime && srcTimezone && destTimezone) {
        console.log(srcTime, srcTimezone, destTimezone)
        setDestTime(
          moment
            .tz(srcTime, timeFormat, srcTimezone)
            .tz(destTimezone)
            .format(timeFormat)
        )
        console.log("here")
      }
    } else {
      if (destTime && destTimezone && srcTimezone)
        setSrcTime(
          moment
            .tz(destTime, timeFormat, destTimezone)
            .tz(srcTimezone)
            .format(timeFormat)
        )
    }

    if (srcTime) localStorage.setItem("srcTime", srcTime)
    if (destTime) localStorage.setItem("destTime", destTime)
    if (srcTimezone) localStorage.setItem("srcTimezone", srcTimezone)
    if (destTimezone) localStorage.setItem("destTimezone", destTimezone)
  }

  useEffect(() => handleChange(true), [srcTime, srcTimezone, destTimezone])
  useEffect(() => handleChange(false), [destTime, destTimezone, srcTimezone])

  return (
    <DefaultLayout>
      <div className="flex flex-col w-full mx-auto max-w-[800px] bg-white p-8 rounded-md shadow-md">
        <h1 className="text-center mb-16"> 🌏 Time conversion</h1>
        <div className="flex gap-4 p-4 items-center rounded-md">
          <Select
            showSearch
            placeholder="Source timezone"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={timezoneOptions}
            className="w-full"
            onChange={(value: string) => {
              setSrcTimezone(value)
            }}
            value={srcTimezone}
          />

          <TimePicker
            use12Hours
            format={timeFormat}
            onChange={(date: any, dateString: any) => {
              setSrcTime(dateString)
            }}
            defaultValue={srcTime ? dayjs(srcTime, timeFormat) : null}
            value={srcTime ? dayjs(srcTime, timeFormat) : null}
          />
        </div>

        <h2 className="text-center text-3xl">👇</h2>

        <div className="flex gap-4 p-4 items-center rounded-md">
          <Select
            showSearch
            placeholder="Destination timezone"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={timezoneOptions}
            className="w-full"
            onChange={(value: string) => {
              setDestTimezone(value)
            }}
            value={destTimezone}
          />

          <TimePicker
            use12Hours
            format={timeFormat}
            onChange={(date: any, dateString: any) => {
                console.log(date, dateString)
              setDestTime(dateString)
            }}
            defaultValue={destTime ? dayjs(destTime, timeFormat) : null}
            value={destTime ? dayjs(destTime, timeFormat) : null}
          />
        </div>
        {destTime ? (
          <h2 className="text-center text-base mt-16">
            <span className="text-2xl font-bold underline mr-1"> {srcTime} </span>
            at&nbsp;
            {srcTimezone}&nbsp;
            is
            <span className="text-2xl font-bold underline mx-1"> {destTime} </span>
            at &nbsp;
            {destTimezone}
          </h2>
        ) : null}
      </div>
    </DefaultLayout>
  )
}

export default TimezonePage
