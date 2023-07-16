import TrialComponent from './TrialComponent';
import FaqComponent from './FaqComponent';
import PlansComponent from './PlansComponent';
import RefferalsComponent from './RefferalsComponent';
import UsersComponent from './UsersComponent';
import FeaturesComponent from './FeaturesComponent';
import CompaniesComponent from './CompaniesComponent';
import LandingComponent from './LandingComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { headers } from "next/headers";


export default function LandingPage() {

    headers();

    return (
        <>
            <HeaderComponent />
            <LandingComponent />
            <CompaniesComponent />
            <FeaturesComponent />
            <UsersComponent />
            <RefferalsComponent />
            <PlansComponent />
            <FaqComponent />
            <TrialComponent />
            <FooterComponent />
        </>
    )
}