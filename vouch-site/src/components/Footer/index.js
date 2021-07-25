import React from 'react'
import {FaFacebook, FaInstagram,FaTwitter} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import { FooterContainer ,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebsiteRight,
    SocialIconLink

} from './FooterElement'

const Footer = () => {

    const toggleHome= ()=>{
        scroll.scrollToTop();
    }
    return (
       <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>

                   <FooterLinkItems>
                           <FooterLinkTitle> About Us1</FooterLinkTitle>
                        <FooterLink to="/signin">
                            About Us
                        </FooterLink>
                        <FooterLink to="/signin">
                            Contact Us
                        </FooterLink><FooterLink to="/signin">
                            Testimonials
                        </FooterLink>                          
                       </FooterLinkItems>

                       <FooterLinkItems>
                           <FooterLinkTitle> About Us1</FooterLinkTitle>
                        <FooterLink to="/signin">
                            About Us
                        </FooterLink>
                        <FooterLink to="/signin">
                            Contact Us
                        </FooterLink><FooterLink to="/signin">
                            Testimonials
                        </FooterLink>
                          
                       </FooterLinkItems>
                   </FooterLinksWrapper>
                   
                    <FooterLinksWrapper>
                   <FooterLinkItems>
                           <FooterLinkTitle> About Us3</FooterLinkTitle>
                        <FooterLink to="/signin">
                            About Us
                        </FooterLink>
                        <FooterLink to="/signin">
                            Contact Us
                        </FooterLink><FooterLink to="/signin">
                            Testimonials
                        </FooterLink>
                          
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle> About Us3</FooterLinkTitle>
                        <FooterLink to="/signin">
                            About Us
                        </FooterLink>
                        <FooterLink to="/signin">
                            Contact Us
                        </FooterLink><FooterLink to="/signin">
                            Testimonials
                        </FooterLink>
                          
                       </FooterLinkItems>
                   
                        
                       
                       
                   </FooterLinksWrapper>
               </FooterLinksContainer> 
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>Works47 </SocialLogo>
               <WebsiteRight>Works47© {new Date().getFullYear()} All rights reserved.</WebsiteRight>
               <SocialIcons>
                   <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                       <FaFacebook/>
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                       <FaInstagram/>
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                       <FaTwitter/>
                       </SocialIconLink>
               </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

           </FooterWrap>
       </FooterContainer>
    )
}

export default Footer
