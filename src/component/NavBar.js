import './NavBar.css'

function NavBar(){
    return(
<div className="header">

<div className="navBar">
  <div className="title">
    <div>Smile</div>
    <div id="sme">SME</div>            
  </div>


  <div className="member">
    <span className="material-icons iconAccount">account_circle</span>
    <div>
      <div id="member">Member</div>
      <div id="accountName">Account Name</div>
    </div>
  </div>

</div>

<div className="menu">
  <span className="material-icons iconMenu">menu</span>
</div>
</div>
    );   
}

export default NavBar;