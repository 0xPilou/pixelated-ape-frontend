import React from 'react'
import DonutChart from "react-donut-chart";

function CustomDonutChart() {

    const reactDonutChartdata = [
        {
            label: "0xPILOU",
            value: 40,
            color: "#00E396"
        },
        {
            label: "BENNY BLANCO",
            value: 40,
            color: "#FEB019"
        },
        {
            label: "BAYC",
            value: 20,
            color: "#FF4560"
        },

    ];
    const reactDonutChartBackgroundColor = [
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0"
    ];
    const reactDonutChartInnerRadius = 0.5;
    const reactDonutChartSelectedOffset = 0.04;
    const reactDonutChartHandleClick = (item, toggled) => {
        if (toggled) {
            console.log(item);
        }
    };
    let reactDonutChartStrokeColor = "#111111";
    const reactDonutChartOnMouseEnter = (item) => {
        let color = reactDonutChartdata.find((q) => q.label === item.label).color;
        reactDonutChartStrokeColor = color;
    };

    return (
        <div className="admin-donut">
            <DonutChart
                width={500}
                onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
                strokeColor={reactDonutChartStrokeColor}
                data={reactDonutChartdata}
                colors={reactDonutChartBackgroundColor}
                innerRadius={reactDonutChartInnerRadius}
                selectedOffset={reactDonutChartSelectedOffset}
                onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
            />
        </div>
    )
}

export default CustomDonutChart