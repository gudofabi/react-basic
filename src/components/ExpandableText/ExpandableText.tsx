import { useState } from "react";

import styles from './ExpandedText.module.css'

interface Props {
    children: string;
    maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: Props) {
    const [isExpanded, setExpanded] = useState(false)

    // if the children is less than on the maxChars show the whole text
    if (children.length <= maxChars) return <p>{children}</p>;

    //  if not do this
    const text = isExpanded ? children : children.substring(0, maxChars)+'...';

    return <p>{ text } <span className={styles['btn-more']} onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'less' : 'more'}</span></p>;
}

export default ExpandableText;