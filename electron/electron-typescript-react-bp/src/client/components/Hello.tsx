import * as React from 'react'

import '../styles/Hello.less'

export interface HelloProps {
	compiler: string
	framework: string
	envoirment: string
}

export class Hello extends React.Component<HelloProps, {}> {
	render() {
		return <h1 className="hello">
			<div>🖖 Hello from {this.props.compiler} and {this.props.framework} running inside {this.props.envoirment}!</div>
			<br />
			<div>Try to modify the client and watch the hot reload magic 🎩</div>
		</h1>
	}
}