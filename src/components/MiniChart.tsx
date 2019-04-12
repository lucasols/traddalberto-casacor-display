import React, { useRef, useEffect } from 'react';
import ChartJs from 'chart.js';
import { colors, fontPrimary, colorsRgba } from 'style/theme';

type Props = {};

const MiniChart = ({ }: Props) => {
  const chartElem = useRef<HTMLCanvasElement>(null);
  const chart = useRef<ChartJs>();

  const data = [3, 3, 6, 7, 0, 6, 9];
  const delta = (Math.max(...data) - Math.min(...data)) * 1.5;

  useEffect(() => {
    const gradient = chartElem
      .current!.getContext('2d')!
      .createLinearGradient(0, 0, 0, 230);
    gradient.addColorStop(0, colorsRgba.blue(0.6));
    gradient.addColorStop(1, colorsRgba.blue(0));

    chart.current = new ChartJs(chartElem.current!, {
      type: 'line',
      data: {
        labels: ['Qu', 'Qi', 'Sx', 'Sa', 'Do', 'Se', 'Hoje'],
        datasets: [
          {
            data: data.map(n => n + delta),
            borderColor: colors.blue,
            borderWidth: 1.5,
            backgroundColor: gradient,
            lineTension: 0.05,
            pointBackgroundColor: colors.blueAccent,
            pointBorderColor: 'transparent',
            pointRadius: 2,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 60,
            left: 20,
            right: 20,
            bottom: 10,
          },
        },
        scales: {
          xAxes: [
            {
              display: true,
              position: 'top',
              ticks: {
                beginAtZero: true,
                padding: 20,
                fontColor: colors.blue,
                fontSize: 9,
                fontFamily: fontPrimary,
              },
              gridLines: {
                drawTicks: false,
                // display: false,
                drawBorder: false,
                color: gradient,
                lineWidth: 0.7,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              display: false,
              ticks: {
                // min: 0,
                suggestedMin: 0,
              },
            },
          ],
        },
        legend: { display: false },
        tooltips: { enabled: false },
        animation: {
          duration: 0,
        },
      },
    });

    return () => {
      chart.current!.destroy();
    };
  });

  return <canvas ref={chartElem} />;
};

export default MiniChart;
