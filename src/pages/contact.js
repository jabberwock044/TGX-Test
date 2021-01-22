import React from 'react'
import { Link } from 'gatsby'
import ContactForm from "~/components/Contacts/contactform"
import SEO from '~/components/seo'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Contact Form　試作</h1>
    <p>メールがおくれるよーん</p>
    <ContactForm/>
    <Link to="/">ホーム</Link>
  </>
)

export default SecondPage
