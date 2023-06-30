import '../src/Info.css';
export default Info; function Info() {
  return (
    <div>
      <img className='info--image'  src="./images/user.jpg"/>
      <h1 className="info--name">Ali Kaan Yayla</h1>
      <h4 className="info--title">Full Stack .Net Core - React.js Developer</h4>
      <h5 className="info--website">alikaanyayla.com</h5>
      <div className='info--buttons'>
      <button className='info--mail'><i class="fa fa-envelope" aria-hidden="true"></i> E-Mail</button>
      <button className='info--linkedin'><i className='info--linkedin--icon' class="fa fa-linkedin" aria-hidden="true"></i>LinkedIn</button>
      
      </div>
    </div>
  );
}


