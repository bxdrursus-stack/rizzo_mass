import { useState, useEffect } from 'react';
import { formatDate } from 'utils/date';

const ArticlesPost = ({ date }) => {
    const [dateTime, setDateTime] = useState(null);

    useEffect(() => {
        setDateTime(formatDate(date));
    }, [date]);

    return (
        <div>
            <p>{dateTime}</p>
        </div>
    );
};

export default ArticlesPost;