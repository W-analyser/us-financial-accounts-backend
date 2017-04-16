import React from 'react'

class F1FormGraph extends React.Component {
    render() {
        let entries = this.props.entries
        let text = ''
        for (var i = entires.length - 1; i >= 0; i--) {
            let entry = entires[i]
            text += entry.date + ': ' + entry.data + ','
        }
        return (
            <div>
                {text}
            </div>
            )
    }
}

F1FormGraph.PropTypes = {
    entries: React.PropTypes.array.isRequired
}

export default F1FormGraph
