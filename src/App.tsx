import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import content from '@/content/content'
import ContactPage from '@/pages/ContactPage'
import HomePage from '@/pages/HomePage'
import InquiryPage from '@/pages/InquiryPage'
import InquirySentPage from '@/pages/InquirySentPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ServicePage from '@/pages/ServicePage'

// Posun na začátek stránky při změně cesty
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  const { paths } = content
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        {content.services.map((service) => (
          <Route key={service.path} path={service.path} element={<ServicePage service={service} />} />
        ))}
        <Route path={paths.inquiry} element={<InquiryPage />} />
        <Route path={paths.inquirySent} element={<InquirySentPage />} />
        <Route path={paths.contact} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
