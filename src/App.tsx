import './App.css'
import Home from './pages/home/home'
import { OverOns } from './pages/Site/SitePages/OverOns';

import { Routes, Route, Navigate, } from 'react-router-dom';
import { PreventieveGezondheidszorg } from './pages/Site/SitePages/Landelijk/Landelijk1';
import { MentaleGezondheid } from './pages/Site/SitePages/Landelijk/Landelijk2';
import { SubsidiesMedischeStudies } from './pages/Site/SitePages/Landelijk/Landelijk3';
import { Stedelijk1 } from './pages/Site/SitePages/Stedelijk/Stedelijk1';
import { Stedelijk2 } from './pages/Site/SitePages/Stedelijk/Stedelijk2';
import { Stedelijk3 } from './pages/Site/SitePages/Stedelijk/Stedelijk3';
import { Nieuws } from './pages/Site/SitePages/Nieuws';
import { Wetsvoorstel } from './pages/Site/SitePages/Wetsvoorstel';
import { Opgericht } from './pages/Site/SitePages/SiteInhoud/Nieuws/Opgericht';
import { PrivacyBeleid } from './pages/Site/SitePages/PrivacyBeleid';
import { TermsofService } from './pages/Site/SitePages/TermsOfService';
import { ScrollToTop } from './pages/layout/ScrollToTop';





export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path='/nieuws' element={<Nieuws />} />
        <Route path='/wetsvoorstel' element={<Wetsvoorstel />} />
        <Route path='/preventieve-gezondheidszorg' element={<PreventieveGezondheidszorg />} />
        <Route path='/mentale-gezondheid' element={<MentaleGezondheid />} />
        <Route path='/toegankelijker-maken-medische-studies' element={<SubsidiesMedischeStudies />} />
        <Route path='/sportprogramma-ouderen' element={<Stedelijk1 />} />
        <Route path='/school-vertrouwenspersoon' element={<Stedelijk2 />} />
        <Route path='/ggd-samenwerking-basisscholen' element={<Stedelijk3 />} />
        <Route path='/nieuws/opgericht' element={<Opgericht />} />
        <Route path='/privacy-policy' element={<PrivacyBeleid />} />
        <Route path='/terms-of-service' element={<TermsofService />} />

      </Routes>



    </>
  )
}


