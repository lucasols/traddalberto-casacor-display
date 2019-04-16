import React, { useRef, useEffect } from 'react';
import ChartJs from 'chart.js';
import { colors, fontPrimary, colorsRgba, fontSecondary } from 'style/theme';

type Props = {
  data: {
    label: string;
    value: number;
  }[];
};

const MiniChart = ({ data }: Props) => {
  const chartElem = useRef<HTMLCanvasElement>(null);
  const chart = useRef<ChartJs>();

  const values = data.map(({ value }) => value);
  const max = Math.max(...values);
  const delta = (max - Math.min(...values)) * 1.5;

  useEffect(() => {
    if (chart.current) {
      chart.current.data.datasets![0].data = values.map(n => n + delta);
      chart.current.data.labels = data.map(({ label }) => label);
      chart.current.config.options!.scales!.yAxes![0].ticks!.max = max + delta;
      chart.current.update();

      return;
    }

    const gradient = chartElem
      .current!.getContext('2d')!
      .createLinearGradient(0, 0, 0, 190);
    gradient.addColorStop(0, colorsRgba.blue(0.5));
    gradient.addColorStop(1, colorsRgba.blue(0));

    chart.current = new ChartJs(chartElem.current!, {
      type: 'line',
      data: {
        labels: data.map(({ label }) => label),
        datasets: [
          {
            data: values.map(n => n + delta),
            borderColor: colors.blue,
            borderWidth: 1.5,
            backgroundColor: gradient,
            lineTension: 0.05,
            pointBackgroundColor: colors.blueAccent,
            pointBorderColor: 'transparent',
            pointRadius: 1.2,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 50,
            left: 26,
            right: 26,
            bottom: 20,
          },
        },
        scales: {
          xAxes: [
            {
              display: true,
              position: 'top',
              ticks: {
                beginAtZero: true,
                padding: 16,
                fontColor: colorsRgba.blue(0.8),
                fontSize: 9,
                fontFamily: fontSecondary,
              },
              gridLines: {
                drawTicks: false,
                display: false,
                drawBorder: false,
                color: gradient,
                lineWidth: 0.6,
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
  });

  return <canvas ref={chartElem} />;
};

export default MiniChart;
