class Footer extends React.Component{
	render(){
		return(
			<nav class="navbar navbar-expand-sm bg-secondary navbar-dark fixed-bottom">
			  <ul class="navbar-nav">
				<li class="nav-item active">
				  <a class="nav-link" href="#">Active</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link disabled" href="#">Disabled</a>
				</li>
			  </ul>
			</nav>
		)
	}
}

export default Footer;
