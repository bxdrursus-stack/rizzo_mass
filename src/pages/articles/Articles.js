import { useState, useEffect } from 'react';
import { formatDate } from 'utils/date';


export default ArticlesPost = ({

  date,

}) => {
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);

};

