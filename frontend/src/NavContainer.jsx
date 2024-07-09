import  { Link}  from "react-router-dom";
import  {Navbar , Nav , NavbarCollapse , Container , NavLink , NavbarBrand , NavbarToggle ,
         Form , FormControl , FormLabel } from 'react-bootstrap'
const NavContainer = ({search , setSearch}) => {
    return(
        <Navbar className="Nav">
           <Container className="navContainer"> 
           <NavbarBrand as={Link} to = "/" style={{ fontSize: '2rem', color:'white', fontWeight : 'bold'}}>Blog</NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav" className = "nav-collapse">
           <Form onSubmit={ (e) => e.preventDefault} className="searchForm">
                <FormLabel htmlFor="search">search</FormLabel>
               <FormControl type="text"
                 id = "search"
                 value = {search}
                 className = "searchInput"
                 aria-label = "searchInput"
                 placeholder="Search Post"
                 required
                 onChange={ (e) => setSearch(e.target.value)}/>
            </Form>
            <div className = "navItems">
            <Nav style={{display: 'flex' , gap : '25px' , listStyleType : 'none' , marginLeft : '20px' , fontWeight : '500'}}>
                <NavLink as = {Link} to = "/" target="_parent">Home</NavLink>
                <NavLink as = {Link} to = "/post" target="_parent">Post</NavLink>
                <NavLink  as = {Link} to = "/about" target="_parent">About</NavLink>
            </Nav>
            </div>
        </NavbarCollapse>
           </Container>
        </Navbar>
    )
}

export default NavContainer;