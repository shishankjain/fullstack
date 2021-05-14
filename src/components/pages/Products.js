import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
// import {y} from './components/images/y.jpg';



const cardItem=(
    <div class="card-deck">
      <div class="card">
           <img src="https://5.imimg.com/data5/OF/PP/MY-31793857/bridal-diamond-necklace-500x500.jpg" class="card-img-top" alt="..."/>
           <div class="card-body">
      <h5 class="card-title"><u>TANISHQ JEWELLERS</u></h5>
      <p class="card-text">We are an Indian jewellery brand and a division of Titan Company. Founded in 1994, we have been serving you with best and unique designs.</p>
      <Link to="/Details" class="btn btn-primary">Visit Us</Link>
           </div>
    
    </div>
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HezsmQwzcIWlxfQpbdGuf2MwOCMY8EfYTWw4jpUmWAZFvJlMP2FFbWnwIkOIMHszklU&usqp=CAU" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>SAMRIDDHI JEWELLERS</u></h5>
      <p class="card-text">We are Indian jewellery brand, not so popular at a national level but expanding at our best.</p>
      <Link to="/Details" class="btn btn-primary">Visit Us</Link>
    </div>
    
  </div>
  <div class="card">
    <img src="https://5.imimg.com/data5/XX/CI/BD/SELLER-1107352/diamond-ring-500x500.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>RELIANCE JEWELLERS</u></h5>
      <p class="card-text">Over the years, Reliance Jewels has catered to wide range of audience. At Reliance Jewels, customers are assured of the widest range, stunning designs, guaranteed purity & quality and a pleasant shopping experience.</p>
      <Link to="/Details" class="btn btn-primary">Visit Us</Link>
    </div>
    
  </div>
</div>
  );




const cardItem1=(
    <div class="card-deck">
      <div class="card">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfX4-rB0oCfmCeG-TBUiAol1hWi4upe_FecxUsvrdDJaXGyRC98Hh2IrY0D6oesFXPTdc&usqp=CAU" class="card-img-top" alt="..."/>
           <div class="card-body">
      <h5 class="card-title"><u>PC JEWELLERS</u></h5>
      <p class="card-text">PC Jeweller Limited (PCJ) is one of the leading jewellery companies in India. The company offers a wide range of products including gold jewellery diamond jewellery and other jewellery with a thrust on diamond jewellery and jewellery for weddings.</p>
       <Link to="/Details" class="btn btn-primary">Visit Us</Link>
           </div>
    
    </div>
  <div class="card">
    <img src="https://cdn.kalingatv.com/wp-content/uploads/2020/01/antique-gold-jewellery-collections.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>KALYAN JEWELLERS</u></h5>
      <p class="card-text">Kalyan Jewellers is an Indian chain of jewellery showrooms. It has presence across major cities in the country and in West Asia with a workforce strength of over 8,000 employees</p>
      <Link to="/Details" class="btn btn-primary">Visit Us</Link>
    </div>
    
  </div>
  <div class="card">
    <img src="http://tradeclick.in/web/image/product.template/966/image?unique=a71635b" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>MALABAR GOLD AND DIAMONDS</u></h5>
      <p class="card-text">We are the flagship company of Malabar Group. Established in 1993 in Kozhikode, Kerala.
</p>
      <Link to="/Details" class="btn btn-primary">Visit Us</Link>
    </div>
    
  </div>
</div>
  );


export default function Products() {
  return(
    <>
     <h1 className='products'></h1>;
     <div className="container">
       <div className="row">
           {cardItem}
           <br></br>
           {cardItem1}
       </div>
       
     </div>
     
     </>
  );
  
}
