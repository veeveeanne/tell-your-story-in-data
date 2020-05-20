import React from 'react'
import { Chart} from 'react-google-charts'

const Timeline = () => {
  return (
    <Chart
      width={'800px'}
      height={'600px'}
      chartType="Timeline"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'string', id: 'Position' },
          { type: 'string', id: 'Company' },
          { type: 'date', id: 'Start' },
          { type: 'date', id: 'End' },
        ],
        [ 'Assistant Manager', 'JPMorgan Chase', new Date(2010, 2, 28), new Date(2013, 5, 30) ],
        [ 'Student', 'North Seattle College', new Date(2013, 8, 30), new Date(2016, 5, 30) ],
        [ 'Office Manager', 'Aide-memoire Jewelry', new Date(2015, 4, 30), new Date(2016, 4, 30) ],
        [ 'Owner and Artist','Vivian E. Wang Fine Arts', new Date(2015, 11, 1), new Date(2019, 3, 30) ],
        [ 'Student','School of the Art Institute of Chicago',  new Date(2016, 8, 30), new Date(2018, 4, 30) ],
        [ 'Legal Project Coordinator', 'Beacon Hill Staffing Group', new Date(2019, 3, 30), new Date(2020, 1, 25) ],
        [ 'Apprentice Full-Stack Developer', 'Launch Academy', new Date(2019, 12, 31), new Date(2020, 4, 30) ],
      ]}
    />
  );
};

export default Timeline;
