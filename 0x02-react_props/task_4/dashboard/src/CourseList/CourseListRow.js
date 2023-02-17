import React from 'react'
import propTypes from 'prop-types'

export default function CourseListRow() {
    return (
        <tr>
            {isHeader ?
                (textSecondCell == null ?
                    (<th colSpan={2}>{textFirstCell}</th>) :
                    (<>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                    )
                ) : (<>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
                )}
        </tr>
    )
}
CourseListRow.propTypes = {
    isHeader: propTypes.bool,
    textFirstCell: propTypes.string.isRequired,
    textSecondCell: propTypes.string

}
CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}