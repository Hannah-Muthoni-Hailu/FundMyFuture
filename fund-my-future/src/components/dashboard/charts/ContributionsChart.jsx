import ChartComponent from '../ChartComponent';

const data = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 1200 },
  { name: 'Mar', value: 1500 },
];

const ContributionsChart = () => {
  return <ChartComponent data={data} title="Sponsor Contributions Over Time" />;
};

export default ContributionsChart;
