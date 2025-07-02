import Header from './header';
import Mainarea from './mainarea';
import Footer from './footer'
class App extends React.Component{
	constructor(){
		super();
		this.state={
			header1links:['home','aboutus','careers'],
			header2links:['Angular','React','Nodejs','MongoDB','ExpressJS','Salesforce','DigitalMarketing'],
		}
	}
	render(){
		return(
			<div>
				<Header links={this.state.header1links} nstyle="danger"></Header>
				<Header links={this.state.header2links} nstyle="info"></Header>
				<Mainarea></Mainarea>
				<Footer></Footer>
			</div>
		)
	}
}
export default App;