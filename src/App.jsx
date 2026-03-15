import {Button} from './Button'
import {Welcome} from './Welcome'
import './App.css'
import { UserProfile } from './UserProfile'
import { ContactForm } from './ContactForm'
import { StyledForm } from './StyledForm'
import { CandidateProfile } from './CandidateProfile'
import { Product } from './Product'
import { Greetings } from './Greetings'
import { CardWrapper } from './CardWrapper'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'


// Akhil Reddy
function App() {
  return (
    <>
      <ProductList/>
      <UserDetails name="Bruce" isOnline={true} />
      <UserDetails name="Clark" isOnline={false} />
      <CardWrapper title="user profile">
        <p>Bruce</p>
        <p>Batman@gamil.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
      <Greetings name="Clerk" message="Greetings"/>
      <Greetings name="Chikky"/>
      <Greetings message="sai"/>
      <Greetings/>
      <Product title="Laptop" price={999.99} inStock={true} categories={['Electronics', 'Computers','Gamming']} />
      <Welcome name="reddy" alias="Reddy"/>
      <Welcome name="john" alias="John"/>
      <Welcome name="jane" alias="Jane "/>
      <CandidateProfile/>
      <StyledForm/>
      <UserProfile/>
      <ContactForm/>
      <Button/>
    </>
  )
}

export default App
