import React from 'react'
import { ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesIcon,
    ServicesP



} from './ServicesElements'

import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>Asen efo amcma nfca mifma.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Solar</ServicesH2>
                    <ServicesP>Asen efo amcma nfca mifma.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Utility</ServicesH2>
                    <ServicesP>Asen efo amcma nfca mifma.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        
    )
}

export default Services
