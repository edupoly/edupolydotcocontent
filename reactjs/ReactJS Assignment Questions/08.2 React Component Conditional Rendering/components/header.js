class Header extends React.Component{
	render(){
		return(
			<nav className={"navbar navbar-expand-sm  bg-"+this.props.nstyle+" navbar-dark"}>
			  <ul class="navbar-nav">
				{
					this.props.links.map((link)=>{
						return(
							<li class="nav-item active">
							  <a class="nav-link" href="#">{link}</a>
							</li>
						)
					})
				}							
			  </ul>
			</nav>
		)
	}
}
export default Header;		